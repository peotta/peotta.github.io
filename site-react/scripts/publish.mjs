// Publica o build na raiz do site (GitHub Pages serve a branch main a partir da raiz).
// Copia somente o que o Vite gerou: as paginas de PAGES (dist/<pagina> -> ../<pagina>) e
// dist/assets/react/ -> ../assets/react/ (limpando bundles antigos). Nada mais e tocado.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(here, '..', 'dist');
const root = path.resolve(here, '..', '..');

// Paginas geradas pelo Vite (mesmas entradas de rollupOptions.input em vite.config.js).
const PAGES = ['index.html', 'guias/dicas.html', 'orientacao/mestrado-ppee.html'];

const bundleSrc = path.join(dist, 'assets', 'react');
const bundleDst = path.join(root, 'assets', 'react');

if (PAGES.some((p) => !fs.existsSync(path.join(dist, p))) || !fs.existsSync(bundleSrc)) {
  console.error('dist/ incompleto: rode "vite build" antes.');
  process.exit(1);
}

fs.rmSync(bundleDst, { recursive: true, force: true });
fs.cpSync(bundleSrc, bundleDst, { recursive: true });
for (const page of PAGES) {
  fs.mkdirSync(path.dirname(path.join(root, page)), { recursive: true });
  fs.copyFileSync(path.join(dist, page), path.join(root, page));
}

const files = fs.readdirSync(bundleDst);
console.log(`publicado: ${PAGES.join(', ')} + assets/react/ (${files.join(', ')})`);
