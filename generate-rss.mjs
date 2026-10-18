import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve('dist');
const origin = 'https://guideruri.com';
const feedUrl = `${origin}/rss.xml`;
const xml = value => String(value).replace(/[<>&"']/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[c]);
const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
const items = [...sitemap.matchAll(/<loc>(https:\/\/guideruri\.com\/guides\/[^<]+)<\/loc>/g)].map(([ , url]) => {
  const html = readFileSync(join(root, new URL(url).pathname, 'index.html'), 'utf8');
  const article = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map(m => JSON.parse(m[1])).find(data => data['@type'] === 'Article');
  if (!article?.headline || !article.description || !article.datePublished) throw new Error(`Incomplete article metadata: ${url}`);
  const timestamp = Date.parse(article.datePublished);
  if (!Number.isFinite(timestamp)) throw new Error(`Invalid publication date: ${url}`);
  return { url, article, timestamp };
}).sort((a, b) => b.timestamp - a.timestamp);
if (!items.length) throw new Error('No articles found for RSS.');
const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>정쌤의 디지털 생활안내</title>
<link>${origin}/</link>
<description>스마트폰, PC, 사진과 문서의 작은 문제를 쉬운 순서로 해결하는 생활 안내서</description>
<language>ko</language>
<atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
${items.map(({ url, article, timestamp }) => `<item>
<title>${xml(article.headline)}</title>
<link>${xml(url)}</link>
<guid isPermaLink="true">${xml(url)}</guid>
<description>${xml(article.description)}</description>
<pubDate>${new Date(timestamp).toUTCString()}</pubDate>
</item>`).join('\n')}
</channel>
</rss>
`;
writeFileSync(join(root, 'rss.xml'), feed);
const discovery = `<link rel="alternate" type="application/rss+xml" title="정쌤의 디지털 생활안내 RSS" href="${feedUrl}">`;
function addDiscovery(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const filename = join(directory, entry.name);
    if (entry.isDirectory()) { addDiscovery(filename); continue; }
    if (!entry.name.endsWith('.html')) continue;
    const html = readFileSync(filename, 'utf8');
    if (!html.includes(discovery)) writeFileSync(filename, html.replace('</head>', discovery + '</head>'));
  }
}
addDiscovery(root);
console.log(`Generated RSS with ${items.length} articles: ${feedUrl}`);
