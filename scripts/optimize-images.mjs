
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const servicesDir = path.join(process.cwd(), 'public', 'images', 'services');

async function optimizeImages() {
    if (!fs.existsSync(servicesDir)) {
        console.error('Services directory not found:', servicesDir);
        return;
    }

    const files = fs.readdirSync(servicesDir);

    // Target Size: 600x750 (4:5 Aspect Ratio)
    // This covers the card height (480px + hover zoom) and provides 2x density for mobile (300px wide cols) or decent density for desktop.
    // We crop to center to discard wasted side-pixels of landscape images.
    const WIDTH = 600;
    const HEIGHT = 750;

    for (const file of files) {
        if (file.match(/\.(png|jpg|jpeg)$/i)) {
            const inputPath = path.join(servicesDir, file);
            const name = path.parse(file).name;
            const outputPath = path.join(servicesDir, `${name}.webp`);

            console.log(`Optimizing: ${file} -> ${name}.webp`);

            try {
                await sharp(inputPath)
                    .resize({
                        width: WIDTH,
                        height: HEIGHT,
                        fit: 'cover', // Crop to cover the aspect ratio
                        position: 'center' // Crop from center
                    })
                    .webp({ quality: 80, effort: 6 }) // Effort 6 = slower but better compression
                    .toFile(outputPath);

                console.log(`✅ Saved: ${name}.webp`);
            } catch (err) {
                console.error(`❌ Failed: ${file}`, err);
            }
        }
    }
}

optimizeImages();
