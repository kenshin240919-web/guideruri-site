# guideruri.com (정쌤의 디지털 생활안내) 운영 안내

이 폴더는 https://guideruri.com 의 소스입니다. 스마트폰·PC·사진/문서 사용법을 쉬운 존댓말로 안내하는 정적 사이트입니다.

## 매일 자동 발행
- Claude 데스크톱 앱의 예약 작업 **`guideruri-daily-post`**(매일 09:00쯤)가 겹치지 않는 주제로 글 1편을 쓰고 발행합니다.
  지시문: `C:\Users\User\.claude\scheduled-tasks\guideruri-daily-post\SKILL.md`. 앱이 꺼져 있으면 다음에 켤 때 실행됩니다.
- 예전에는 코덱스가 발행했지만 지금은 사용하지 않습니다. 같은 날 두 편이 올라가지 않게, 오늘 날짜 글이 있으면 발행하지 않습니다.

## 구조와 배포
- 글 데이터: 새 글은 `daily-guides.mjs` 배열 **맨 앞**에 추가합니다. 처음 올린 글은 `build.mjs`, `additional-guides.mjs`에 있습니다.
- 빌드: `node build.mjs && node optimize.mjs` → `dist/`에 페이지·사이트맵·RSS가 생성됩니다.
- 배포: `main`에 push하면 GitHub Actions(`.github/workflows/pages.yml`)가 `dist/`를 GitHub Pages로 배포합니다.
  저장소: kenshin240919-web/guideruri-site (**공개** 저장소이므로 키나 개인정보를 넣지 마세요).
- 도메인: 가비아 DNS(A 레코드 185.199.108~111.153, www CNAME) → GitHub Pages. HTTPS는 GitHub가 자동 갱신합니다.

## 지킬 것
- 모든 글은 `anthropic-skills:korean-blog-anti-slop` 스킬로 다듬은 뒤 올립니다.
- 기존 글을 고쳐도 `published`·`modified` 날짜는 바꾸지 않습니다. 전날 날짜로 소급해 쓰지 않습니다.
- 공식 도움말(Apple·Google·Microsoft·Samsung)에서 확인한 내용만 쓰고, `sources`에는 실제로 읽은 URL만 넣습니다.
- 애드센스 코드 `ca-pub-1265732107215441`, `dist/ads.txt`, `dist/CNAME`, `dist/.nojekyll`, 사진 도구(`dist/tools/photo`)는 그대로 둡니다.
- 유료 API는 쓰지 않습니다.
