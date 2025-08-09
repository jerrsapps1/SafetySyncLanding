import { mkdirSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const from = join(__dirname, '..', 'public');
const to   = join(__dirname, '..', 'dist', 'public');

mkdirSync(to, { recursive: true });

for (const f of ['_headers', '_redirects']) {
  try {
    copyFileSync(join(from, f), join(to, f));
    console.log('Copied', f);
  } catch (e) {
    console.warn('Skip', f, e.message);
  }
}
