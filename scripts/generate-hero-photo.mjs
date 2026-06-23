import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const SIZE = 600;

// Create a circular mask SVG
const circleMask = Buffer.from(
  `<svg width="${SIZE}" height="${SIZE}">
    <circle cx="${SIZE/2}" cy="${SIZE/2}" r="${SIZE/2}" fill="white"/>
  </svg>`
);

async function generateHeroPhoto() {
  const input = join(publicDir, 'me.jpg');

  // Resize to square, crop from top to capture face well
  const resized = await sharp(input)
    .resize(SIZE, SIZE, { fit: 'cover', position: 'top' })
    .toBuffer();

  // Apply circular mask with transparent background
  const circular = await sharp(resized)
    .composite([{
      input: circleMask,
      blend: 'dest-in'
    }])
    .png()
    .toFile(join(publicDir, 'me-circle.png'));

  console.log('✅ Circular hero photo generated: me-circle.png (600x600)');
}

generateHeroPhoto().catch(console.error);
