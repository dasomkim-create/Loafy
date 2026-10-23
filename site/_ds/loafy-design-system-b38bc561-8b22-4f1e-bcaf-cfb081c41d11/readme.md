# Loafy Design System
출석하면 고양이가 날렵해지고, 빠지면 식빵이 되는 운동 출석 습관 앱 (다마고치 스타일). 모바일 우선, 한국어 UI, 480px 컬럼.

**Sources:** local codebase `loafy-design-system/` (README, colors_and_type.css, loafy-sprites.js, loafy-tama.js, Loafy Assets reference); GitHub repo https://github.com/dasomkim-create/Loafy — explore it for more screens and context. Full prototype later supplied and imported as the UI kit.

## CONTENT FUNDAMENTALS
- 짧은 해요체, Korean only. "출석하면 날렵해지고, 빠지면 식빵이 돼요".
- 버튼은 동작 그대로: "출석하기", "저장", "구매". 느낌표·이모지 사용 안 함.
- 가격은 항상 쿠키(발자국 쿠키) 단위.

## VISUAL FOUNDATIONS
- Toss/iOS-like neutral UI: white background, ink `#191F28` text, blue `#3182F6` accent. Only the cat and 빵틀 carry color.
- Type: Pretendard Variable, letter-spacing -0.01em. 28/700 titles, 16/600 buttons, 13/500 captions, 11 tab labels.
- Primary CTA black `#000`, height 52, radius 16; secondary `#F2F4F6`. Press = scale(.98).
- Cards/inputs radius 12–16, 1px ring `inset 0 0 0 1px #E5E8EB` or filled `#F2F4F6`. Shadow only on sheets/toasts/modals (`0 8px 32px rgba(0,0,0,.12)`).
- List rows ≥52 high, hairline divider, right ›. Sheets radius 28 top.
- Motion: easing `cubic-bezier(.32,.72,0,1)`; lfIn 340ms, lfSheet 420ms, banner slides from top. No gradients, no textures, no transparency/blur.
- Imagery: 32×32 pixel-art cats, three.js 3D 빵틀. Layout: max 480px centered column, tab bar 홈·기록·샵·마이, hit ≥44.

## ICONOGRAPHY
12×12 pixel icons drawn in `assets/loafy-sprites.js` (`<loafy-icon name size active color>`): home, record, my, paw, share, brush, letter, shop, cookie, dumbbell, flame, timer, plane, speaker, bell. Outline when inactive, filled when active. No emoji, no icon font. Cats via `<loafy-sprite type coat expr pose scale>` (body: slim, normal, fit, bulk, jjin, loaf; 7 coats; 7 expressions). Logo: `assets/Loafy.svg` and `<loafy-logo>`. 3D 빵틀 in `assets/loafy-tama.js`. Full archive: `reference/Loafy Assets.dc.html`.

## INDEX
- `styles.css` → `tokens/` (colors, typography + Pretendard font, shape & motion)
- `fonts/`, `assets/` (logo, sprites, tama), `reference/`
- `guidelines/` specimen cards
- Components (`components/core/`): Button, Input, Badge, ListRow, TabBar, Toast
- Intentional additions: all six components — source defines no component library, so a standard set was built from its rules.
- `ui_kits/loafy-app/` — full clickable prototype (25 screens), widgets board, asset archive; see its README.
- No slides.

## Extra notes from the prototype
- Login uses brand-colored social buttons (Apple black, 카카오 #FEE500, 네이버 #03C75A, Google white with ring) at 52h/r16; 게스트로 둘러보기 as underlined text link.
- Onboarding: 4px progress bar `#1E2228`, step count, 26/700 titles, agree-all row 64h r18 on `#F4F5F7`.
- Home/background for tab screens uses `#F2F2F7`; check-in circle `#F6F0E1`; widgets 158×158 (S) / 338×158 (M), r24.
- Prices: 광고 제거권 ₩9,900 (test payment); ad slot 320×50.
