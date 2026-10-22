(function () {
  const COATS = {
    cheese:   { base: '#F49A3C', light: '#FFBE73', shade: '#D8742A', stripe: '#C45F1C', belly: '#FFE8C8', bellyShade: '#F2C995', line: '#5E2E14', ear: '#F6A2A6' },
    mackerel: { base: '#9AA2AC', light: '#C3C9D0', shade: '#7A838E', stripe: '#565F6B', belly: '#F0F2F4', bellyShade: '#D1D6DB', line: '#2A2E36', ear: '#F2A7B0' },
    tuxedo:   { base: '#3C3D47', light: '#5A5C6A', shade: '#2A2B33', stripe: '#3C3D47', belly: '#FAFAF6', bellyShade: '#D9D9D2', line: '#141419', ear: '#E99AA4' },
    cow:      { base: '#FAFAF7', light: '#FFFFFF', shade: '#DCDCD6', stripe: '#FAFAF7', belly: '#FFFFFF', bellyShade: '#E4E4DE', line: '#1E1E24', ear: '#F2A2AC', patch: '#2A2A31', patchShade: '#18181C', patchLight: '#40404A' },
    blue:     { base: '#8F9BAE', light: '#AEB8C8', shade: '#727E92', stripe: '#8F9BAE', belly: '#A9B3C3', bellyShade: '#8C97AA', line: '#2A303C', ear: '#E6A3AE' },
    choco:    { base: '#8A5A3C', light: '#A6744F', shade: '#6C442C', stripe: '#5A3622', belly: '#F3E6D8', bellyShade: '#DCC6AE', line: '#2E1B10', ear: '#E9A0A4' },
    cream:    { base: '#EFD8B0', light: '#FAEBD0', shade: '#D8BA8A', stripe: '#CFA972', belly: '#FFF8EC', bellyShade: '#EEDDC2', line: '#6A4A2A', ear: '#F4A9AE' }
  };
  const COAT_NAMES = { cheese: '치즈', mackerel: '고등어', tuxedo: '턱시도', cow: '얼룩이', cream: '크림', blue: '러시안블루', choco: '초코' };
  const TYPES = {
    slim:   { head: { x: 16, y: 10.6, rx: 7.2, ry: 6.3 }, chest: { x: 16, y: 20, rx: 4.7, ry: 6.4 }, haunch: { x: 16, y: 26, rx: 6.8, ry: 4.8 }, fp: { dx: 1.9, rx: 1.8, ry: 1.4 }, bp: { dx: 5.6, rx: 2, ry: 1.3 }, legs: 3.6 },
    bulk:   { head: { x: 16, y: 10.2, rx: 7.6, ry: 6.4 }, chest: { x: 16, y: 19.6, rx: 9.8, ry: 6.2 }, haunch: { x: 16, y: 25.4, rx: 9.2, ry: 5.4 }, arms: { dx: 8.4, y: 23.4, rx: 3.7, ry: 6.8 }, fp: { dx: 8.2, rx: 3, ry: 1.6 }, legs: 0 },
    normal: { head: { x: 16, y: 10.6, rx: 8.4, ry: 6.9 }, chest: { x: 16, y: 19.8, rx: 6, ry: 6.2 }, haunch: { x: 16, y: 25.3, rx: 8.8, ry: 5.5 }, fp: { dx: 2.4, rx: 2.2, ry: 1.5 }, bp: { dx: 7.4, rx: 2.3, ry: 1.4 }, legs: 4.4 },
    fit:    { head: { x: 16, y: 10.4, rx: 7.5, ry: 6.3 }, chest: { x: 16, y: 19.8, rx: 7.4, ry: 6.3 }, haunch: { x: 16, y: 25.6, rx: 8.2, ry: 5.1 }, fp: { dx: 2.3, rx: 2.1, ry: 1.5 }, bp: { dx: 6.8, rx: 2.2, ry: 1.3 }, legs: 4 },
    jjin:   { head: { x: 16, y: 11.2, rx: 8.8, ry: 7 }, chest: { x: 16, y: 20.4, rx: 8.8, ry: 7 }, haunch: { x: 16, y: 25, rx: 11.4, ry: 5.9 }, fp: { dx: 3, rx: 2.4, ry: 1.5 }, bp: { dx: 9.2, rx: 2.4, ry: 1.4 }, legs: 5 },
    loaf:   { head: { x: 16, y: 12.4, rx: 9, ry: 7 }, chest: null, haunch: { x: 16, y: 22.6, rx: 13.6, ry: 8.3 }, fp: { dx: 3.4, rx: 2.4, ry: 1.3 }, bp: { dx: 10.2, rx: 2.3, ry: 1.2 }, legs: 0 }
  };
  const BODY_NAMES = { slim: '날렵', bulk: '벌크', normal: '보통', fit: '탄탄', jjin: '찐빵', loaf: '식빵' };
  const W = 32, H = 32;
  const inE = (px, py, e) => ((px - e.x) / e.rx) ** 2 + ((py - e.y) / e.ry) ** 2 <= 1;
  const inSE = (px, py, e, p) => Math.abs((px - e.x) / e.rx) ** p + Math.abs((py - e.y) / e.ry) ** p <= 1;
  const sgn = (p1, p2, p3) => (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1]);
  const inT = (p, a, b, c) => { const d1 = sgn(p, a, b), d2 = sgn(p, b, c), d3 = sgn(p, c, a); return !((d1 < 0 || d2 < 0 || d3 < 0) && (d1 > 0 || d2 > 0 || d3 > 0)); };
  const shrink = (t, k) => { const cx = (t[0][0] + t[1][0] + t[2][0]) / 3, cy = (t[0][1] + t[1][1] + t[2][1]) / 3; return t.map(p => [cx + (p[0] - cx) * k, cy + (p[1] - cy) * k + 0.5]); };
  const cache = {};

  function make(type, coat, expr, pose) {
    expr = expr || 'idle'; pose = pose || 'sit';
    const key = [type, coat, expr, pose].join('|');
    if (cache[key]) return cache[key];
    const T = TYPES[type] || TYPES.normal, C = COATS[coat] || COATS.cheese;
    const h = T.head, ch = T.chest, hn = T.haunch;
    const ears = [-1, 1].map(s => [[h.x + s * (h.rx - 0.6), h.y - h.ry * 0.35], [h.x + s * (h.rx - 5.2), h.y - h.ry + 0.4], [h.x + s * (h.rx - 1.6), h.y - h.ry - 2.6]]);
    const earsIn = ears.map(t => shrink(t, 0.48));
    const tail = { x: 16 + hn.rx - 0.4 + (T.arms ? 2 : 0), y: 29.3, rx: 3.6, ry: 1.4 };
    const legTop = ch ? ch.y + 2.5 : 99;
    const region = new Array(W * H).fill(null);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const px = x + 0.5, py = y + 0.5; let r = null;
      if (inE(px, py, tail)) r = 'tail';
      if (inE(px, py, hn) || (ch && inE(px, py, ch))) r = 'body';
      if (r === 'body' && T.legs && Math.abs(px - 16) < T.legs && py > legTop) r = 'leg';
      if (T.arms && [-1, 1].some(s => inE(px, py, { ...T.arms, x: 16 + s * T.arms.dx }))) r = 'arm';
      if (ears.some(t => inT([px, py], ...t))) r = earsIn.some(t => inT([px, py], ...t)) ? 'earIn' : 'ear';
      if (inSE(px, py, h, 2.3)) r = 'head';
      if (T.bp && [-1, 1].some(s => inE(px, py, { x: 16 + s * T.bp.dx, y: 30.3, rx: T.bp.rx, ry: T.bp.ry }))) r = 'paw';
      if ([-1, 1].some(s => inE(px, py, { x: 16 + s * T.fp.dx, y: 30.1, rx: T.fp.rx, ry: T.fp.ry }))) r = 'paw';
      if (py > 31) r = null;
      region[y * W + x] = r;
    }
    const R = (x, y) => (x < 0 || y < 0 || x >= W || y >= H) ? null : region[y * W + x];
    const M = (x, y) => !!R(x, y);
    const belly = ch ? { x: 16, y: ch.y + 0.6, rx: ch.rx * 0.62, ry: ch.ry * 0.95 } : { x: 16, y: hn.y - 1.5, rx: hn.rx * 0.48, ry: 6 };
    const ey = Math.round(h.y + 0.6), ex = Math.round(16 - h.rx * 0.52) - 1, ny = ey + 2;
    const muzzle = { x: 16, y: ey + 2.7, rx: 3.6, ry: 2.3 };
    const patches = C.patch ? [
      { x: h.x - h.rx * 0.5, y: h.y - h.ry * 0.55, rx: h.rx * 0.55, ry: h.ry * 0.62 },
      { x: 16 + hn.rx * 0.55, y: hn.y - 0.5, rx: hn.rx * 0.42, ry: hn.ry * 0.8 },
      { x: 16 - (ch ? ch.rx : hn.rx * 0.6) * 0.85, y: (ch ? ch.y : hn.y - 4) - 1, rx: 2.4, ry: 2.2 }
    ] : [];
    const px = new Array(W * H).fill(null);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const r = R(x, y), cx = x + 0.5, cy = y + 0.5;
      if (!r) { if (M(x + 1, y) || M(x - 1, y) || M(x, y + 1) || M(x, y - 1)) px[y * W + x] = C.line; continue; }
      let kind = 'base';
      if (r === 'earIn') kind = 'ear';
      else if (r === 'paw') kind = 'belly';
      else if (r === 'head') {
        const top = h.y - h.ry;
        if (inE(cx, cy, muzzle)) kind = 'belly';
        else if ((x === 13 || x === 15 || x === 16 || x === 18) && cy < top + 3.8 && ((x === 15 || x === 16) ? cy < top + 3.2 : cy > top + 1)) kind = 'stripe';
        else if (Math.abs(cx - 16) > h.rx - 2.2 && (y === ey || y === ey + 2)) kind = 'stripe';
      } else if (r === 'body') {
        if (inE(cx, cy, belly)) kind = 'belly';
        else if (y % 3 === 1 && Math.abs(cx - 16) > Math.max(belly.rx, T.legs) + 0.8) kind = 'stripe';
      } else if (r === 'leg') {
        if (cy < legTop + 2 && inE(cx, cy, belly)) kind = 'belly';
        else if (x === 15 || x === 16 || Math.abs(cx - 16) > T.legs - 1) kind = 'legline';
        else if (y % 3 === 2) kind = 'stripe';
      } else if (r === 'arm') {
        if (y % 3 === 0) kind = 'stripe';
        const s = x < 16 ? 1 : -1;
        if (R(x + s, y) === 'body') kind = 'stripe';
      } else if (r === 'tail') { if (x % 2 === 0) kind = 'stripe'; }
      const patched = patches.length && (kind === 'base' || kind === 'stripe' || kind === 'legline') && (r === 'tail' || patches.some(p => inE(cx, cy, p)));
      const shade = !M(x + 2, y + 1) || !M(x + 1, y + 2);
      const light = !shade && (!M(x - 2, y - 1) || !M(x - 1, y - 2));
      const chin = (r === 'body' || r === 'arm' || r === 'leg') && R(x, y - 1) === 'head';
      const pawTop = r === 'paw' && R(x, y - 1) !== 'paw';
      let c;
      if (patched) c = (shade || chin || kind === 'legline') ? C.patchShade : light ? C.patchLight : C.patch;
      else if (kind === 'base') c = (shade || chin) ? C.shade : light ? C.light : C.base;
      else if (kind === 'legline') c = C.shade;
      else if (kind === 'belly') c = (shade || chin || pawTop) ? C.bellyShade : C.belly;
      else if (kind === 'stripe') c = chin ? C.shade : C.stripe;
      else c = C[kind];
      px[y * W + x] = c;
    }
    const set = (x, y, c) => { if (x >= 0 && y >= 0 && x < W && y < H) px[y * W + x] = c; };
    const D = '#20140E', WH = '#FFFFFF', BL = '#FF8E9A', AM = '#7A5A48';
    const EYES = {
      idle:     [[0, -1, WH], [1, -1, D], [2, -1, D], [0, 0, D], [1, 0, D], [2, 0, D], [0, 1, D], [1, 1, AM], [2, 1, D], [1, -2, D]],
      blink:    [[0, 0, D], [1, 0, D], [2, 0, D]],
      happy:    [[0, 0, D], [1, -1, D], [2, 0, D]],
      eat:      [[0, 0, D], [1, -1, D], [2, 0, D]],
      sleep:    [[0, -1, D], [1, 0, D], [2, -1, D]],
      surprise: [[1, -2, D], [0, -1, D], [2, -1, D], [0, 0, D], [2, 0, D], [1, 1, D], [1, -1, WH], [1, 0, WH]],
      up:       [[0, -2, WH], [1, -2, D], [2, -2, D], [0, -1, D], [1, -1, D], [2, -1, D], [1, 0, AM]]
    };
    const rex = 31 - ex - 2;
    (EYES[expr] || EYES.idle).forEach(([dx, dy, c]) => { set(ex + dx, ey + dy, c); set(rex + dx, ey + dy, c); });
    [[ex - 1, ny], [ex, ny]].forEach(([x, y]) => { set(x, y, BL); set(31 - x, y, BL); });
    set(15, ny, '#E2707C'); set(16, ny, '#E2707C');
    const L = C.line;
    if (expr === 'eat') { set(15, ny + 1, L); set(16, ny + 1, L); set(14, ny + 2, L); set(17, ny + 2, L); set(15, ny + 2, '#C2434E'); set(16, ny + 2, '#C2434E'); set(15, ny + 3, L); set(16, ny + 3, L); }
    else if (expr === 'surprise') { set(15, ny + 1, L); set(16, ny + 1, L); set(14, ny + 2, L); set(17, ny + 2, L); set(15, ny + 3, L); set(16, ny + 3, L); set(15, ny + 2, '#C2434E'); set(16, ny + 2, '#C2434E'); }
    else if (expr === 'sleep') { set(15, ny + 1, L); set(16, ny + 1, L); }
    else { set(15, ny + 1, L); set(16, ny + 1, L); set(14, ny + 2, L); set(17, ny + 2, L); set(13, ny + 1, L); set(18, ny + 1, L); }

    const bmp = (rows, ox, oy, map) => rows.forEach((row, yy) => [...row].forEach((k, xx) => { if (map[k]) set(ox + xx, oy + yy, map[k]); }));
    if (pose === 'letter') {
      const ox = 11, oy = (ch ? Math.round(ch.y) + 1 : 20);
      bmp(['##########', '#oWWWWWWo#', '#WoWWWWoW#', '#WWorrWWW#'.replace('WWorrWWW', 'WWorroWW'), '#WWWWWWWW#', '##########'], ox, oy, { '#': L, 'W': '#FFFFFF', 'o': '#B9BCC4', 'r': '#E5484D' });
      bmp(['LL', 'BB'], ox - 1, oy + 2, { L: L, B: C.belly }); bmp(['LL', 'BB'], ox + 9, oy + 2, { L: L, B: C.belly });
    } else if (pose === 'stamp') {
      bmp(['.r.r.', 'r...r', '.rrr.', 'rrrrr', '.rrr.'], 26, 26, { r: '#E5484D' });
    } else if (pose === 'sleep') {
      bmp(['###', '.#.', '###'].map(s => s.replace('.#.', '..#').replace('..#', '.#.')), 25, 3, { '#': '#5B6472' });
      bmp(['##', '##'], 29, 0, { '#': '#8E929B' });
    }
    return (cache[key] = { w: W, h: H, px });
  }

  function draw(ctx, spr, ox, oy, s, map) {
    for (let y = 0; y < spr.h; y++) for (let x = 0; x < spr.w; x++) {
      let c = spr.px[y * spr.w + x]; if (!c) continue;
      if (map) { c = map(c); if (!c) continue; }
      ctx.fillStyle = c; ctx.fillRect((ox + x) * s, (oy + y) * s, s, s);
    }
  }

  // ---------- pixel icons (12x12): '#' body, 'o' detail ----------
  const ICONS = {
    home: ['.....##.....', '....####....', '...######...', '..########..', '.##########.', '############', '.##########.', '.####oo####.', '.####oo####.', '.####oo####.', '.####oo####.', '............'],
    record: ['...#....#...', '.##########.', '.##########.', '.#oooooooo#.', '.##########.', '.###o##o###.', '.##########.', '.###o##o###.', '.##########.', '.##########.', '............', '............'],
    my: ['.#........#.', '.##......##.', '.###....###.', '.##########.', '############', '###o####o###', '############', '#####oo#####', '############', '.##########.', '..########..', '............'],
    paw: ['.....##.....', '.##.####.##.', '####.##.####', '.##......##.', '............', '....####....', '..########..', '.##########.', '.##########.', '.##########.', '..###..###..', '............'],
    share: ['.....##.....', '....####....', '...######...', '.....##.....', '.....##.....', '.....##.....', '.....##.....', '............', '.##......##.', '.##########.', '.##########.', '............'],
    brush: ['.....##.....', '.....##.....', '....####....', '....####....', '..########..', '############', '############', '..########..', '....####....', '....####....', '.....##.....', '.....##.....'],
    letter: ['............', '############', '#o########o#', '##o######o##', '###o####o###', '####oooo####', '############', '############', '############', '############', '............', '............'],
    shop: ['............', '....####....', '...##..##...', '...#....#...', '.##########.', '.##########.', '.##o####o##.', '.##########.', '.##########.', '.##########.', '.##########.', '............'],
    cookie: ['...######...', '..########..', '.##o#oo#o##.', '.##########.', '##o######o##', '####oooo####', '###oooooo###', '###oooooo###', '.###oooo###.', '.##########.', '..########..', '...######...'],
    dumbbell: ['............', '............', '.##......##.', '.##......##.', '####....####', '############', '############', '####....####', '.##......##.', '.##......##.', '............', '............'],
    ex_run: ['.....###....', '....#####...', '....#####...', '.....###....', '..#########.', '.###.###....', '###..####...', '##....####..', '.......###..', '......###.##', '.....###..##', '............'],
    ex_chest: ['............', '.####..####.', '######.#####', '############', '############', '.##########.', '..########..', '...######...', '............', '............', '............', '............'],
    ex_back: ['############', '#####oo#####', '.####oo####.', '.####oo####.', '..###oo###..', '..###oo###..', '...##oo##...', '...######...', '....####....', '....####....', '.....##.....', '............'],
    ex_leg: ['.####..####.', '.####..####.', '.####..####.', '.####..####.', '..###..###..', '..###..###..', '..###..###..', '..###..###..', '..###..###..', '.####..####.', '.####..####.', '............'],
    ex_shoulder: ['....####....', '..########..', '.##########.', '############', '###.####.###', '###.####.###', '###.####.###', '###.####.###', '###......###', '............', '............', '............'],
    ex_arm: ['.......###..', '......#####.', '.....#######', '....########', '...#########', '..#######o#.', '.#######o##.', '########....', '.######.....', '..####......', '...##.......', '............'],
    ex_core: ['..########..', '..###oo###..', '..###oo###..', '..########..', '..###oo###..', '..###oo###..', '..########..', '..###oo###..', '..###oo###..', '...######...', '....####....', '............'],
    flame: ['.....#......', '....##......', '....###.....', '...####..#..', '..#####.##..', '..##########', '.####oo#####', '.###oooo####', '.###oooo####', '..##oooo###.', '...######...', '............'],
    timer: ['....####....', '.....##.....', '...######...', '..###oo###..', '.####oo####.', '.####oo####.', '.####oooo##.', '.##########.', '..########..', '...######...', '............', '............'],
    plane: ['..........##', '........####', '......######', '....########', '..#####o####', '.#####oo###.', '..###ooo##..', '...##oo.#...', '....#o......', '.....#......', '............', '............'],
    speaker: ['............', '.....#......', '....##..#...', '.#####...#..', '.#####.#..#.', '.#####.#..#.', '.#####.#..#.', '.#####...#..', '....##..#...', '.....#......', '............', '............'],
    speaker_off: ['............', '.....#......', '....##......', '.#####..#.#.', '.#####...#..', '.#####..#.#.', '.#####......', '.#####......', '....##......', '.....#......', '............', '............'],
    bell: ['.....##.....', '....####....', '...######...', '..########..', '..########..', '..########..', '.##########.', '############', '............', '....####....', '.....##.....', '............']
  };
  ICONS.pawpink = ICONS.paw; ICONS.letterblue = ICONS.letter;
  const ICON_INK = { cookie: '#C9566D', pawpink: '#D24E66', letterblue: '#1B64DA' };
  const ICON_FILL = { speaker: '#9DB6E6', speaker_off: '#C9CED8', plane: '#9DB6E6', dumbbell: '#C9CED8', ex_run: '#FF9F55', ex_chest: '#FFC9A3', ex_back: '#B9D4FF', ex_leg: '#BFE6C9', ex_shoulder: '#D9CCF5', ex_arm: '#FFE08A', ex_core: '#FFB8C4', flame: '#FF9F55', timer: '#9DC3FF', pawpink: '#FF8FA0', letterblue: '#FFFFFF', home: '#B4BCC8', record: '#8FC7B4', my: '#F6A2A6', paw: '#F49A3C', share: '#9DB6E6', brush: '#F2C14E', letter: '#FFF6E6', bell: '#F2C14E', shop: '#C9B6F0', cookie: '#FFC2CD' };
  function drawIcon(ctx, name, s, active, lineColor) {
    const rows = ICONS[name]; if (!rows) return;
    const at = (x, y) => (y < 0 || y >= 12 || x < 0 || x >= 12) ? '.' : rows[y][x];
    const ink = ICON_INK[name] || '#2F343D';
    for (let y = 0; y < 12; y++) for (let x = 0; x < 12; x++) {
      const k = at(x, y); if (k === '.') continue;
      const edge = [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => at(x + dx, y + dy) === '.');
      let c = null;
      if (active) c = edge ? ink : k === 'o' ? ink : ICON_FILL[name];
      else if (edge || k === 'o') c = lineColor;
      if (c) { ctx.fillStyle = c; ctx.fillRect(x * s, y * s, s, s); }
    }
  }

  // ---------- LCD sim (shared by 3D device + fullscreen) ----------
  const N = 48, CELL = 8;
  const FONT = {
    '0': ['###', '#.#', '#.#', '#.#', '###'], '1': ['.#.', '##.', '.#.', '.#.', '###'], '2': ['###', '..#', '###', '#..', '###'],
    '3': ['###', '..#', '.##', '..#', '###'], '4': ['#.#', '#.#', '###', '..#', '..#'], '5': ['###', '#..', '###', '..#', '###'],
    '6': ['###', '#..', '###', '#.#', '###'], '7': ['###', '..#', '.#.', '.#.', '.#.'], '8': ['###', '#.#', '###', '#.#', '###'],
    '9': ['###', '#.#', '###', '..#', '###'], 'D': ['##.', '#.#', '#.#', '#.#', '##.'], '+': ['...', '.#.', '###', '.#.', '...']
  };
  const LICONS = { feed: ['.....', '#.##.', '#####', '#.##.', '.....'], pet: ['.#.#.', '#####', '#####', '.###.', '..#..'], stat: ['....#', '..#.#', '..#.#', '#.#.#', '#.#.#'] };
  const HEART3 = ['#.#', '###', '.#.'];
  const BOWL = ['.#.#..', '######', '#....#', '.####.'], BOWL_E = ['......', '######', '#....#', '.####.'];
  const BODIES = ['slim', 'bulk', 'normal', 'jjin', 'loaf'];

  class Sim {
    constructor() { this.menu = 0; this.mode = 'home'; this.anim = null; this.animT = 0; this.mood = 3; }
    play(a) { this.anim = a; this.animT = performance.now(); this.mode = 'home'; if (a === 'pet') this.mood = Math.min(4, this.mood + 1); }
    button(i) {
      if (i === 0) { if (this.mode === 'home' && !this.anim) this.menu = (this.menu + 1) % 3; return null; }
      if (i === 1) {
        if (this.mode === 'status') { this.mode = 'home'; return null; }
        if (this.anim) return null;
        if (this.menu === 0) { this.play('eat'); return 'feed'; }
        if (this.menu === 1) { this.play('pet'); return 'pet'; }
        this.mode = 'status'; return null;
      }
      this.mode = 'home'; this.anim = null; return 'back';
    }
    draw(ctx, now, o) {
      const mono = o.lcd === 'mono';
      const buf = new Array(N * N).fill(null);
      const put = (x, y, c) => { x |= 0; y |= 0; if (x >= 0 && y >= 0 && x < N && y < N) buf[y * N + x] = c; };
      const lumF = (h) => { const n = parseInt(h.slice(1), 16); return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255; };
      const adj = (h, d) => { const n = parseInt(h.slice(1), 16), c = (v) => Math.max(0, Math.min(255, Math.round(v + d * 255))); return '#' + [n >> 16, (n >> 8) & 255, n & 255].map(v => c(v).toString(16).padStart(2, '0')).join(''); };
      const sceneK = mono ? 'none' : (o.scene || 'none'), lcdbg = !mono && o.lcdbg ? o.lcdbg : '';
      const dark = !mono && (sceneK === 'night' || (lcdbg && lumF(lcdbg) < 0.35));
      const ink = mono ? '#2E3A26' : dark ? '#F3EBDD' : '#3A2A22', red = mono ? ink : '#E5566A', off = mono ? '#8FA07C' : dark ? '#5A6285' : '#D8CBB4';
      const bgb = new Array(N * N).fill(null);
      const bput = (x, y, c) => { x |= 0; y |= 0; if (x >= 0 && y >= 0 && x < N && y < N) bgb[y * N + x] = c; };
      const bbmp = (rows, ox, oy, c) => rows.forEach((row, y) => [...row].forEach((chr, x) => { if (chr === '#') bput(ox + x, oy + y, c); }));
      const bmp = (rows, ox, oy, c, sc) => { sc = sc || 1; rows.forEach((row, y) => [...row].forEach((chr, x) => { if (chr === '#') for (let a = 0; a < sc; a++) for (let b = 0; b < sc; b++) put(ox + x * sc + a, oy + y * sc + b, c); })); };
      const text = (str, ox, oy, c, sc) => { sc = sc || 1; [...str].forEach((chr, k) => FONT[chr] && bmp(FONT[chr], ox + k * 4 * sc, oy, c, sc)); };
      const t = now / 1000, streak = String(o.streak || 12), body = o.body || 'normal', coat = o.coat || 'cheese';
      if (this.anim && now - this.animT > (this.anim === 'eat' ? 2600 : 1800)) this.anim = null;
      if (sceneK !== 'none') {
        const band = (y0, y1, c) => { for (let y = y0; y < y1; y++) for (let x = 0; x < N; x++) bput(x, y, c); };
        const CL = ['...####....', '..######...', '.########..', '###########', '.#########.'];
        const cloud = (x, y, c) => { bbmp(CL, x, y, c); };
        if (sceneK === 'cloud') {
          band(0, 16, '#A9D6FF'); band(16, 32, '#BDE2FF'); band(32, N, '#D3EEFF');
          cloud(((t * 1.6) % 62) - 13, 9, '#FFFFFF'); cloud(((t * 1.0 + 30) % 62) - 13, 22, '#F4FAFF'); cloud(((t * 0.7 + 12) % 62) - 13, 34, '#FFFFFF');
        } else if (sceneK === 'meadow') {
          band(0, N, '#CDEBFF'); cloud(((t * 0.8) % 62) - 13, 6, '#FFFFFF');
          for (let x = 0; x < N; x++) { const h = 34 + Math.round(2 * Math.sin(x * 0.22)); for (let y = h; y < N; y++) bput(x, y, y < h + 3 ? '#8FCB6B' : '#79BC58'); }
          [[5, 40, '#FF8FA0'], [14, 43, '#FFE066'], [27, 41, '#FFFFFF'], [36, 44, '#FF8FA0'], [43, 40, '#FFE066'], [20, 45, '#FFFFFF']].forEach(([x, y, c]) => bput(x, y, c));
        } else if (sceneK === 'desert') {
          band(0, 22, '#FBE3B8'); band(22, N, '#FCEBCB');
          for (let y = -4; y <= 4; y++) for (let x = -4; x <= 4; x++) if (x * x + y * y <= 17) bput(38 + x, 9 + y, '#F6A24A');
          for (let x = 0; x < N; x++) { const h = 36 + Math.round(2 * Math.sin(x * 0.3 + 1)); for (let y = h; y < N; y++) bput(x, y, y < h + 4 ? '#E9C27D' : '#DDB06A'); }
          bbmp(['..#..', '#.#.#', '#.#.#', '###.#', '..###', '..#..', '..#..'], 3, 31, '#6FB04F');
        } else if (sceneK === 'night') {
          band(0, N, '#2B3354');
          [[5, 6], [14, 3], [22, 9], [33, 4], [41, 13], [9, 18], [45, 24], [3, 30], [28, 44], [18, 15]].forEach(([x, y], i) => { if ((Math.floor(t * 1.6) + i) % 3) bput(x, y, '#FFF4C2'); });
          for (let y = -4; y <= 4; y++) for (let x = -4; x <= 4; x++) if (x * x + y * y <= 17) bput(37 + x, 8 + y, '#F6EFC8');
          for (let y = -4; y <= 4; y++) for (let x = -4; x <= 4; x++) if (x * x + y * y <= 14) bput(35 + x, 7 + y, '#2B3354');
        }
      }
      if (this.mode === 'status') {
        const wT = ('D+' + streak).length * 8 - 2; text('D+' + streak, (N - wT) / 2, 6, ink, 2);
        for (let k = 0; k < 4; k++) bmp(HEART3, 10 + k * 8, 22, k < this.mood ? red : off, 2);
        BODIES.forEach((b, k) => { const x = 6 + k * 8, on = b === body; for (let a = 0; a < 6; a++) for (let c = 0; c < 6; c++) if (on || a === 0 || c === 0 || a === 5 || c === 5) put(x + a, 34 + c, on ? (mono ? ink : '#F49A3C') : ink); });
      } else {
        bmp(HEART3, 2, 2, red); text('D+' + streak, 7, 1, ink);
        for (let k = 0; k < 4; k++) bmp(HEART3, N - 18 + k * 4, 2, k < this.mood ? red : off);
        let expr = 'idle', ox = 8, bob = Math.floor(t / 0.6) % 2;
        const el = (now - this.animT) / 1000;
        if (this.anim === 'eat') { expr = Math.floor(el / 0.28) % 2 ? 'eat' : 'idle'; ox = 4; bob = 0; }
        else if (this.anim === 'pet') { expr = 'happy'; bob = Math.floor(el / 0.2) % 2; }
        else if ((t % 3.4) < 0.14) expr = 'blink';
        const spr = make(body, coat, expr);
        const map = mono ? (c) => { const n = parseInt(c.slice(1), 16), l = (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255; return l < 0.4 ? ink : l < 0.72 ? '#5F7150' : l < 0.9 ? '#91A47E' : null; } : null;
        for (let y = 0; y < spr.h; y++) for (let x = 0; x < spr.w; x++) { let c = spr.px[y * spr.w + x]; if (!c) continue; if (map) { c = map(c); if (!c) continue; } put(ox + x, 7 + bob + y, c); }
        if (this.anim === 'eat') bmp(el < 1.6 ? BOWL : BOWL_E, 38, 34, mono ? ink : '#4F8FD6');
        if (this.anim === 'pet') [[36, 20], [6, 16], [38, 10]].forEach(([x, y], k) => { const p = el * 1.2 - k * 0.3; if (p > 0 && p < 1) bmp(HEART3, x, y - p * 8, red, 2); });
        ['feed', 'pet', 'stat'].forEach((k, i) => {
          const x = 8 + i * 13, y = 41, sel = this.menu === i;
          if (sel) for (let a = -1; a < 6; a++) for (let b = -1; b < 6; b++) put(x + a, y + b, ink);
          bmp(LICONS[k], x, y, sel ? (mono ? '#B7C7A2' : dark ? '#2B3354' : '#F6F0E1') : ink);
        });
      }
      const base = mono ? '#B7C7A2' : (lcdbg || '#F6F0E1'), cellC = mono ? '#AEBF98' : (lcdbg ? adj(lcdbg, dark ? 0.06 : -0.05) : '#EEE6D3');
      ctx.fillStyle = base; ctx.fillRect(0, 0, N * CELL, N * CELL);
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        ctx.fillStyle = buf[y * N + x] || bgb[y * N + x] || cellC;
        ctx.fillRect(x * CELL + 0.5, y * CELL + 0.5, CELL - 1, CELL - 1);
      }
    }
  }

  window.LoafySprites = { make, draw, drawIcon, COATS, COAT_NAMES, TYPES, BODY_NAMES, ICONS, ICON_FILL, Sim, LCD_SIZE: N * CELL };

  function drawAcc(ctx, type, acc, oy) {
    if (!acc || acc === 'none') return;
    const h = (TYPES[type] || TYPES.normal).head, ey = Math.round(h.y + 0.6) + oy, ex = Math.round(16 - h.rx * 0.52) - 1, rex = 31 - ex - 2;
    const put = (x, y, c) => { ctx.fillStyle = c; ctx.fillRect(x, y, 1, 1); };
    const bmp = (rows, x0, y0, pal) => rows.forEach((r, y) => [...r].forEach((k, x) => { if (pal[k]) put(x0 + x, y0 + y, pal[k]); }));
    if (acc === 'glasses') {
      [ex, rex].forEach(x0 => { for (let i = -1; i <= 3; i++) { put(x0 + i, ey - 2, '#2A2E36'); put(x0 + i, ey + 2, '#2A2E36'); } for (let j = -1; j <= 1; j++) { put(x0 - 1, ey + j, '#2A2E36'); put(x0 + 3, ey + j, '#2A2E36'); } });
      for (let x = ex + 4; x < rex - 1; x++) put(x, ey - 1, '#2A2E36');
    }
    if (acc === 'ribbon') { const cx = Math.round(h.x + h.rx - 3.5), cy = Math.round(h.y - h.ry + 0.5) + oy; bmp(['##.##', '#####', '##.##'], cx - 2, cy - 1, { '#': '#FF6B8A' }); put(cx, cy, '#D9435F'); }
    if (acc === 'crown') { const cy = Math.round(h.y - h.ry) - 2 + oy; bmp(['#.#.#', '#####', '##o##'], 14, cy, { '#': '#F2C14E', o: '#FF6B8A' }); }
  }

  class LoafySprite extends HTMLElement {
    static get observedAttributes() { return ['type', 'coat', 'expr', 'pose', 'scale', 'animate', 'acc']; }
    connectedCallback() {
      if (!this.cv) { this.cv = document.createElement('canvas'); this.cv.style.imageRendering = 'pixelated'; this.cv.style.display = 'block'; this.appendChild(this.cv); }
      this.style.display = 'inline-block';
      this.render();
      if (this.hasAttribute('animate')) this.loop();
    }
    disconnectedCallback() { clearTimeout(this.t); }
    attributeChangedCallback() { if (this.cv) this.render(); }
    loop() { clearTimeout(this.t); this.frame = (this.frame || 0) + 1; this.render(); this.t = setTimeout(() => this.loop(), this.frame % 6 === 5 ? 140 : 520); }
    render() {
      const s = +(this.getAttribute('scale') || 4), anim = this.hasAttribute('animate'), f = this.frame || 0;
      let expr = this.getAttribute('expr') || 'idle';
      if (anim && expr === 'idle' && f % 6 === 5) expr = 'blink';
      const spr = make(this.getAttribute('type') || 'normal', this.getAttribute('coat') || 'cheese', expr, this.getAttribute('pose') || 'sit');
      this.cv.width = spr.w; this.cv.height = spr.h + 1;
      this.cv.style.width = spr.w * s + 'px'; this.cv.style.height = (spr.h + 1) * s + 'px';
      const ctx = this.cv.getContext('2d'); ctx.clearRect(0, 0, this.cv.width, this.cv.height);
      draw(ctx, spr, 0, anim && f % 2 ? 1 : 0, 1);
      drawAcc(ctx, this.getAttribute('type') || 'normal', this.getAttribute('acc'), anim && f % 2 ? 1 : 0);
    }
  }
  if (!customElements.get('loafy-sprite')) customElements.define('loafy-sprite', LoafySprite);

  class LoafyIcon extends HTMLElement {
    static get observedAttributes() { return ['name', 'size', 'active', 'color']; }
    connectedCallback() {
      if (!this.cv) { this.cv = document.createElement('canvas'); this.cv.style.imageRendering = 'pixelated'; this.cv.style.display = 'block'; this.appendChild(this.cv); }
      this.style.display = 'inline-block'; this.style.lineHeight = '0'; this.render();
    }
    attributeChangedCallback() { if (this.cv) this.render(); }
    render() {
      const size = +(this.getAttribute('size') || 24), s = Math.max(1, Math.round(size / 12)), dpr = 2;
      const a = this.getAttribute('active'), active = a !== null && a !== 'false';
      this.cv.width = 12 * s * dpr; this.cv.height = 12 * s * dpr; this.cv.style.width = 12 * s + 'px'; this.cv.style.height = 12 * s + 'px';
      const ctx = this.cv.getContext('2d'); ctx.clearRect(0, 0, this.cv.width, this.cv.height);
      drawIcon(ctx, this.getAttribute('name'), s * dpr, active, this.getAttribute('color') || '#8E929B');
    }
  }
  if (!customElements.get('loafy-icon')) customElements.define('loafy-icon', LoafyIcon);

  class LoafyLcd extends HTMLElement {
    static get observedAttributes() { return ['body', 'coat', 'lcd', 'streak']; }
    connectedCallback() {
      if (this.cv) return;
      this.sim = new Sim();
      this.cv = document.createElement('canvas'); this.cv.width = this.cv.height = N * CELL;
      Object.assign(this.cv.style, { width: '100%', height: '100%', display: 'block' });
      Object.assign(this.style, { display: 'block', width: '100%', height: '100%' });
      this.appendChild(this.cv);
      const tick = (now) => { this.raf = requestAnimationFrame(tick); if (now - (this.last || 0) < 80) return; this.last = now; this.draw(now); };
      this.raf = requestAnimationFrame(tick);
    }
    disconnectedCallback() { cancelAnimationFrame(this.raf); this.cv && this.cv.remove(); this.cv = null; }
    draw(now) { this.sim.draw(this.cv.getContext('2d'), now, { body: this.getAttribute('body'), coat: this.getAttribute('coat'), lcd: this.getAttribute('lcd'), streak: this.getAttribute('streak'), scene: this.getAttribute('scene'), lcdbg: this.getAttribute('lcdbg') }); }
    play(a) { this.sim.play(a); }
    button(i) { const r = this.sim.button(i); if (r === 'feed') this.dispatchEvent(new CustomEvent('loafy:device-feed', { bubbles: true })); return r; }
  }
  if (!customElements.get('loafy-lcd')) customElements.define('loafy-lcd', LoafyLcd);

  // ---------- logo (from uploads/Loafy.svg, 46x22 units) ----------
  const LOGO = [[0,0,2,2,0],[2,2,2,10,0],[2,12,2,2,0],[4,14,2,2,0],[6,14,2,2,0],[8,10,2,2,0],[8,8,2,2,0],[20,12,2,2,0],[22,14,2,2,0],[26,0,2,2,0],[28,2,2,2,0],[24,2,2,2,0],[24,4,2,4,0],[24,8,2,4,0],[28,8,2,6,0],[30,14,2,2,0],[32,14,2,2,0],[32,10,2,4,0],[32,16,2,4,0],[30,20,2,2,0],[28,18,2,2,0],[32,8,2,2,0],[38,7,2,2,1],[39,10,4,4,1],[42,7,2,2,1],[36,10,2,2,1],[44,10,2,2,1],[26,6,2,2,0],[24,12,2,2,0],[24,14,2,2,0],[10,6,2,2,0],[18,10,2,2,0],[18,14,2,2,0],[10,14,2,2,0],[8,12,2,2,0],[12,8,2,2,0],[20,8,2,2,0],[20,6,2,2,0],[18,4,2,2,0],[16,6,2,2,0],[20,10,2,2,0],[16,12,2,2,0],[12,10,2,4,0],[14,14,2,2,0]];
  class LoafyLogo extends HTMLElement {
    static get observedAttributes() { return ['scale', 'replay', 'ink']; }
    connectedCallback() { if (!this.cv) { this.cv = document.createElement('canvas'); this.cv.style.display = 'block'; this.appendChild(this.cv); } this.style.display = 'inline-block'; this.style.lineHeight = '0'; this.start(); }
    disconnectedCallback() { cancelAnimationFrame(this.raf); }
    attributeChangedCallback() { if (this.cv) this.start(); }
    start() {
      const s = +(this.getAttribute('scale') || 4), dpr = 2, W = 46 * s, H = 22 * s;
      this.cv.width = W * dpr; this.cv.height = H * dpr; this.cv.style.width = W + 'px'; this.cv.style.height = H + 'px';
      const blocks = [];
      LOGO.forEach(([x, y, w, h, c]) => { if (c) return blocks.push({ x, y, w, h, c }); for (let yy = y; yy < y + h; yy += 2) for (let xx = x; xx < x + w; xx += 2) blocks.push({ x: xx, y: yy, w: 2, h: 2, c }); });
      let seed = 11; const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
      blocks.forEach(b => { b.t = b.c ? 1000 + (b.y < 9 ? 160 : 0) + Math.abs(b.x - 40) * 14 : b.x * 15 + rnd() * 240; b.d = b.c ? 380 : 260; });
      const still = this.hasAttribute('still'), t0 = performance.now(), ctx = this.cv.getContext('2d');
      const back = (p) => { const c1 = 1.9, c3 = c1 + 1; return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2); };
      cancelAnimationFrame(this.raf);
      const frame = (now) => {
        const t = still ? 1e9 : now - t0; let done = true;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
        blocks.forEach(b => {
          const p = Math.max(0, Math.min(1, (t - b.t) / b.d)); if (p < 1) done = false; if (p <= 0) return;
          const k = p >= 1 ? 1 : back(p), cx = (b.x + b.w / 2) * s, cy = (b.y + b.h / 2) * s, ww = b.w * s * k, hh = b.h * s * k;
          ctx.globalAlpha = Math.min(1, p * 2.5); ctx.fillStyle = b.c ? '#FF7474' : (this.getAttribute('ink') || '#111114');
          ctx.fillRect(cx - ww / 2, cy - hh / 2 - (1 - p) * s * 2, ww, hh);
        });
        ctx.globalAlpha = 1; if (!done) this.raf = requestAnimationFrame(frame); else if (!still) this.dispatchEvent(new CustomEvent('loafy:logo-done', { bubbles: true }));
      };
      this.raf = requestAnimationFrame(frame);
    }
  }
  if (!customElements.get('loafy-logo')) customElements.define('loafy-logo', LoafyLogo);
  window.LoafySprites.LOGO = LOGO;

  // ---------- paw-print screen transition ----------
  class LoafyPaws extends HTMLElement {
    static get observedAttributes() { return ['run']; }
    connectedCallback() { Object.assign(this.style, { display: 'block', position: 'absolute', inset: '0', pointerEvents: 'none', overflow: 'hidden' }); if (this.parentElement) this.parentElement.style.pointerEvents = 'none'; this._ready = true; }
    attributeChangedCallback(n, o, v) { if (this._ready && v && v !== '0' && v !== o) this.play(); }
    img() { if (LoafyPaws._img) return LoafyPaws._img; const c = document.createElement('canvas'); c.width = c.height = 48; drawIcon(c.getContext('2d'), 'pawpink', 4, true, '#000'); return (LoafyPaws._img = c.toDataURL()); }
    play() {
      const W = this.clientWidth || 400, H = this.clientHeight || 800, src = this.img();
      const layer = document.createElement('div'); Object.assign(layer.style, { position: 'absolute', inset: '0' }); this.appendChild(layer);
      const wash = document.createElement('div'); Object.assign(wash.style, { position: 'absolute', inset: '0', background: '#FFF6F4', opacity: '0' }); layer.appendChild(wash);
      wash.animate([{ opacity: 0 }, { opacity: 0.96, offset: 0.42 }, { opacity: 0.96, offset: 0.56 }, { opacity: 0 }], { duration: 1300, easing: 'ease-in-out', fill: 'forwards' });
      const G = 56, sz = 40, cols = Math.ceil(W / G) + 1, rows = Math.ceil(H / G) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * G + (r % 2 ? G / 2 : 0) - G / 2 + (Math.random() - 0.5) * 14, y = H - r * G - G / 2 + (Math.random() - 0.5) * 14;
          const rot = (Math.random() - 0.5) * 36, op = 0.38 + Math.random() * 0.3;
          const el = document.createElement('img'); el.src = src;
          Object.assign(el.style, { position: 'absolute', left: (x - sz / 2) + 'px', top: (y - sz / 2) + 'px', width: sz + 'px', height: sz + 'px', imageRendering: 'pixelated', opacity: '0' });
          layer.appendChild(el);
          el.animate([
            { opacity: 0, transform: 'translateY(24px) rotate(' + rot + 'deg) scale(0.3)' },
            { opacity: op, transform: 'translateY(-2px) rotate(' + rot + 'deg) scale(1.12)', offset: 0.6 },
            { opacity: op, transform: 'translateY(0) rotate(' + rot + 'deg) scale(1)' }
          ], { duration: 320, delay: r * 42 + Math.random() * 90, easing: 'cubic-bezier(.34,1.56,.64,1)', fill: 'forwards' });
        }
      }
      const fade = layer.animate([{ opacity: 1 }, { opacity: 1, offset: 0.62 }, { opacity: 0 }], { duration: 1600, easing: 'ease-out', fill: 'forwards' });
      fade.onfinish = () => layer.remove();
    }
  }
  if (!customElements.get('loafy-paws')) customElements.define('loafy-paws', LoafyPaws);
})();
