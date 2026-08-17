const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const OPTIMIZED_DIRECTORY = path.join(__dirname, 'src', 'Images', 'optimized');

const isInsideDirectory = (filePath, directoryPath) => {
  const relativePath = path.relative(directoryPath, filePath);
  return relativePath === '' || (
    relativePath !== '..' &&
    !relativePath.startsWith(`..${path.sep}`) &&
    !path.isAbsolute(relativePath)
  );
};

const fileExists = async (filePath) => {
  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

const createOptimizationPlan = async (inputPaths, outputDirectory) => {
  if (inputPaths.length === 0) {
    throw new Error('Provide at least one PNG path to optimize.');
  }

  const resolvedOutputDirectory = path.resolve(outputDirectory);
  const plannedBasenames = new Set();
  const resolvedInputs = inputPaths.map((inputPath) => {
    const resolvedInputPath = path.resolve(inputPath);
    const basename = path.basename(resolvedInputPath);

    if (path.extname(basename).toLowerCase() !== '.png') {
      throw new Error(`Only PNG inputs are supported: ${inputPath}`);
    }

    if (isInsideDirectory(resolvedInputPath, resolvedOutputDirectory)) {
      throw new Error(`Input is already inside the optimized directory: ${inputPath}`);
    }

    const collisionKey = basename.toLowerCase();
    if (plannedBasenames.has(collisionKey)) {
      throw new Error(`Multiple inputs would produce the same output: ${basename}`);
    }
    plannedBasenames.add(collisionKey);

    return { basename, inputPath: resolvedInputPath, suppliedPath: inputPath };
  });

  return Promise.all(resolvedInputs.map(async ({ basename, inputPath, suppliedPath }) => {
    let inputStats;
    try {
      inputStats = await fs.promises.stat(inputPath);
    } catch {
      throw new Error(`Input does not exist: ${suppliedPath}`);
    }

    if (!inputStats.isFile()) {
      throw new Error(`Input is not a file: ${suppliedPath}`);
    }

    const outputPath = path.join(resolvedOutputDirectory, basename);
    if (await fileExists(outputPath)) {
      throw new Error(`Output already exists: ${outputPath}`);
    }

    return { basename, inputPath, inputStats, outputPath };
  }));
};

const optimizePngs = async (inputPaths, { outputDirectory = OPTIMIZED_DIRECTORY } = {}) => {
  const plan = await createOptimizationPlan(inputPaths, outputDirectory);
  await fs.promises.mkdir(path.resolve(outputDirectory), { recursive: true });

  return Promise.all(plan.map(async ({ basename, inputPath, inputStats, outputPath }) => {
    await sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .png({ adaptiveFiltering: true, compressionLevel: 9 })
      .toFile(outputPath);

    const outputStats = await fs.promises.stat(outputPath);
    return {
      basename,
      inputBytes: inputStats.size,
      outputBytes: outputStats.size,
      outputPath
    };
  }));
};

const formatMegabytes = (bytes) => (bytes / 1024 / 1024).toFixed(1);

const runCli = async () => {
  try {
    const results = await optimizePngs(process.argv.slice(2));
    results.forEach(({ basename, inputBytes, outputBytes }) => {
      const reduction = ((inputBytes - outputBytes) / inputBytes * 100).toFixed(1);
      console.log(
        `✓ ${basename}: ${formatMegabytes(inputBytes)}MB → ${formatMegabytes(outputBytes)}MB (${reduction}% reduction)`
      );
    });
    console.log('Image optimization complete!');
  } catch (error) {
    console.error(`Image optimization failed: ${error.message}`);
    process.exitCode = 1;
  }
};

if (require.main === module) {
  runCli();
}

module.exports = {
  OPTIMIZED_DIRECTORY,
  createOptimizationPlan,
  optimizePngs,
  runCli
};
