// 입문 안내 페이지: 흩어진 글을 처음 보는 사람이 읽을 순서로 묶는다. build.mjs가 /start/<slug>/ 로 만든다.
export const startGuides = [
  {
    slug: 'phone', title: '휴대폰 처음 쓰시는 분께', short: '휴대폰 처음 쓰기',
    desc: '스마트폰이 아직 낯선 분이 먼저 바꿔 두면 편한 설정부터, 전화·알림, 안전, 문제가 생겼을 때 볼 글까지 순서대로 묶었습니다.',
    intro: '휴대폰을 새로 장만했거나 아직 손에 익지 않았다면 글자를 키우는 일부터 하세요. 화면이 잘 보여야 다음 설정도 따라 할 수 있습니다. 아이폰과 갤럭시 글이 섞여 있으니 쓰는 휴대폰에 맞는 글만 골라 읽으면 됩니다.',
    steps: [
      ['먼저 화면을 보기 편하게', '글씨 크기와 화면이 꺼지는 시간만 맞춰도 휴대폰 쓰기가 훨씬 덜 답답해집니다.', ['iphone-text-size', 'android-text-size', 'iphone-autolock-time', 'iphone-dictation-voice-typing']],
      ['전화와 알림을 놓치지 않게', '벨이 안 울리거나 알림이 조용해졌을 때 고장부터 의심하기 전에 확인할 곳입니다.', ['galaxy-ringtone-not-ringing', 'iphone-focus-notifications', 'android-notifications']],
      ['안전하게 쓰기', '모르는 번호, 가짜 바이러스 경고, 낯선 QR 코드처럼 조심해야 할 상황과 위급할 때 대비해 둘 설정입니다.', ['iphone-block-unknown-calls-texts', 'android-chrome-site-alerts', 'iphone-qr-code', 'iphone-medical-id-emergency-contacts']],
      ['문제가 생겼을 때', '휴대폰을 잃어버렸거나, 저장 공간·배터리가 금방 바닥나거나, 휴대폰이 갑자기 화면을 소리 내 읽을 때 차례로 볼 글입니다.', ['android-find-lost-phone', 'iphone-storage-full', 'galaxy-storage-full', 'iphone-battery-drains-fast', 'android-talkback-turn-off']]
    ]
  },
  {
    slug: 'photos', title: '사진 찍고 정리해서 보내기', short: '사진 정리·보내기',
    desc: '사진을 고치고, 보내기 전에 용량과 형식을 맞추고, 컴퓨터로 옮기고, 실수로 지운 사진을 되살리는 순서를 묶었습니다.',
    intro: '사진은 찍는 것보다 보내고 정리할 때 더 자주 막힙니다. 보내려는데 용량이 크다고 나오거나, 상대방이 사진을 못 연다고 할 때가 대표적입니다. 아래 순서대로 보면 사진을 찍은 뒤 보내기까지 필요한 일을 한 번에 훑을 수 있습니다.',
    steps: [
      ['찍은 사진 손보기', '잘못 자른 사진 되돌리기, 화면 캡처, 사진 속 글자 복사처럼 사진을 다루는 기본입니다.', ['iphone-photo-crop-rotate-revert', 'android-screenshot', 'iphone-live-text-copy']],
      ['보내기 전에 확인하기', '용량, 파일 형식, 사진에 담긴 위치 정보를 보내기 전에 확인합니다.', ['photo-size', 'iphone-heic-to-jpg', 'iphone-photo-remove-location', 'file-formats']],
      ['컴퓨터로 옮기기', '휴대폰 사진을 PC로 옮길 때 보는 글입니다.', ['quick-share-windows', 'iphone-photos-to-windows-pc']],
      ['실수로 지웠을 때', '지운 사진은 바로 사라지지 않습니다. 휴대폰 종류에 맞는 글을 보세요.', ['iphone-recover-deleted-photos', 'galaxy-recover-deleted-photos']]
    ]
  },
  {
    slug: 'pc', title: '컴퓨터 기초, 이것부터', short: 'PC 기초',
    desc: '윈도우 화면을 보기 편하게 맞추고, 캡처·복사·파일 찾기 같은 자주 쓰는 기능, 크롬 사용법, 컴퓨터가 이상할 때 점검할 곳을 순서대로 묶었습니다.',
    intro: '컴퓨터는 메뉴가 많아서 어디서부터 봐야 할지 막막합니다. 글씨와 마우스 화살표를 먼저 보기 편하게 맞추고, 자주 쓰는 기능을 익힌 뒤, 문제가 생겼을 때 볼 글로 넘어가세요. 윈도우 글은 Windows 11 기준입니다.',
    steps: [
      ['화면을 보기 편하게', '글씨와 마우스 화살표가 잘 보여야 나머지 설정도 따라 하기 쉽습니다.', ['windows-text-size', 'windows-mouse-pointer-size', 'windows-screen-sleep-timeout']],
      ['자주 쓰는 기능 익히기', '화면 캡처, 복사 기록, 내려받은 파일 찾기, 파일 이름 끝(확장자) 보기, 압축 풀기입니다.', ['windows-screenshot', 'windows-clipboard-history', 'find-downloads', 'show-file-extensions', 'zip-unzip']],
      ['인터넷 창(크롬) 다루기', '화면이 갑자기 커졌거나, 탭을 실수로 닫았거나, 페이지가 이상하게 보일 때입니다.', ['chrome-zoom', 'chrome-reopen-closed-tab', 'chrome-cache', 'chrome-search-engine-changed']],
      ['컴퓨터가 이상할 때', '켤 때 느리거나, 저장 공간이 부족하거나, 소리·와이파이가 안 될 때 차례로 확인합니다.', ['windows-startup-apps', 'windows-free-up-drive-space', 'windows-no-sound-fix', 'windows-wifi-not-connecting', 'windows-screen-rotated-sideways']]
    ]
  },
  {
    slug: 'documents', title: '서류를 스캔해서 제출하기', short: '서류 스캔·제출',
    desc: '종이 서류를 휴대폰으로 스캔하고, 서명하고, 형식과 용량을 맞춰 제출하거나 인쇄하는 순서를 묶었습니다.',
    intro: '관공서나 회사에 서류를 내라고 할 때 스캐너가 없어도 휴대폰으로 충분합니다. 종이를 파일로 만들고, 필요하면 서명하고, 제출처가 요구하는 형식과 용량에 맞추는 순서로 보세요. 인쇄가 막힐 때 볼 글도 함께 두었습니다.',
    steps: [
      ['종이를 파일로 만들기', '휴대폰 종류에 맞는 스캔 방법을 고르세요.', ['iphone-scan', 'android-drive-scan-pdf']],
      ['서명하고 PDF로 저장하기', '받은 서류에 서명하거나, 웹페이지 내용을 PDF로 남길 때입니다.', ['iphone-sign-pdf', 'webpage-to-pdf']],
      ['형식과 용량 맞추기', '제출처가 PDF나 JPG만 받거나 용량을 제한할 때 확인합니다.', ['file-formats', 'photo-size', 'zip-unzip']],
      ['종이로 뽑아야 할 때', '프린터가 오프라인이거나 인쇄가 멈췄을 때 볼 글입니다.', ['printer-offline', 'windows-printer-stuck-queue']]
    ]
  }
];
