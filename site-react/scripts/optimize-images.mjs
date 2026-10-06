// Gera versoes WebP otimizadas das imagens grandes usadas pelo site React.
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const jobs = [
  { src: 'assets/img/foto-perfil-unb.png', out: 'assets/img/foto-perfil-unb.webp', width: 840 },
  { src: 'assets/img/latencia-zero-podcast.png', out: 'assets/img/latencia-zero-podcast.webp', width: 1200 },
  { src: 'arquivos/Ravens-logo.png', out: 'assets/img/ravens-logo.webp', width: 800 },
];

for (const job of jobs) {
  const info = await sharp(path.join(root, job.src))
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(root, job.out));
  console.log(`${job.out}: ${(info.size / 1024).toFixed(0)} KB`);
}
