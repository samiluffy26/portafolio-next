import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const SIZE = 192;

// Create a circular mask SVG
const circleMask = Buffer.from(
  `<svg width="${SIZE}" height="${SIZE}">
    <circle cx="${SIZE/2}" cy="${SIZE/2}" r="${SIZE/2}" fill="white"/>
  </svg>`
);

async function generateFavicon() {
  const input = join(publicDir, 'me.jpg');

  // Get image metadata to find center
  const metadata = await sharp(input).metadata();
  const minDim = Math.min(metadata.width, metadata.height);

  // Crop to square from center, then resize, then apply circular mask
  const resized = await sharp(input)
    .resize(SIZE, SIZE, { fit: 'cover', position: 'top' })
    .toBuffer();

  // Apply circular mask
  const circular = await sharp(resized)
    .composite([{
      input: circleMask,
      blend: 'dest-in'
    }])
    .png()
    .toBuffer();

  // Generate multiple sizes
  // 32x32 for favicon
  await sharp(circular)
    .resize(32, 32)
    .png()
    .toFile(join(publicDir, 'favicon-32.png'));

  // 16x16 for favicon
  await sharp(circular)
    .resize(16, 16)
    .png()
    .toFile(join(publicDir, 'favicon-16.png'));

  // 192x192 for apple-touch-icon and android
  await sharp(circular)
    .png()
    .toFile(join(publicDir, 'favicon-192.png'));

  // Also create an ICO-compatible 32x32
  await sharp(circular)
    .resize(32, 32)
    .png()
    .toFile(join(publicDir, 'favicon.png'));

  console.log('✅ Favicons generated successfully!');
  console.log('   - favicon.png (32x32)');
  console.log('   - favicon-16.png (16x16)');
  console.log('   - favicon-32.png (32x32)');
  console.log('   - favicon-192.png (192x192)');
}

generateFavicon().catch(console.error);
