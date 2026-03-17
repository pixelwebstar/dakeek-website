const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImagePath = path.join(__dirname, '../public/images/logo_raw.png');
const outputDir = path.join(__dirname, '../public');
const iconsDir = path.join(outputDir, 'icons');
const appDir = path.join(__dirname, '../src/app');

if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
}

async function generateIcons() {
    try {
        console.log('Trimming and generating icons...');
        
        // 1. favicon.png (32x32)
        await sharp(inputImagePath)
            .trim()
            .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .toFile(path.join(outputDir, 'favicon.png'));

        // 2. icon-192.png
        await sharp(inputImagePath)
            .trim()
            .resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .toFile(path.join(iconsDir, 'icon-192.png'));

        // 3. icon-512.png
        await sharp(inputImagePath)
            .trim()
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .toFile(path.join(iconsDir, 'icon-512.png'));

        // 4. apple-touch-icon.png (180x180)
        await sharp(inputImagePath)
            .trim()
            .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
            .toFile(path.join(iconsDir, 'apple-touch-icon.png'));

        console.log('Icons generated in public/. Syncing to src/app...');

        // Sync to src/app for Next.js App Router
        fs.copyFileSync(path.join(outputDir, 'favicon.png'), path.join(appDir, 'icon.png'));
        fs.copyFileSync(path.join(iconsDir, 'apple-touch-icon.png'), path.join(appDir, 'apple-icon.png'));

        console.log('Successfully synced icons to src/app.');

    } catch (error) {
        console.error('Error generating icons:', error);
    }
}

generateIcons();
