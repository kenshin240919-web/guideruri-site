# 정쌤의 디지털 생활안내

Buildless Korean digital help site. Run `node build.mjs` to generate the HTML pages and sitemap. CSS and browser JavaScript are maintained directly in `dist/`. No dependencies or external image/font/CDN services are needed.

Includes fifteen guide articles, accessible search/category filters, a browser-local image resizer/compressor, editorial/about, contact, topic and privacy pages, a sitemap and a 404 page. Images selected in the tool are never uploaded. No advertising or analytics code is included.

After generating pages or editing `dist/style.css` or `dist/site.js`, run `node optimize.mjs`. It embeds the small shared stylesheet and search script into the landing page to remove two startup requests, and removes the unused search script from inner pages. It preserves the photo tool script and shared stylesheet on inner pages. Run it last before packaging; it is safe to repeat.

Before public AdSense use: review the privacy policy for actual services and jurisdiction; choose a public domain and hosting that supports ad verification and script injection; adjust canonical and sitemap origins if the domain changes; publish publicly and check crawler access. Private Sites hosting cannot be reviewed as a public AdSense site. This first edition is not an AdSense approval guarantee.
