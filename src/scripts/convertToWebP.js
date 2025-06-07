const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../Images');
const targetDir = path.join(__dirname, '../Images/webp');

// Create webp directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
}

// Get all image files
const imageFiles = fs.readdirSync(sourceDir).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.png', '.jpg', '.jpeg', '.heic'].includes(ext);
});

// Convert each image to WebP
imageFiles.forEach(async (file) => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, `${path.parse(file).name}.webp`);
    
    try {
        await sharp(sourcePath)
            .webp({ quality: 80 }) // Adjust quality as needed (0-100)
            .toFile(targetPath);
        console.log(`Converted ${file} to WebP`);
    } catch (error) {
        console.error(`Error converting ${file}:`, error);
    }
}); 