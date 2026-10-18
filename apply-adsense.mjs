import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve('dist');
const script = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1265732107215441" crossorigin="anonymous"></script>';
let count = 0;
function visit(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const filename = join(directory, entry.name);
    if (entry.isDirectory()) { visit(filename); continue; }
    if (!entry.name.endsWith('.html')) continue;
    let html = readFileSync(filename, 'utf8');
    const original = html;
    // Replace any previous loader instead of loading AdSense twice.
    html = html.replace(/<script\b[^>]*\bsrc=["']https:\/\/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js[^"']*["'][^>]*>\s*<\/script>/g, '');
    if (!html.includes('</head>')) throw new Error(`Missing head: ${filename}`);
    html = html.replace('</head>', script + '</head>');
    if (filename === join(root, 'privacy', 'index.html')) {
      html = html.replace('사이트 자체 코드에는 광고·방문 통계·추적 스크립트와 별도 쿠키 저장 기능이 없습니다.', '이 사이트는 Google AdSense 스크립트를 불러옵니다. 자체 방문 통계 스크립트와 별도 쿠키 저장 기능은 추가하지 않았습니다.');
      html = html.replace('6. 광고 도입 시 안내', '6. Google 광고 관련 안내');
      html = html.replace('현재 Google AdSense 광고, 광고 쿠키 또는 광고용 추적 스크립트는 사용하지 않습니다. 향후 Google 광고를 도입하는 경우', 'Google AdSense 연결 코드를 사용하며, 실제 광고 표시 여부는 계정 설정과 승인 상태 등에 따라 달라집니다. 광고가 제공되는 경우');
    }
    if (html !== original) { writeFileSync(filename, html); count++; }
  }
}
visit(root);
console.log(`Applied AdSense to ${count} HTML pages.`);
