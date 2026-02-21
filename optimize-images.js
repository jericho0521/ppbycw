const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'src', 'Images');
const optimizedDir = path.join(imagesDir, 'optimized');

// Ensure optimized directory exists
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Get all PNG files in the images directory
const imageFiles = fs.readdirSync(imagesDir)
  .filter(file => file.toLowerCase().endsWith('.png'))
  .filter(file => !file.includes('_optimized')); // Skip already optimized files

console.log('Optimizing images for AWS cost reduction...');

imageFiles.forEach(async (file) => {
  const inputPath = path.join(imagesDir, file);
  const outputPath = path.join(optimizedDir, file.replace('.png', '.jpg'));

  try {
    await sharp(inputPath)
      .resize(1200, null, {
        withoutEnlargement: true
      })
      .jpeg({ quality: 80, progressive: true })
      .toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

    console.log(`✓ ${file.replace('.png', '.jpg')}: ${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(optimizedSize / 1024 / 1024).toFixed(1)}MB (${reduction}% reduction)`);
  } catch (error) {
    console.error(`✗ Error optimizing ${file}:`, error.message);
  }
});

console.log('Image optimization complete!');
console.log('Total size reduction achieved for AWS cost savings.');
