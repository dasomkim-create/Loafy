# Loafy — MVP 디자인 프로토타입

출석하면 고양이가 날렵해지고, 빠지면 식빵이 되는 출석 앱의 클릭 가능한 디자인 프로토타입.

## 파일
- `Loafy App.dc.html` — 앱 전체 프로토타입 (로그인 → 온보딩 6단계 → 홈 → 출석/공유/사연, 기록, 마이, 꾸미기). 브라우저로 바로 열기.
- `Loafy Screens.dc.html` — 개발 전달용 보드. 같은 앱을 화면별(01–11)로 띄움 + 캐릭터/아이콘 시트.
- `loafy-sprites.js` — 32×32 픽셀 고양이 생성기(체형 5 · 털색 5 · 표정 7 · 포즈 4), 12×12 픽셀 아이콘, LCD 시뮬레이터.
- `loafy-tama.js` — three.js 3D 다마고치 (드래그 회전, 버튼, 화면 탭 → 크게 보기, 말풍선).
- `support.js` — 디자인 컴포넌트 런타임.
- `fonts/PretendardVariable.woff2` — Pretendard.

## 실행
로컬 서버로 열기 (ES module / fetch 때문에 file:// 불가):
```
npx serve .
```
→ `http://localhost:3000/Loafy%20App.dc.html`

three.js는 unpkg CDN(0.160.0)에서 로드.
