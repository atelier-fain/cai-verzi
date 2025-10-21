import sharp from 'sharp';
import { readdirSync, unlinkSync, readFileSync, writeFileSync } from 'fs';
import { join, basename } from 'path';

// Directoare în care să căutăm imagini pentru conversie
const imageDirs = [
  './src/assets',
  './public'
];

const srcDir = './src';

// Set cu numele fișierelor convertite (fără extensie)
const convertedFiles = new Set();

// Pas 1: Convertește imaginile
async function convertImages(dir) {
  const files = readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = join(dir, file.name);

    if (file.isDirectory()) {
      // Recursiv în subfoldere
      await convertImages(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file.name)) {
      const outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      const fileNameWithoutExt = file.name.replace(/\.(jpg|jpeg|png)$/i, '');

      try {
        await sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(outputPath);

        // Salvează numele fișierului convertit (fără extensie)
        convertedFiles.add(fileNameWithoutExt);

        // Șterge imaginea originală
        unlinkSync(fullPath);

        console.log(`✓ Converted & deleted: ${fullPath} → ${basename(outputPath)}`);
      } catch (error) {
        console.error(`✗ Error converting ${fullPath}:`, error.message);
      }
    }
  }
}

// Pas 2: Înlocuiește referințele în cod DOAR pentru fișierele convertite
function replaceInFiles(dir) {
  const files = readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = join(dir, file.name);

    if (file.isDirectory() && !file.name.includes('node_modules')) {
      replaceInFiles(fullPath);
    } else if (/\.(vue|js|ts|jsx|tsx|html|css|scss)$/i.test(file.name)) {
      let content = readFileSync(fullPath, 'utf8');
      let modified = false;

      // Înlocuiește DOAR pentru fișierele care au fost convertite
      convertedFiles.forEach(fileName => {
        // Caută pattern-uri ca: fileName.png, fileName.jpg, fileName.jpeg
        const pattern = new RegExp(`${fileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\.(jpg|jpeg|png)`, 'gi');

        if (pattern.test(content)) {
          content = content.replace(pattern, `${fileName}.webp`);
          modified = true;
        }
      });

      if (modified) {
        writeFileSync(fullPath, content, 'utf8');
        console.log(`📝 Updated references in: ${fullPath.replace(srcDir + '/', '')}`);
      }
    }
  }
}

// Rulează procesul
(async () => {
  console.log('🖼️  Converting images to WebP...\n');

  // Convertește imagini din toate directoarele
  for (const dir of imageDirs) {
    console.log(`📁 Scanning: ${dir}`);
    await convertImages(dir);
  }

  if (convertedFiles.size > 0) {
    console.log('\n📝 Replacing references in code...\n');
    replaceInFiles(srcDir);
    console.log('\n✅ Done! Converted', convertedFiles.size, 'images');
  } else {
    console.log('\n⚠️  No images found to convert');
  }
})();
