// Publica o build na raiz do site (GitHub Pages serve a branch main a partir da raiz).
// Copia somente o que o Vite gerou: dist/index.html -> ../index.html e
// dist/assets/react/ -> ../assets/react/ (limpando bundles antigos). Nada mais e tocado.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(here, '..', 'dist');
const root = path.resolve(here, '..', '..');

const bundleSrc = path.join(dist, 'assets', 'react');
const bundleDst = path.join(root, 'assets', 'react');

if (!fs.existsSync(path.join(dist, 'index.html')) || !fs.existsSync(bundleSrc)) {
  console.error('dist/ incompleto: rode "vite build" antes.');
  process.exit(1);
}

fs.rmSync(bundleDst, { recursive: true, force: true });
fs.cpSync(bundleSrc, bundleDst, { recursive: true });
fs.copyFileSync(path.join(dist, 'index.html'), path.join(root, 'index.html'));

const files = fs.readdirSync(bundleDst);
console.log(`publicado: index.html + assets/react/ (${files.join(', ')})`);
