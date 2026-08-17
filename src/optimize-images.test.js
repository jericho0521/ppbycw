const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const repositoryRoot = path.join(__dirname, '..');

const runNode = (source, args = []) => spawnSync(process.execPath, ['-e', source, ...args], {
  cwd: repositoryRoot,
  encoding: 'utf8'
});

const createPng = (filePath, width = 1600, height = 800) => {
  const result = runNode(`
    const sharp = require('sharp');
    sharp({
      create: {
        width: Number(process.argv[1]),
        height: Number(process.argv[2]),
        channels: 4,
        background: { r: 20, g: 40, b: 60, alpha: 1 }
      }
    }).png().toFile(process.argv[3]).catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
  `, [String(width), String(height), filePath]);

  expect(result.status).toBe(0);
};

const optimize = (inputPaths, outputDirectory) => runNode(`
  const { optimizePngs } = require('./optimize-images');
  optimizePngs(JSON.parse(process.argv[1]), { outputDirectory: process.argv[2] })
    .then((results) => process.stdout.write(JSON.stringify(results)))
    .catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
`, [JSON.stringify(inputPaths), outputDirectory]);

const readMetadata = (filePath) => {
  const result = runNode(`
    const sharp = require('sharp');
    sharp(process.argv[1]).metadata()
      .then((metadata) => process.stdout.write(JSON.stringify(metadata)))
      .catch((error) => {
        console.error(error.message);
        process.exitCode = 1;
      });
  `, [filePath]);

  expect(result.status).toBe(0);
  return JSON.parse(result.stdout);
};

describe('optimize-images', () => {
  let temporaryDirectory;
  let inputDirectory;
  let outputDirectory;

  beforeEach(async () => {
    temporaryDirectory = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'ppbycw-images-'));
    inputDirectory = path.join(temporaryDirectory, 'input');
    outputDirectory = path.join(temporaryDirectory, 'optimized');
    await fs.promises.mkdir(inputDirectory);
  });

  afterEach(async () => {
    await fs.promises.rm(temporaryDirectory, { recursive: true, force: true });
  });

  it('preserves PNG format and basename while resizing only after completion', () => {
    const inputPath = path.join(inputDirectory, 'event-poster.png');
    const secondInputPath = path.join(inputDirectory, 'event-thumbnail.png');
    createPng(inputPath);
    createPng(secondInputPath, 600, 300);

    const optimization = optimize([inputPath, secondInputPath], outputDirectory);
    expect(optimization.status).toBe(0);
    const [result, secondResult] = JSON.parse(optimization.stdout);
    const metadata = readMetadata(result.outputPath);

    expect(path.basename(result.outputPath)).toBe('event-poster.png');
    expect(metadata.format).toBe('png');
    expect(metadata.width).toBe(1200);
    expect(metadata.height).toBe(600);
    expect(fs.existsSync(result.outputPath)).toBe(true);
    expect(fs.existsSync(secondResult.outputPath)).toBe(true);
  });

  it('rejects missing and non-PNG inputs', async () => {
    const noInputs = optimize([], outputDirectory);
    expect(noInputs.status).toBe(1);
    expect(noInputs.stderr).toContain('at least one PNG');

    const missingInput = optimize([path.join(inputDirectory, 'missing.png')], outputDirectory);
    expect(missingInput.status).toBe(1);
    expect(missingInput.stderr).toContain('does not exist');

    const jpegPath = path.join(inputDirectory, 'event.jpg');
    await fs.promises.writeFile(jpegPath, 'not an image');
    const nonPngInput = optimize([jpegPath], outputDirectory);
    expect(nonPngInput.status).toBe(1);
    expect(nonPngInput.stderr).toContain('Only PNG');
  });

  it('rejects existing and duplicate destination basenames before writing', async () => {
    const firstInput = path.join(inputDirectory, 'shared.png');
    const secondInputDirectory = path.join(temporaryDirectory, 'second-input');
    const secondInput = path.join(secondInputDirectory, 'shared.png');
    await fs.promises.mkdir(secondInputDirectory);
    createPng(firstInput);
    createPng(secondInput);

    const duplicateOutput = optimize([firstInput, secondInput], outputDirectory);
    expect(duplicateOutput.status).toBe(1);
    expect(duplicateOutput.stderr).toContain('same output');

    await fs.promises.mkdir(outputDirectory);
    createPng(path.join(outputDirectory, 'shared.png'));
    const existingOutput = optimize([firstInput], outputDirectory);
    expect(existingOutput.status).toBe(1);
    expect(existingOutput.stderr).toContain('already exists');
  });

  it('rejects inputs already inside the output directory', async () => {
    await fs.promises.mkdir(outputDirectory);
    const optimizedInput = path.join(outputDirectory, 'existing.png');
    createPng(optimizedInput);

    const optimizedDirectoryInput = optimize([optimizedInput], outputDirectory);
    expect(optimizedDirectoryInput.status).toBe(1);
    expect(optimizedDirectoryInput.stderr).toContain('already inside the optimized directory');
  });

  it('sets a nonzero CLI exit code when optimization fails', () => {
    const cliResult = spawnSync(process.execPath, [path.join(repositoryRoot, 'optimize-images.js')], {
      cwd: repositoryRoot,
      encoding: 'utf8'
    });

    expect(cliResult.status).toBe(1);
    expect(cliResult.stderr).toContain('Provide at least one PNG path');
  });
});
