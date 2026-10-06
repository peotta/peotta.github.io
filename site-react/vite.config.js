import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');

// Pastas do site estatico existente que o app React referencia por caminho absoluto.
const legacyDirs = ['/classico.html', '/assets/', '/arquivos/', '/guias/', '/labs/', '/simuladores/', '/certificacoes/'];
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.pdf': 'application/pdf',
};

// Em desenvolvimento, serve as paginas e imagens do repositorio para que os links funcionem.
function serveLegacySite() {
  return {
    name: 'serve-legacy-site',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = decodeURIComponent((req.url || '').split('?')[0]);
        if (!legacyDirs.some((dir) => url.startsWith(dir))) return next();
        const file = path.join(repoRoot, url);
        if (!file.startsWith(repoRoot) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) return next();
        res.setHeader('Content-Type', mime[path.extname(file).toLowerCase()] || 'application/octet-stream');
        fs.createReadStream(file).pipe(res);
      });
    },
  };
}

// O build vai para dist/ (ignorado pelo git). Depois, scripts/publish.mjs copia
// index.html para a raiz do repositorio e os bundles para assets/react/.
export default defineConfig({
  base: '/',
  plugins: [react(), serveLegacySite()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets/react',
  },
});
