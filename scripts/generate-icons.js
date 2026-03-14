const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const input = 'public/images/logo_raw.png';
const outputDir = 'public/icons';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function generateIcons() {
    try {
        const logo = sharp(input).trim(); // Remove excess background

        // 1. Squared & Optimized for PWA (192, 512)
        await logo.clone()
            .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
            .toFile(path.join(outputDir, 'icon-192.png'));
        console.log('Generated icon-192.png (zoomed)');

        await logo.clone()
            .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
            .toFile(path.join(outputDir, 'icon-512.png'));
        console.log('Generated icon-512.png (zoomed)');

        // 2. Apple Touch Icon
        await logo.clone()
            .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
            .toFile(path.join(outputDir, 'apple-touch-icon.png'));
        console.log('Generated apple-touch-icon.png (zoomed)');

        // 3. Favicon (PNG version + Overwrite ICO if possible)
        await logo.clone()
            .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
            .toFile('public/favicon.png');
        console.log('Generated favicon.png (zoomed)');

        await logo.clone()
            .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
            .toFile('public/favicon.ico');
        console.log('Generated public/favicon.ico (zoomed)');

        await logo.clone()
            .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
            .toFile('src/app/favicon.ico');
        console.log('Generated src/app/favicon.ico (zoomed)');

        // 4. OpenGraph Banner (1200x630)
        // Zoomed in version with decent padding for social platforms
        await logo.clone()
            .resize(900, 480, { fit: 'contain', background: { r: 9, g: 9, b: 11, alpha: 0 } })
            .extend({
                top: 75,
                bottom: 75,
                left: 150,
                right: 150,
                background: { r: 9, g: 9, b: 11, alpha: 1 } // Zinc-950
            })
            .toFile('public/images/og-banner.png');
        console.log('Generated og-banner.png (improved)');

    } catch (err) {
        console.error('Error generating icons:', err);
    }
}

generateIcons();
