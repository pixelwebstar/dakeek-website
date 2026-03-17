const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImagePath = path.join(__dirname, '../public/images/logo_raw.png');
const outputDir = path.join(__dirname, '../public');
const iconsDir = path.join(outputDir, 'icons');

if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
}

async function generateIcons() {
    try {
        console.log('Generating favicon.png (32x32)...');
        await sharp(inputImagePath)
            .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .toFile(path.join(outputDir, 'favicon.png'));

        // For favicon.ico we use a specific package for .ico generation if sharp doesn't support,
        // Actually, sharp can output raw buffer to png to ico package if needed,
        // but modern browsers use favicon.png if present anyway. Next.js supports `.png` favicon.
        
        console.log('Generating icon-192.png...');
        await sharp(inputImagePath)
            .resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .toFile(path.join(iconsDir, 'icon-192.png'));

        console.log('Generating icon-512.png...');
        await sharp(inputImagePath)
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .toFile(path.join(iconsDir, 'icon-512.png'));

        console.log('Generating apple-touch-icon.png (180x180)...');
        await sharp(inputImagePath)
            .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } }) // Solid white background as typical for apple icons
            .toFile(path.join(iconsDir, 'apple-touch-icon.png'));

        console.log('Icons generated successfully.');
        
        // Remove the default next.js favicon.ico to ensure our favicon.png is used
        if (fs.existsSync(path.join(outputDir, 'favicon.ico'))) {
            fs.unlinkSync(path.join(outputDir, 'favicon.ico'));
            console.log('Removed old favicon.ico');
        }

    } catch (error) {
        console.error('Error generating icons:', error);
    }
}

generateIcons();
