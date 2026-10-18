import {readFileSync,writeFileSync,readdirSync} from 'node:fs';
import path from 'node:path';
const pages={};
function walk(dir){for(const item of readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,item.name);if(item.isDirectory())walk(p);else if(item.name==='index.html'){const key='/'+path.relative('dist',dir).replaceAll('\\','/')+(dir==='dist'?'':'/');pages[key]=readFileSync(p,'utf8')}}}
walk('dist');
const css=readFileSync('dist/style.css','utf8');
const home=readFileSync('dist/site.js','utf8').replaceAll('location.search',"(window.previewSearch||'')");
const photo=readFileSync('dist/photo.js','utf8');
let shell=readFileSync('dist/index.html','utf8').replace('<link rel="stylesheet" href="/style.css">',`<style>${css}</style>`).replace('<script src="/site.js" defer></script>','');
shell=shell.replace('<link rel="icon" href="/favicon.svg" type="image/svg+xml">','');
const code=`const pages=${JSON.stringify(pages).replaceAll('<','\\u003c')};function initHome(){${home}}function initPhoto(){${photo}}function render(raw){const u=new URL(raw,'https://offline.local');let p=u.pathname;if(!p.endsWith('/'))p+='/';if(!pages[p])return;window.previewSearch=u.search;const doc=new DOMParser().parseFromString(pages[p],'text/html');document.querySelector('main').replaceWith(doc.querySelector('main'));document.title=doc.title;if(p==='/')initHome();if(p==='/tools/photo/')initPhoto();if(u.hash){document.getElementById(u.hash.slice(1))?.scrollIntoView()}else scrollTo(0,0)}document.addEventListener('click',e=>{const a=e.target.closest('a');if(!a)return;const href=a.getAttribute('href');if(href?.startsWith('/')){e.preventDefault();const target='#preview='+encodeURIComponent(href);if(location.hash===target)render(href);else location.hash=target;}});window.addEventListener('hashchange',()=>{if(location.hash.startsWith('#preview='))render(decodeURIComponent(location.hash.slice(9)))});if(location.hash.startsWith('#preview='))render(decodeURIComponent(location.hash.slice(9)));else initHome();`;
shell=shell.replace('</body>',`<script>${code}</script></body>`);
writeFileSync('../digital-guide-preview.html',shell);
console.log('Created self-contained offline preview.');
