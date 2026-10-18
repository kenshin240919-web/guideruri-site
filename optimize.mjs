import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

// Keep the landing page self-contained to avoid a render-blocking CSS request.
// Inner pages retain shared CSS; only the landing page uses search filtering.
const root = resolve('dist');
const css = readFileSync(join(root, 'style.css'), 'utf8').trim();
const js = readFileSync(join(root, 'site.js'), 'utf8').trim();
if (/<\/style/i.test(css) || /<\/script/i.test(js)) {
  throw new Error('Inline assets contain an HTML closing tag.');
}
let count = 0;
function visit(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const filename = join(directory, entry.name);
    if (entry.isDirectory()) { visit(filename); continue; }
    if (!entry.name.endsWith('.html')) continue;
    let html = readFileSync(filename, 'utf8');
    const original = html;
    if (filename === join(root, 'index.html')) {
      const style = `<style id="landing-style">${css}</style>`;
      const script = `<script id="landing-search">${js}</script>`;
      html = html.replace(/<link rel="stylesheet" href="\/style\.css">|<style id="landing-style">[\s\S]*?<\/style>/, () => style);
      html = html.replace(/<script src="\/site\.js" defer><\/script>|<script id="landing-search">[\s\S]*?<\/script>/, () => script);
    } else {
      if (html.includes('class="search"')) throw new Error(`Unexpected search page: ${filename}`);
      html = html.replace('<script src="/site.js" defer></script>', '');
    }
    if (html !== original) { writeFileSync(filename, html); count++; }
  }
}
visit(root);
console.log(`Optimized ${count} HTML pages.`);
await import('./generate-rss.mjs');
await import('./apply-adsense.mjs');
