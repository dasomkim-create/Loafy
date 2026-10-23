/* @ds-bundle: {"format":4,"namespace":"DesignSystem_b38bc5","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"ListRow","sourcePath":"components/core/ListRow.jsx"},{"name":"TabBar","sourcePath":"components/core/TabBar.jsx"},{"name":"Toast","sourcePath":"components/core/Toast.jsx"}],"sourceHashes":{"assets/loafy-sprites.js":"0ffbac24fc95","assets/loafy-tama.js":"b0b69bb3a99e","components/core/Badge.jsx":"1d81711a5811","components/core/Button.jsx":"08146c9ab298","components/core/Input.jsx":"864a14678145","components/core/ListRow.jsx":"1635ab09b49e","components/core/TabBar.jsx":"d0796383af09","components/core/Toast.jsx":"857ebdc0da3a","ui_kits/loafy-app/loafy-sprites.js":"0ffbac24fc95","ui_kits/loafy-app/loafy-tama.js":"b0b69bb3a99e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_b38bc5 = window.DesignSystem_b38bc5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/loafy-sprites.js
try { (() => {
(function () {
  const COATS = {
    cheese: {
      base: '#F49A3C',
      light: '#FFBE73',
      shade: '#D8742A',
      stripe: '#C45F1C',
      belly: '#FFE8C8',
      bellyShade: '#F2C995',
      line: '#5E2E14',
      ear: '#F6A2A6'
    },
    mackerel: {
      base: '#9AA2AC',
      light: '#C3C9D0',
      shade: '#7A838E',
      stripe: '#565F6B',
      belly: '#F0F2F4',
      bellyShade: '#D1D6DB',
      line: '#2A2E36',
      ear: '#F2A7B0'
    },
    tuxedo: {
      base: '#3C3D47',
      light: '#5A5C6A',
      shade: '#2A2B33',
      stripe: '#3C3D47',
      belly: '#FAFAF6',
      bellyShade: '#D9D9D2',
      line: '#141419',
      ear: '#E99AA4'
    },
    cow: {
      base: '#FAFAF7',
      light: '#FFFFFF',
      shade: '#DCDCD6',
      stripe: '#FAFAF7',
      belly: '#FFFFFF',
      bellyShade: '#E4E4DE',
      line: '#1E1E24',
      ear: '#F2A2AC',
      patch: '#2A2A31',
      patchShade: '#18181C',
      patchLight: '#40404A'
    },
    blue: {
      base: '#8F9BAE',
      light: '#AEB8C8',
      shade: '#727E92',
      stripe: '#8F9BAE',
      belly: '#A9B3C3',
      bellyShade: '#8C97AA',
      line: '#2A303C',
      ear: '#E6A3AE'
    },
    choco: {
      base: '#8A5A3C',
      light: '#A6744F',
      shade: '#6C442C',
      stripe: '#5A3622',
      belly: '#F3E6D8',
      bellyShade: '#DCC6AE',
      line: '#2E1B10',
      ear: '#E9A0A4'
    },
    cream: {
      base: '#EFD8B0',
      light: '#FAEBD0',
      shade: '#D8BA8A',
      stripe: '#CFA972',
      belly: '#FFF8EC',
      bellyShade: '#EEDDC2',
      line: '#6A4A2A',
      ear: '#F4A9AE'
    }
  };
  const COAT_NAMES = {
    cheese: '치즈',
    mackerel: '고등어',
    tuxedo: '턱시도',
    cow: '얼룩이',
    cream: '크림',
    blue: '러시안블루',
    choco: '초코'
  };
  const TYPES = {
    slim: {
      head: {
        x: 16,
        y: 10.6,
        rx: 7.2,
        ry: 6.3
      },
      chest: {
        x: 16,
        y: 20,
        rx: 4.7,
        ry: 6.4
      },
      haunch: {
        x: 16,
        y: 26,
        rx: 6.8,
        ry: 4.8
      },
      fp: {
        dx: 1.9,
        rx: 1.8,
        ry: 1.4
      },
      bp: {
        dx: 5.6,
        rx: 2,
        ry: 1.3
      },
      legs: 3.6
    },
    bulk: {
      head: {
        x: 16,
        y: 10.2,
        rx: 7.6,
        ry: 6.4
      },
      chest: {
        x: 16,
        y: 19.6,
        rx: 9.8,
        ry: 6.2
      },
      haunch: {
        x: 16,
        y: 25.4,
        rx: 9.2,
        ry: 5.4
      },
      arms: {
        dx: 8.4,
        y: 23.4,
        rx: 3.7,
        ry: 6.8
      },
      fp: {
        dx: 8.2,
        rx: 3,
        ry: 1.6
      },
      legs: 0
    },
    normal: {
      head: {
        x: 16,
        y: 10.6,
        rx: 8.4,
        ry: 6.9
      },
      chest: {
        x: 16,
        y: 19.8,
        rx: 6,
        ry: 6.2
      },
      haunch: {
        x: 16,
        y: 25.3,
        rx: 8.8,
        ry: 5.5
      },
      fp: {
        dx: 2.4,
        rx: 2.2,
        ry: 1.5
      },
      bp: {
        dx: 7.4,
        rx: 2.3,
        ry: 1.4
      },
      legs: 4.4
    },
    fit: {
      head: {
        x: 16,
        y: 10.4,
        rx: 7.5,
        ry: 6.3
      },
      chest: {
        x: 16,
        y: 19.8,
        rx: 7.4,
        ry: 6.3
      },
      haunch: {
        x: 16,
        y: 25.6,
        rx: 8.2,
        ry: 5.1
      },
      fp: {
        dx: 2.3,
        rx: 2.1,
        ry: 1.5
      },
      bp: {
        dx: 6.8,
        rx: 2.2,
        ry: 1.3
      },
      legs: 4
    },
    jjin: {
      head: {
        x: 16,
        y: 11.2,
        rx: 8.8,
        ry: 7
      },
      chest: {
        x: 16,
        y: 20.4,
        rx: 8.8,
        ry: 7
      },
      haunch: {
        x: 16,
        y: 25,
        rx: 11.4,
        ry: 5.9
      },
      fp: {
        dx: 3,
        rx: 2.4,
        ry: 1.5
      },
      bp: {
        dx: 9.2,
        rx: 2.4,
        ry: 1.4
      },
      legs: 5
    },
    loaf: {
      head: {
        x: 16,
        y: 12.4,
        rx: 9,
        ry: 7
      },
      chest: null,
      haunch: {
        x: 16,
        y: 22.6,
        rx: 13.6,
        ry: 8.3
      },
      fp: {
        dx: 3.4,
        rx: 2.4,
        ry: 1.3
      },
      bp: {
        dx: 10.2,
        rx: 2.3,
        ry: 1.2
      },
      legs: 0
    }
  };
  const BODY_NAMES = {
    slim: '날렵',
    bulk: '벌크',
    normal: '보통',
    fit: '탄탄',
    jjin: '찐빵',
    loaf: '식빵'
  };
  const W = 32,
    H = 32;
  const inE = (px, py, e) => ((px - e.x) / e.rx) ** 2 + ((py - e.y) / e.ry) ** 2 <= 1;
  const inSE = (px, py, e, p) => Math.abs((px - e.x) / e.rx) ** p + Math.abs((py - e.y) / e.ry) ** p <= 1;
  const sgn = (p1, p2, p3) => (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1]);
  const inT = (p, a, b, c) => {
    const d1 = sgn(p, a, b),
      d2 = sgn(p, b, c),
      d3 = sgn(p, c, a);
    return !((d1 < 0 || d2 < 0 || d3 < 0) && (d1 > 0 || d2 > 0 || d3 > 0));
  };
  const shrink = (t, k) => {
    const cx = (t[0][0] + t[1][0] + t[2][0]) / 3,
      cy = (t[0][1] + t[1][1] + t[2][1]) / 3;
    return t.map(p => [cx + (p[0] - cx) * k, cy + (p[1] - cy) * k + 0.5]);
  };
  const cache = {};
  function make(type, coat, expr, pose) {
    expr = expr || 'idle';
    pose = pose || 'sit';
    const key = [type, coat, expr, pose].join('|');
    if (cache[key]) return cache[key];
    const T = TYPES[type] || TYPES.normal,
      C = COATS[coat] || COATS.cheese;
    const h = T.head,
      ch = T.chest,
      hn = T.haunch;
    const ears = [-1, 1].map(s => [[h.x + s * (h.rx - 0.6), h.y - h.ry * 0.35], [h.x + s * (h.rx - 5.2), h.y - h.ry + 0.4], [h.x + s * (h.rx - 1.6), h.y - h.ry - 2.6]]);
    const earsIn = ears.map(t => shrink(t, 0.48));
    const tail = {
      x: 16 + hn.rx - 0.4 + (T.arms ? 2 : 0),
      y: 29.3,
      rx: 3.6,
      ry: 1.4
    };
    const legTop = ch ? ch.y + 2.5 : 99;
    const region = new Array(W * H).fill(null);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const px = x + 0.5,
        py = y + 0.5;
      let r = null;
      if (inE(px, py, tail)) r = 'tail';
      if (inE(px, py, hn) || ch && inE(px, py, ch)) r = 'body';
      if (r === 'body' && T.legs && Math.abs(px - 16) < T.legs && py > legTop) r = 'leg';
      if (T.arms && [-1, 1].some(s => inE(px, py, {
        ...T.arms,
        x: 16 + s * T.arms.dx
      }))) r = 'arm';
      if (ears.some(t => inT([px, py], ...t))) r = earsIn.some(t => inT([px, py], ...t)) ? 'earIn' : 'ear';
      if (inSE(px, py, h, 2.3)) r = 'head';
      if (T.bp && [-1, 1].some(s => inE(px, py, {
        x: 16 + s * T.bp.dx,
        y: 30.3,
        rx: T.bp.rx,
        ry: T.bp.ry
      }))) r = 'paw';
      if ([-1, 1].some(s => inE(px, py, {
        x: 16 + s * T.fp.dx,
        y: 30.1,
        rx: T.fp.rx,
        ry: T.fp.ry
      }))) r = 'paw';
      if (py > 31) r = null;
      region[y * W + x] = r;
    }
    const R = (x, y) => x < 0 || y < 0 || x >= W || y >= H ? null : region[y * W + x];
    const M = (x, y) => !!R(x, y);
    const belly = ch ? {
      x: 16,
      y: ch.y + 0.6,
      rx: ch.rx * 0.62,
      ry: ch.ry * 0.95
    } : {
      x: 16,
      y: hn.y - 1.5,
      rx: hn.rx * 0.48,
      ry: 6
    };
    const ey = Math.round(h.y + 0.6),
      ex = Math.round(16 - h.rx * 0.52) - 1,
      ny = ey + 2;
    const muzzle = {
      x: 16,
      y: ey + 2.7,
      rx: 3.6,
      ry: 2.3
    };
    const patches = C.patch ? [{
      x: h.x - h.rx * 0.5,
      y: h.y - h.ry * 0.55,
      rx: h.rx * 0.55,
      ry: h.ry * 0.62
    }, {
      x: 16 + hn.rx * 0.55,
      y: hn.y - 0.5,
      rx: hn.rx * 0.42,
      ry: hn.ry * 0.8
    }, {
      x: 16 - (ch ? ch.rx : hn.rx * 0.6) * 0.85,
      y: (ch ? ch.y : hn.y - 4) - 1,
      rx: 2.4,
      ry: 2.2
    }] : [];
    const px = new Array(W * H).fill(null);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const r = R(x, y),
        cx = x + 0.5,
        cy = y + 0.5;
      if (!r) {
        if (M(x + 1, y) || M(x - 1, y) || M(x, y + 1) || M(x, y - 1)) px[y * W + x] = C.line;
        continue;
      }
      let kind = 'base';
      if (r === 'earIn') kind = 'ear';else if (r === 'paw') kind = 'belly';else if (r === 'head') {
        const top = h.y - h.ry;
        if (inE(cx, cy, muzzle)) kind = 'belly';else if ((x === 13 || x === 15 || x === 16 || x === 18) && cy < top + 3.8 && (x === 15 || x === 16 ? cy < top + 3.2 : cy > top + 1)) kind = 'stripe';else if (Math.abs(cx - 16) > h.rx - 2.2 && (y === ey || y === ey + 2)) kind = 'stripe';
      } else if (r === 'body') {
        if (inE(cx, cy, belly)) kind = 'belly';else if (y % 3 === 1 && Math.abs(cx - 16) > Math.max(belly.rx, T.legs) + 0.8) kind = 'stripe';
      } else if (r === 'leg') {
        if (cy < legTop + 2 && inE(cx, cy, belly)) kind = 'belly';else if (x === 15 || x === 16 || Math.abs(cx - 16) > T.legs - 1) kind = 'legline';else if (y % 3 === 2) kind = 'stripe';
      } else if (r === 'arm') {
        if (y % 3 === 0) kind = 'stripe';
        const s = x < 16 ? 1 : -1;
        if (R(x + s, y) === 'body') kind = 'stripe';
      } else if (r === 'tail') {
        if (x % 2 === 0) kind = 'stripe';
      }
      const patched = patches.length && (kind === 'base' || kind === 'stripe' || kind === 'legline') && (r === 'tail' || patches.some(p => inE(cx, cy, p)));
      const shade = !M(x + 2, y + 1) || !M(x + 1, y + 2);
      const light = !shade && (!M(x - 2, y - 1) || !M(x - 1, y - 2));
      const chin = (r === 'body' || r === 'arm' || r === 'leg') && R(x, y - 1) === 'head';
      const pawTop = r === 'paw' && R(x, y - 1) !== 'paw';
      let c;
      if (patched) c = shade || chin || kind === 'legline' ? C.patchShade : light ? C.patchLight : C.patch;else if (kind === 'base') c = shade || chin ? C.shade : light ? C.light : C.base;else if (kind === 'legline') c = C.shade;else if (kind === 'belly') c = shade || chin || pawTop ? C.bellyShade : C.belly;else if (kind === 'stripe') c = chin ? C.shade : C.stripe;else c = C[kind];
      px[y * W + x] = c;
    }
    const set = (x, y, c) => {
      if (x >= 0 && y >= 0 && x < W && y < H) px[y * W + x] = c;
    };
    const D = '#20140E',
      WH = '#FFFFFF',
      BL = '#FF8E9A',
      AM = '#7A5A48';
    const EYES = {
      idle: [[0, -1, WH], [1, -1, D], [2, -1, D], [0, 0, D], [1, 0, D], [2, 0, D], [0, 1, D], [1, 1, AM], [2, 1, D], [1, -2, D]],
      blink: [[0, 0, D], [1, 0, D], [2, 0, D]],
      happy: [[0, 0, D], [1, -1, D], [2, 0, D]],
      eat: [[0, 0, D], [1, -1, D], [2, 0, D]],
      sleep: [[0, -1, D], [1, 0, D], [2, -1, D]],
      surprise: [[1, -2, D], [0, -1, D], [2, -1, D], [0, 0, D], [2, 0, D], [1, 1, D], [1, -1, WH], [1, 0, WH]],
      up: [[0, -2, WH], [1, -2, D], [2, -2, D], [0, -1, D], [1, -1, D], [2, -1, D], [1, 0, AM]]
    };
    const rex = 31 - ex - 2;
    (EYES[expr] || EYES.idle).forEach(([dx, dy, c]) => {
      set(ex + dx, ey + dy, c);
      set(rex + dx, ey + dy, c);
    });
    [[ex - 1, ny], [ex, ny]].forEach(([x, y]) => {
      set(x, y, BL);
      set(31 - x, y, BL);
    });
    set(15, ny, '#E2707C');
    set(16, ny, '#E2707C');
    const L = C.line;
    if (expr === 'eat') {
      set(15, ny + 1, L);
      set(16, ny + 1, L);
      set(14, ny + 2, L);
      set(17, ny + 2, L);
      set(15, ny + 2, '#C2434E');
      set(16, ny + 2, '#C2434E');
      set(15, ny + 3, L);
      set(16, ny + 3, L);
    } else if (expr === 'surprise') {
      set(15, ny + 1, L);
      set(16, ny + 1, L);
      set(14, ny + 2, L);
      set(17, ny + 2, L);
      set(15, ny + 3, L);
      set(16, ny + 3, L);
      set(15, ny + 2, '#C2434E');
      set(16, ny + 2, '#C2434E');
    } else if (expr === 'sleep') {
      set(15, ny + 1, L);
      set(16, ny + 1, L);
    } else {
      set(15, ny + 1, L);
      set(16, ny + 1, L);
      set(14, ny + 2, L);
      set(17, ny + 2, L);
      set(13, ny + 1, L);
      set(18, ny + 1, L);
    }
    const bmp = (rows, ox, oy, map) => rows.forEach((row, yy) => [...row].forEach((k, xx) => {
      if (map[k]) set(ox + xx, oy + yy, map[k]);
    }));
    if (pose === 'letter') {
      const ox = 11,
        oy = ch ? Math.round(ch.y) + 1 : 20;
      bmp(['##########', '#oWWWWWWo#', '#WoWWWWoW#', '#WWorrWWW#'.replace('WWorrWWW', 'WWorroWW'), '#WWWWWWWW#', '##########'], ox, oy, {
        '#': L,
        'W': '#FFFFFF',
        'o': '#B9BCC4',
        'r': '#E5484D'
      });
      bmp(['LL', 'BB'], ox - 1, oy + 2, {
        L: L,
        B: C.belly
      });
      bmp(['LL', 'BB'], ox + 9, oy + 2, {
        L: L,
        B: C.belly
      });
    } else if (pose === 'stamp') {
      bmp(['.r.r.', 'r...r', '.rrr.', 'rrrrr', '.rrr.'], 26, 26, {
        r: '#E5484D'
      });
    } else if (pose === 'sleep') {
      bmp(['###', '.#.', '###'].map(s => s.replace('.#.', '..#').replace('..#', '.#.')), 25, 3, {
        '#': '#5B6472'
      });
      bmp(['##', '##'], 29, 0, {
        '#': '#8E929B'
      });
    }
    return cache[key] = {
      w: W,
      h: H,
      px
    };
  }
  function draw(ctx, spr, ox, oy, s, map) {
    for (let y = 0; y < spr.h; y++) for (let x = 0; x < spr.w; x++) {
      let c = spr.px[y * spr.w + x];
      if (!c) continue;
      if (map) {
        c = map(c);
        if (!c) continue;
      }
      ctx.fillStyle = c;
      ctx.fillRect((ox + x) * s, (oy + y) * s, s, s);
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
  ICONS.pawpink = ICONS.paw;
  ICONS.letterblue = ICONS.letter;
  const ICON_INK = {
    cookie: '#C9566D',
    pawpink: '#D24E66',
    letterblue: '#1B64DA'
  };
  const ICON_FILL = {
    speaker: '#9DB6E6',
    speaker_off: '#C9CED8',
    plane: '#9DB6E6',
    dumbbell: '#C9CED8',
    ex_run: '#FF9F55',
    ex_chest: '#FFC9A3',
    ex_back: '#B9D4FF',
    ex_leg: '#BFE6C9',
    ex_shoulder: '#D9CCF5',
    ex_arm: '#FFE08A',
    ex_core: '#FFB8C4',
    flame: '#FF9F55',
    timer: '#9DC3FF',
    pawpink: '#FF8FA0',
    letterblue: '#FFFFFF',
    home: '#B4BCC8',
    record: '#8FC7B4',
    my: '#F6A2A6',
    paw: '#F49A3C',
    share: '#9DB6E6',
    brush: '#F2C14E',
    letter: '#FFF6E6',
    bell: '#F2C14E',
    shop: '#C9B6F0',
    cookie: '#FFC2CD'
  };
  function drawIcon(ctx, name, s, active, lineColor) {
    const rows = ICONS[name];
    if (!rows) return;
    const at = (x, y) => y < 0 || y >= 12 || x < 0 || x >= 12 ? '.' : rows[y][x];
    const ink = ICON_INK[name] || '#2F343D';
    for (let y = 0; y < 12; y++) for (let x = 0; x < 12; x++) {
      const k = at(x, y);
      if (k === '.') continue;
      const edge = [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => at(x + dx, y + dy) === '.');
      let c = null;
      if (active) c = edge ? ink : k === 'o' ? ink : ICON_FILL[name];else if (edge || k === 'o') c = lineColor;
      if (c) {
        ctx.fillStyle = c;
        ctx.fillRect(x * s, y * s, s, s);
      }
    }
  }

  // ---------- LCD sim (shared by 3D device + fullscreen) ----------
  const N = 48,
    CELL = 8;
  const FONT = {
    '0': ['###', '#.#', '#.#', '#.#', '###'],
    '1': ['.#.', '##.', '.#.', '.#.', '###'],
    '2': ['###', '..#', '###', '#..', '###'],
    '3': ['###', '..#', '.##', '..#', '###'],
    '4': ['#.#', '#.#', '###', '..#', '..#'],
    '5': ['###', '#..', '###', '..#', '###'],
    '6': ['###', '#..', '###', '#.#', '###'],
    '7': ['###', '..#', '.#.', '.#.', '.#.'],
    '8': ['###', '#.#', '###', '#.#', '###'],
    '9': ['###', '#.#', '###', '..#', '###'],
    'D': ['##.', '#.#', '#.#', '#.#', '##.'],
    '+': ['...', '.#.', '###', '.#.', '...']
  };
  const LICONS = {
    feed: ['.....', '#.##.', '#####', '#.##.', '.....'],
    pet: ['.#.#.', '#####', '#####', '.###.', '..#..'],
    stat: ['....#', '..#.#', '..#.#', '#.#.#', '#.#.#']
  };
  const HEART3 = ['#.#', '###', '.#.'];
  const BOWL = ['.#.#..', '######', '#....#', '.####.'],
    BOWL_E = ['......', '######', '#....#', '.####.'];
  const BODIES = ['slim', 'bulk', 'normal', 'jjin', 'loaf'];
  class Sim {
    constructor() {
      this.menu = 0;
      this.mode = 'home';
      this.anim = null;
      this.animT = 0;
      this.mood = 3;
    }
    play(a) {
      this.anim = a;
      this.animT = performance.now();
      this.mode = 'home';
      if (a === 'pet') this.mood = Math.min(4, this.mood + 1);
    }
    button(i) {
      if (i === 0) {
        if (this.mode === 'home' && !this.anim) this.menu = (this.menu + 1) % 3;
        return null;
      }
      if (i === 1) {
        if (this.mode === 'status') {
          this.mode = 'home';
          return null;
        }
        if (this.anim) return null;
        if (this.menu === 0) {
          this.play('eat');
          return 'feed';
        }
        if (this.menu === 1) {
          this.play('pet');
          return 'pet';
        }
        this.mode = 'status';
        return null;
      }
      this.mode = 'home';
      this.anim = null;
      return 'back';
    }
    draw(ctx, now, o) {
      const mono = o.lcd === 'mono';
      const buf = new Array(N * N).fill(null);
      const put = (x, y, c) => {
        x |= 0;
        y |= 0;
        if (x >= 0 && y >= 0 && x < N && y < N) buf[y * N + x] = c;
      };
      const lumF = h => {
        const n = parseInt(h.slice(1), 16);
        return (0.299 * (n >> 16) + 0.587 * (n >> 8 & 255) + 0.114 * (n & 255)) / 255;
      };
      const adj = (h, d) => {
        const n = parseInt(h.slice(1), 16),
          c = v => Math.max(0, Math.min(255, Math.round(v + d * 255)));
        return '#' + [n >> 16, n >> 8 & 255, n & 255].map(v => c(v).toString(16).padStart(2, '0')).join('');
      };
      const sceneK = mono ? 'none' : o.scene || 'none',
        lcdbg = !mono && o.lcdbg ? o.lcdbg : '';
      const dark = !mono && (sceneK === 'night' || lcdbg && lumF(lcdbg) < 0.35);
      const ink = mono ? '#2E3A26' : dark ? '#F3EBDD' : '#3A2A22',
        red = mono ? ink : '#E5566A',
        off = mono ? '#8FA07C' : dark ? '#5A6285' : '#D8CBB4';
      const bgb = new Array(N * N).fill(null);
      const bput = (x, y, c) => {
        x |= 0;
        y |= 0;
        if (x >= 0 && y >= 0 && x < N && y < N) bgb[y * N + x] = c;
      };
      const bbmp = (rows, ox, oy, c) => rows.forEach((row, y) => [...row].forEach((chr, x) => {
        if (chr === '#') bput(ox + x, oy + y, c);
      }));
      const bmp = (rows, ox, oy, c, sc) => {
        sc = sc || 1;
        rows.forEach((row, y) => [...row].forEach((chr, x) => {
          if (chr === '#') for (let a = 0; a < sc; a++) for (let b = 0; b < sc; b++) put(ox + x * sc + a, oy + y * sc + b, c);
        }));
      };
      const text = (str, ox, oy, c, sc) => {
        sc = sc || 1;
        [...str].forEach((chr, k) => FONT[chr] && bmp(FONT[chr], ox + k * 4 * sc, oy, c, sc));
      };
      const t = now / 1000,
        streak = String(o.streak || 12),
        body = o.body || 'normal',
        coat = o.coat || 'cheese';
      if (this.anim && now - this.animT > (this.anim === 'eat' ? 2600 : 1800)) this.anim = null;
      if (sceneK !== 'none') {
        const band = (y0, y1, c) => {
          for (let y = y0; y < y1; y++) for (let x = 0; x < N; x++) bput(x, y, c);
        };
        const CL = ['...####....', '..######...', '.########..', '###########', '.#########.'];
        const cloud = (x, y, c) => {
          bbmp(CL, x, y, c);
        };
        if (sceneK === 'cloud') {
          band(0, 16, '#A9D6FF');
          band(16, 32, '#BDE2FF');
          band(32, N, '#D3EEFF');
          cloud(t * 1.6 % 62 - 13, 9, '#FFFFFF');
          cloud((t * 1.0 + 30) % 62 - 13, 22, '#F4FAFF');
          cloud((t * 0.7 + 12) % 62 - 13, 34, '#FFFFFF');
        } else if (sceneK === 'meadow') {
          band(0, N, '#CDEBFF');
          cloud(t * 0.8 % 62 - 13, 6, '#FFFFFF');
          for (let x = 0; x < N; x++) {
            const h = 34 + Math.round(2 * Math.sin(x * 0.22));
            for (let y = h; y < N; y++) bput(x, y, y < h + 3 ? '#8FCB6B' : '#79BC58');
          }
          [[5, 40, '#FF8FA0'], [14, 43, '#FFE066'], [27, 41, '#FFFFFF'], [36, 44, '#FF8FA0'], [43, 40, '#FFE066'], [20, 45, '#FFFFFF']].forEach(([x, y, c]) => bput(x, y, c));
        } else if (sceneK === 'desert') {
          band(0, 22, '#FBE3B8');
          band(22, N, '#FCEBCB');
          for (let y = -4; y <= 4; y++) for (let x = -4; x <= 4; x++) if (x * x + y * y <= 17) bput(38 + x, 9 + y, '#F6A24A');
          for (let x = 0; x < N; x++) {
            const h = 36 + Math.round(2 * Math.sin(x * 0.3 + 1));
            for (let y = h; y < N; y++) bput(x, y, y < h + 4 ? '#E9C27D' : '#DDB06A');
          }
          bbmp(['..#..', '#.#.#', '#.#.#', '###.#', '..###', '..#..', '..#..'], 3, 31, '#6FB04F');
        } else if (sceneK === 'night') {
          band(0, N, '#2B3354');
          [[5, 6], [14, 3], [22, 9], [33, 4], [41, 13], [9, 18], [45, 24], [3, 30], [28, 44], [18, 15]].forEach(([x, y], i) => {
            if ((Math.floor(t * 1.6) + i) % 3) bput(x, y, '#FFF4C2');
          });
          for (let y = -4; y <= 4; y++) for (let x = -4; x <= 4; x++) if (x * x + y * y <= 17) bput(37 + x, 8 + y, '#F6EFC8');
          for (let y = -4; y <= 4; y++) for (let x = -4; x <= 4; x++) if (x * x + y * y <= 14) bput(35 + x, 7 + y, '#2B3354');
        }
      }
      if (this.mode === 'status') {
        const wT = ('D+' + streak).length * 8 - 2;
        text('D+' + streak, (N - wT) / 2, 6, ink, 2);
        for (let k = 0; k < 4; k++) bmp(HEART3, 10 + k * 8, 22, k < this.mood ? red : off, 2);
        BODIES.forEach((b, k) => {
          const x = 6 + k * 8,
            on = b === body;
          for (let a = 0; a < 6; a++) for (let c = 0; c < 6; c++) if (on || a === 0 || c === 0 || a === 5 || c === 5) put(x + a, 34 + c, on ? mono ? ink : '#F49A3C' : ink);
        });
      } else {
        bmp(HEART3, 2, 2, red);
        text('D+' + streak, 7, 1, ink);
        for (let k = 0; k < 4; k++) bmp(HEART3, N - 18 + k * 4, 2, k < this.mood ? red : off);
        let expr = 'idle',
          ox = 8,
          bob = Math.floor(t / 0.6) % 2;
        const el = (now - this.animT) / 1000;
        if (this.anim === 'eat') {
          expr = Math.floor(el / 0.28) % 2 ? 'eat' : 'idle';
          ox = 4;
          bob = 0;
        } else if (this.anim === 'pet') {
          expr = 'happy';
          bob = Math.floor(el / 0.2) % 2;
        } else if (t % 3.4 < 0.14) expr = 'blink';
        const spr = make(body, coat, expr);
        const map = mono ? c => {
          const n = parseInt(c.slice(1), 16),
            l = (0.299 * (n >> 16) + 0.587 * (n >> 8 & 255) + 0.114 * (n & 255)) / 255;
          return l < 0.4 ? ink : l < 0.72 ? '#5F7150' : l < 0.9 ? '#91A47E' : null;
        } : null;
        for (let y = 0; y < spr.h; y++) for (let x = 0; x < spr.w; x++) {
          let c = spr.px[y * spr.w + x];
          if (!c) continue;
          if (map) {
            c = map(c);
            if (!c) continue;
          }
          put(ox + x, 7 + bob + y, c);
        }
        if (this.anim === 'eat') bmp(el < 1.6 ? BOWL : BOWL_E, 38, 34, mono ? ink : '#4F8FD6');
        if (this.anim === 'pet') [[36, 20], [6, 16], [38, 10]].forEach(([x, y], k) => {
          const p = el * 1.2 - k * 0.3;
          if (p > 0 && p < 1) bmp(HEART3, x, y - p * 8, red, 2);
        });
        ['feed', 'pet', 'stat'].forEach((k, i) => {
          const x = 8 + i * 13,
            y = 41,
            sel = this.menu === i;
          if (sel) for (let a = -1; a < 6; a++) for (let b = -1; b < 6; b++) put(x + a, y + b, ink);
          bmp(LICONS[k], x, y, sel ? mono ? '#B7C7A2' : dark ? '#2B3354' : '#F6F0E1' : ink);
        });
      }
      const base = mono ? '#B7C7A2' : lcdbg || '#F6F0E1',
        cellC = mono ? '#AEBF98' : lcdbg ? adj(lcdbg, dark ? 0.06 : -0.05) : '#EEE6D3';
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, N * CELL, N * CELL);
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        ctx.fillStyle = buf[y * N + x] || bgb[y * N + x] || cellC;
        ctx.fillRect(x * CELL + 0.5, y * CELL + 0.5, CELL - 1, CELL - 1);
      }
    }
  }
  window.LoafySprites = {
    make,
    draw,
    drawIcon,
    COATS,
    COAT_NAMES,
    TYPES,
    BODY_NAMES,
    ICONS,
    ICON_FILL,
    Sim,
    LCD_SIZE: N * CELL
  };
  function drawAcc(ctx, type, acc, oy) {
    if (!acc || acc === 'none') return;
    const h = (TYPES[type] || TYPES.normal).head,
      ey = Math.round(h.y + 0.6) + oy,
      ex = Math.round(16 - h.rx * 0.52) - 1,
      rex = 31 - ex - 2;
    const put = (x, y, c) => {
      ctx.fillStyle = c;
      ctx.fillRect(x, y, 1, 1);
    };
    const bmp = (rows, x0, y0, pal) => rows.forEach((r, y) => [...r].forEach((k, x) => {
      if (pal[k]) put(x0 + x, y0 + y, pal[k]);
    }));
    if (acc === 'glasses') {
      [ex, rex].forEach(x0 => {
        for (let i = -1; i <= 3; i++) {
          put(x0 + i, ey - 2, '#2A2E36');
          put(x0 + i, ey + 2, '#2A2E36');
        }
        for (let j = -1; j <= 1; j++) {
          put(x0 - 1, ey + j, '#2A2E36');
          put(x0 + 3, ey + j, '#2A2E36');
        }
      });
      for (let x = ex + 4; x < rex - 1; x++) put(x, ey - 1, '#2A2E36');
    }
    if (acc === 'ribbon') {
      const cx = Math.round(h.x + h.rx - 3.5),
        cy = Math.round(h.y - h.ry + 0.5) + oy;
      bmp(['##.##', '#####', '##.##'], cx - 2, cy - 1, {
        '#': '#FF6B8A'
      });
      put(cx, cy, '#D9435F');
    }
    if (acc === 'crown') {
      const cy = Math.round(h.y - h.ry) - 2 + oy;
      bmp(['#.#.#', '#####', '##o##'], 14, cy, {
        '#': '#F2C14E',
        o: '#FF6B8A'
      });
    }
  }
  class LoafySprite extends HTMLElement {
    static get observedAttributes() {
      return ['type', 'coat', 'expr', 'pose', 'scale', 'animate', 'acc'];
    }
    connectedCallback() {
      if (!this.cv) {
        this.cv = document.createElement('canvas');
        this.cv.style.imageRendering = 'pixelated';
        this.cv.style.display = 'block';
        this.appendChild(this.cv);
      }
      this.style.display = 'inline-block';
      this.render();
      if (this.hasAttribute('animate')) this.loop();
    }
    disconnectedCallback() {
      clearTimeout(this.t);
    }
    attributeChangedCallback() {
      if (this.cv) this.render();
    }
    loop() {
      clearTimeout(this.t);
      this.frame = (this.frame || 0) + 1;
      this.render();
      this.t = setTimeout(() => this.loop(), this.frame % 6 === 5 ? 140 : 520);
    }
    render() {
      const s = +(this.getAttribute('scale') || 4),
        anim = this.hasAttribute('animate'),
        f = this.frame || 0;
      let expr = this.getAttribute('expr') || 'idle';
      if (anim && expr === 'idle' && f % 6 === 5) expr = 'blink';
      const spr = make(this.getAttribute('type') || 'normal', this.getAttribute('coat') || 'cheese', expr, this.getAttribute('pose') || 'sit');
      this.cv.width = spr.w;
      this.cv.height = spr.h + 1;
      this.cv.style.width = spr.w * s + 'px';
      this.cv.style.height = (spr.h + 1) * s + 'px';
      const ctx = this.cv.getContext('2d');
      ctx.clearRect(0, 0, this.cv.width, this.cv.height);
      draw(ctx, spr, 0, anim && f % 2 ? 1 : 0, 1);
      drawAcc(ctx, this.getAttribute('type') || 'normal', this.getAttribute('acc'), anim && f % 2 ? 1 : 0);
    }
  }
  if (!customElements.get('loafy-sprite')) customElements.define('loafy-sprite', LoafySprite);
  class LoafyIcon extends HTMLElement {
    static get observedAttributes() {
      return ['name', 'size', 'active', 'color'];
    }
    connectedCallback() {
      if (!this.cv) {
        this.cv = document.createElement('canvas');
        this.cv.style.imageRendering = 'pixelated';
        this.cv.style.display = 'block';
        this.appendChild(this.cv);
      }
      this.style.display = 'inline-block';
      this.style.lineHeight = '0';
      this.render();
    }
    attributeChangedCallback() {
      if (this.cv) this.render();
    }
    render() {
      const size = +(this.getAttribute('size') || 24),
        s = Math.max(1, Math.round(size / 12)),
        dpr = 2;
      const a = this.getAttribute('active'),
        active = a !== null && a !== 'false';
      this.cv.width = 12 * s * dpr;
      this.cv.height = 12 * s * dpr;
      this.cv.style.width = 12 * s + 'px';
      this.cv.style.height = 12 * s + 'px';
      const ctx = this.cv.getContext('2d');
      ctx.clearRect(0, 0, this.cv.width, this.cv.height);
      drawIcon(ctx, this.getAttribute('name'), s * dpr, active, this.getAttribute('color') || '#8E929B');
    }
  }
  if (!customElements.get('loafy-icon')) customElements.define('loafy-icon', LoafyIcon);
  class LoafyLcd extends HTMLElement {
    static get observedAttributes() {
      return ['body', 'coat', 'lcd', 'streak'];
    }
    connectedCallback() {
      if (this.cv) return;
      this.sim = new Sim();
      this.cv = document.createElement('canvas');
      this.cv.width = this.cv.height = N * CELL;
      Object.assign(this.cv.style, {
        width: '100%',
        height: '100%',
        display: 'block'
      });
      Object.assign(this.style, {
        display: 'block',
        width: '100%',
        height: '100%'
      });
      this.appendChild(this.cv);
      const tick = now => {
        this.raf = requestAnimationFrame(tick);
        if (now - (this.last || 0) < 80) return;
        this.last = now;
        this.draw(now);
      };
      this.raf = requestAnimationFrame(tick);
    }
    disconnectedCallback() {
      cancelAnimationFrame(this.raf);
      this.cv && this.cv.remove();
      this.cv = null;
    }
    draw(now) {
      this.sim.draw(this.cv.getContext('2d'), now, {
        body: this.getAttribute('body'),
        coat: this.getAttribute('coat'),
        lcd: this.getAttribute('lcd'),
        streak: this.getAttribute('streak'),
        scene: this.getAttribute('scene'),
        lcdbg: this.getAttribute('lcdbg')
      });
    }
    play(a) {
      this.sim.play(a);
    }
    button(i) {
      const r = this.sim.button(i);
      if (r === 'feed') this.dispatchEvent(new CustomEvent('loafy:device-feed', {
        bubbles: true
      }));
      return r;
    }
  }
  if (!customElements.get('loafy-lcd')) customElements.define('loafy-lcd', LoafyLcd);

  // ---------- logo (from uploads/Loafy.svg, 46x22 units) ----------
  const LOGO = [[0, 0, 2, 2, 0], [2, 2, 2, 10, 0], [2, 12, 2, 2, 0], [4, 14, 2, 2, 0], [6, 14, 2, 2, 0], [8, 10, 2, 2, 0], [8, 8, 2, 2, 0], [20, 12, 2, 2, 0], [22, 14, 2, 2, 0], [26, 0, 2, 2, 0], [28, 2, 2, 2, 0], [24, 2, 2, 2, 0], [24, 4, 2, 4, 0], [24, 8, 2, 4, 0], [28, 8, 2, 6, 0], [30, 14, 2, 2, 0], [32, 14, 2, 2, 0], [32, 10, 2, 4, 0], [32, 16, 2, 4, 0], [30, 20, 2, 2, 0], [28, 18, 2, 2, 0], [32, 8, 2, 2, 0], [38, 7, 2, 2, 1], [39, 10, 4, 4, 1], [42, 7, 2, 2, 1], [36, 10, 2, 2, 1], [44, 10, 2, 2, 1], [26, 6, 2, 2, 0], [24, 12, 2, 2, 0], [24, 14, 2, 2, 0], [10, 6, 2, 2, 0], [18, 10, 2, 2, 0], [18, 14, 2, 2, 0], [10, 14, 2, 2, 0], [8, 12, 2, 2, 0], [12, 8, 2, 2, 0], [20, 8, 2, 2, 0], [20, 6, 2, 2, 0], [18, 4, 2, 2, 0], [16, 6, 2, 2, 0], [20, 10, 2, 2, 0], [16, 12, 2, 2, 0], [12, 10, 2, 4, 0], [14, 14, 2, 2, 0]];
  class LoafyLogo extends HTMLElement {
    static get observedAttributes() {
      return ['scale', 'replay', 'ink'];
    }
    connectedCallback() {
      if (!this.cv) {
        this.cv = document.createElement('canvas');
        this.cv.style.display = 'block';
        this.appendChild(this.cv);
      }
      this.style.display = 'inline-block';
      this.style.lineHeight = '0';
      this.start();
    }
    disconnectedCallback() {
      cancelAnimationFrame(this.raf);
    }
    attributeChangedCallback() {
      if (this.cv) this.start();
    }
    start() {
      const s = +(this.getAttribute('scale') || 4),
        dpr = 2,
        W = 46 * s,
        H = 22 * s;
      this.cv.width = W * dpr;
      this.cv.height = H * dpr;
      this.cv.style.width = W + 'px';
      this.cv.style.height = H + 'px';
      const blocks = [];
      LOGO.forEach(([x, y, w, h, c]) => {
        if (c) return blocks.push({
          x,
          y,
          w,
          h,
          c
        });
        for (let yy = y; yy < y + h; yy += 2) for (let xx = x; xx < x + w; xx += 2) blocks.push({
          x: xx,
          y: yy,
          w: 2,
          h: 2,
          c
        });
      });
      let seed = 11;
      const rnd = () => {
        seed = seed * 16807 % 2147483647;
        return seed / 2147483647;
      };
      blocks.forEach(b => {
        b.t = b.c ? 1000 + (b.y < 9 ? 160 : 0) + Math.abs(b.x - 40) * 14 : b.x * 15 + rnd() * 240;
        b.d = b.c ? 380 : 260;
      });
      const still = this.hasAttribute('still'),
        t0 = performance.now(),
        ctx = this.cv.getContext('2d');
      const back = p => {
        const c1 = 1.9,
          c3 = c1 + 1;
        return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2);
      };
      cancelAnimationFrame(this.raf);
      const frame = now => {
        const t = still ? 1e9 : now - t0;
        let done = true;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, W, H);
        blocks.forEach(b => {
          const p = Math.max(0, Math.min(1, (t - b.t) / b.d));
          if (p < 1) done = false;
          if (p <= 0) return;
          const k = p >= 1 ? 1 : back(p),
            cx = (b.x + b.w / 2) * s,
            cy = (b.y + b.h / 2) * s,
            ww = b.w * s * k,
            hh = b.h * s * k;
          ctx.globalAlpha = Math.min(1, p * 2.5);
          ctx.fillStyle = b.c ? '#FF7474' : this.getAttribute('ink') || '#111114';
          ctx.fillRect(cx - ww / 2, cy - hh / 2 - (1 - p) * s * 2, ww, hh);
        });
        ctx.globalAlpha = 1;
        if (!done) this.raf = requestAnimationFrame(frame);else if (!still) this.dispatchEvent(new CustomEvent('loafy:logo-done', {
          bubbles: true
        }));
      };
      this.raf = requestAnimationFrame(frame);
    }
  }
  if (!customElements.get('loafy-logo')) customElements.define('loafy-logo', LoafyLogo);
  window.LoafySprites.LOGO = LOGO;

  // ---------- paw-print screen transition ----------
  class LoafyPaws extends HTMLElement {
    static get observedAttributes() {
      return ['run'];
    }
    connectedCallback() {
      Object.assign(this.style, {
        display: 'block',
        position: 'absolute',
        inset: '0',
        pointerEvents: 'none',
        overflow: 'hidden'
      });
      if (this.parentElement) this.parentElement.style.pointerEvents = 'none';
      this._ready = true;
    }
    attributeChangedCallback(n, o, v) {
      if (this._ready && v && v !== '0' && v !== o) this.play();
    }
    img() {
      if (LoafyPaws._img) return LoafyPaws._img;
      const c = document.createElement('canvas');
      c.width = c.height = 48;
      drawIcon(c.getContext('2d'), 'pawpink', 4, true, '#000');
      return LoafyPaws._img = c.toDataURL();
    }
    play() {
      const W = this.clientWidth || 400,
        H = this.clientHeight || 800,
        src = this.img();
      const layer = document.createElement('div');
      Object.assign(layer.style, {
        position: 'absolute',
        inset: '0'
      });
      this.appendChild(layer);
      const wash = document.createElement('div');
      Object.assign(wash.style, {
        position: 'absolute',
        inset: '0',
        background: '#FFF6F4',
        opacity: '0'
      });
      layer.appendChild(wash);
      wash.animate([{
        opacity: 0
      }, {
        opacity: 0.96,
        offset: 0.42
      }, {
        opacity: 0.96,
        offset: 0.56
      }, {
        opacity: 0
      }], {
        duration: 1300,
        easing: 'ease-in-out',
        fill: 'forwards'
      });
      const G = 56,
        sz = 40,
        cols = Math.ceil(W / G) + 1,
        rows = Math.ceil(H / G) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * G + (r % 2 ? G / 2 : 0) - G / 2 + (Math.random() - 0.5) * 14,
            y = H - r * G - G / 2 + (Math.random() - 0.5) * 14;
          const rot = (Math.random() - 0.5) * 36,
            op = 0.38 + Math.random() * 0.3;
          const el = document.createElement('img');
          el.src = src;
          Object.assign(el.style, {
            position: 'absolute',
            left: x - sz / 2 + 'px',
            top: y - sz / 2 + 'px',
            width: sz + 'px',
            height: sz + 'px',
            imageRendering: 'pixelated',
            opacity: '0'
          });
          layer.appendChild(el);
          el.animate([{
            opacity: 0,
            transform: 'translateY(24px) rotate(' + rot + 'deg) scale(0.3)'
          }, {
            opacity: op,
            transform: 'translateY(-2px) rotate(' + rot + 'deg) scale(1.12)',
            offset: 0.6
          }, {
            opacity: op,
            transform: 'translateY(0) rotate(' + rot + 'deg) scale(1)'
          }], {
            duration: 320,
            delay: r * 42 + Math.random() * 90,
            easing: 'cubic-bezier(.34,1.56,.64,1)',
            fill: 'forwards'
          });
        }
      }
      const fade = layer.animate([{
        opacity: 1
      }, {
        opacity: 1,
        offset: 0.62
      }, {
        opacity: 0
      }], {
        duration: 1600,
        easing: 'ease-out',
        fill: 'forwards'
      });
      fade.onfinish = () => layer.remove();
    }
  }
  if (!customElements.get('loafy-paws')) customElements.define('loafy-paws', LoafyPaws);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/loafy-sprites.js", error: String((e && e.message) || e) }); }

// assets/loafy-tama.js
try { (() => {
(function () {
  const THREE_URL = 'https://unpkg.com/three@0.160.0/build/three.module.js';
  const H = 1.3,
    D = 0.56,
    PX = 5,
    PY = 2.25;
  const Rf = yn => {
    const a = Math.min(1, Math.abs(yn));
    return Math.pow(Math.max(0, 1 - Math.pow(a, PY)), 1 / PY) * (1 - 0.12 * yn);
  };
  const zSurf = (x, y) => {
    const R = Rf(y / H);
    if (R <= Math.abs(x)) return 0;
    return D * R * Math.pow(1 - Math.pow(Math.abs(x) / R, PX), 1 / PX);
  };
  class LoafyTama extends HTMLElement {
    static get observedAttributes() {
      return ['color', 'body', 'coat', 'lcd', 'streak', 'fit-scale', 'fitscale', 'strap', 'pattern', 'form', 'scene', 'lcdbg'];
    }
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      Object.assign(this.style, {
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '100%',
        touchAction: 'none',
        userSelect: 'none'
      });
      this.lcd = document.createElement('canvas');
      this.lcd.width = this.lcd.height = 384;
      const go = () => {
        if (!this.isConnected) return;
        if (!window.LoafySprites) return setTimeout(go, 50);
        this.sim = this.sim || new window.LoafySprites.Sim();
        import(THREE_URL).then(T => this.isConnected && !this.renderer && this.build(T));
      };
      go();
    }
    disconnectedCallback() {
      clearTimeout(this._bt);
      this.bubble && this.bubble.remove();
      this.bubble = null;
      cancelAnimationFrame(this.raf);
      this.ro && this.ro.disconnect();
      if (this.renderer) {
        this.renderer.dispose();
        this.renderer.forceContextLoss();
        this.renderer.domElement.remove();
        this.renderer = null;
      }
      this._init = false;
    }
    attributeChangedCallback(n, o, v) {
      if (n === 'color' && this.shell) this.setShell(v);
      if (n === 'strap' && this.chain) this.setStrap(v);
      if (n === 'form' && this.ears) this.setForm(v);
      if (n === 'pattern' && this.shell) this.setShell(this.getAttribute('color'));
      if ((n === 'fit-scale' || n === 'fitscale') && this._fit && this.cam) {
        this._fit(this.cam.aspect);
        this.cam.updateProjectionMatrix();
      }
      this._dirty = true;
    }
    patternTex(base, kind) {
      const T = this.T,
        cv = document.createElement('canvas');
      cv.width = cv.height = 1024;
      const x = cv.getContext('2d');
      x.fillStyle = '#' + base.getHexString(T.SRGBColorSpace);
      x.fillRect(0, 0, 1024, 1024);
      const hsl = {};
      base.getHSL(hsl);
      const pc = new T.Color().setHSL(hsl.h, Math.min(1, hsl.s * 1.1), hsl.l > 0.55 ? hsl.l - 0.2 : Math.min(0.95, hsl.l + 0.28));
      x.fillStyle = '#' + pc.getHexString(T.SRGBColorSpace);
      const st = 112;
      if (kind === 'dots') for (let j = 0; j < 11; j++) for (let i = 0; i < 11; i++) {
        x.beginPath();
        x.arc(i * st + j % 2 * st / 2, j * st, 20, 0, 7);
        x.fill();
      }
      if (kind === 'hearts') for (let j = 0; j < 11; j++) for (let i = 0; i < 11; i++) {
        const cx = i * st + j % 2 * st / 2,
          cy = j * st,
          s = 30;
        x.beginPath();
        x.moveTo(cx, cy + s * 0.55);
        x.bezierCurveTo(cx - s * 1.2, cy - s * 0.2, cx - s * 0.55, cy - s * 1.05, cx, cy - s * 0.4);
        x.bezierCurveTo(cx + s * 0.55, cy - s * 1.05, cx + s * 1.2, cy - s * 0.2, cx, cy + s * 0.55);
        x.fill();
      }
      if (kind === 'stripes') for (let i = 0; i < 18; i++) x.fillRect(0, i * 60, 1024, 24);
      if (kind === 'stars') for (let j = 0; j < 9; j++) for (let i = 0; i < 9; i++) {
        const cx = i * 128 + j % 2 * 64,
          cy = j * 128;
        x.beginPath();
        for (let k = 0; k < 10; k++) {
          const rr2 = k % 2 ? 11 : 26,
            a = -Math.PI / 2 + k * Math.PI / 5;
          x.lineTo(cx + Math.cos(a) * rr2, cy + Math.sin(a) * rr2);
        }
        x.closePath();
        x.fill();
      }
      if (kind === 'check') for (let j = 0; j < 16; j++) for (let i = 0; i < 16; i++) if ((i + j) % 2) x.fillRect(i * 64, j * 64, 64, 64);
      if (kind === 'paws') for (let j = 0; j < 9; j++) for (let i = 0; i < 9; i++) {
        const cx = i * 128 + j % 2 * 64,
          cy = j * 128;
        x.beginPath();
        x.ellipse(cx, cy + 8, 17, 14, 0, 0, 7);
        x.fill();
        [[-15, -13], [0, -19], [15, -13]].forEach(([dx, dy]) => {
          x.beginPath();
          x.arc(cx + dx, cy + dy, 6.5, 0, 7);
          x.fill();
        });
      }
      if (kind === 'waves') {
        x.strokeStyle = x.fillStyle;
        x.lineWidth = 14;
        for (let j = 0; j < 12; j++) {
          x.beginPath();
          for (let px = 0; px <= 1024; px += 16) {
            const py = j * 90 + Math.sin(px / 1024 * Math.PI * 8) * 18;
            px ? x.lineTo(px, py) : x.moveTo(px, py);
          }
          x.stroke();
        }
      }
      if (kind === 'flowers') for (let j = 0; j < 7; j++) for (let i = 0; i < 7; i++) {
        const cx = i * 160 + j % 2 * 80,
          cy = j * 160;
        for (let k = 0; k < 5; k++) {
          const a = k * Math.PI * 2 / 5;
          x.beginPath();
          x.arc(cx + Math.cos(a) * 17, cy + Math.sin(a) * 17, 12, 0, 7);
          x.fill();
        }
        x.fillStyle = '#' + base.getHexString(T.SRGBColorSpace);
        x.beginPath();
        x.arc(cx, cy, 8, 0, 7);
        x.fill();
        x.fillStyle = '#' + pc.getHexString(T.SRGBColorSpace);
      }
      const tex = new T.CanvasTexture(cv);
      tex.colorSpace = T.SRGBColorSpace;
      tex.anisotropy = 4;
      tex.wrapS = tex.wrapT = T.RepeatWrapping;
      return tex;
    }
    setForm(v) {
      this.ears.visible = v === 'cat' || v === 'cattail';
      if (this.tail) this.tail.visible = v === 'cattail' || v === 'tail';
      this._dirty = true;
    }
    snapshot() {
      if (!this.renderer || !this.scene) return null;
      this.renderer.render(this.scene, this.cam);
      return this.renderer.domElement.toDataURL('image/png');
    }
    setStrap(v) {
      const on = !!v && v !== 'none';
      this.chain.visible = on;
      this.loop.visible = on;
      if (this.root) this.root.position.x = on ? -0.22 : 0;
      if (on) this.metal.color.setHex({
        silver: 0xd6d6d8,
        gold: 0xe3c16f,
        rose: 0xe8b4a0
      }[v] || 0xd6d6d8);
      this._dirty = true;
    }
    setShell(v) {
      const c = new this.T.Color(v || '#C9CCD3');
      const pat = this.getAttribute('pattern');
      if (this._ptex) {
        this._ptex.dispose();
        this._ptex = null;
      }
      if (pat && pat !== 'none') {
        this._ptex = this.patternTex(c, pat);
        this.shell.map = this._ptex;
        this.shell.color.set(0xffffff);
      } else {
        this.shell.map = null;
        this.shell.color.copy(c);
      }
      this.shell.needsUpdate = true;
      this._dirty = true;
      const hsl = {};
      c.getHSL(hsl);
      this.ringMat.color.setHSL(hsl.h, hsl.s * 0.8, Math.max(0, hsl.l - 0.18));
    }
    play(a) {
      this.sim && this.sim.play(a);
      this._dirty = true;
      if (a === 'eat') this.say(this.pick(['냠냠, 맛있다', '오늘도 와줬구나', '배부르다…']));
    }
    pick(a) {
      return a[Math.floor(Math.random() * a.length)];
    }
    say(text) {
      if (this.hasAttribute('still')) return;
      if (!this.bubble) {
        const b = this.bubble = document.createElement('div');
        Object.assign(b.style, {
          position: 'absolute',
          left: '50%',
          top: '2%',
          transform: 'translate(-50%, 6px) scale(0.92)',
          opacity: '0',
          pointerEvents: 'none',
          zIndex: '2',
          padding: '10px 18px',
          borderRadius: '999px',
          background: '#FFFFFF',
          color: '#191F28',
          fontSize: '15px',
          fontWeight: '600',
          whiteSpace: 'nowrap',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          transition: 'opacity 180ms cubic-bezier(0.32,0.72,0,1), transform 280ms cubic-bezier(0.32,0.72,0,1)',
          fontFamily: 'inherit'
        });
        this.bubbleText = document.createElement('span');
        this.bubbleText.style.position = 'relative';
        b.appendChild(this.bubbleText);
        this.appendChild(b);
      }
      this.bubbleText.textContent = text;
      const b = this.bubble;
      b.style.opacity = '1';
      b.style.transform = 'translate(-50%, 0) scale(1)';
      clearTimeout(this._bt);
      this._bt = setTimeout(() => {
        b.style.opacity = '0';
        b.style.transform = 'translate(-50%, 6px) scale(0.92)';
      }, 2200);
    }
    build(T) {
      this.T = T;
      const w = this.clientWidth || 400,
        h = this.clientHeight || 400;
      const r = this.renderer = new T.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      r.setPixelRatio(Math.min(2, devicePixelRatio));
      r.setSize(w, h);
      r.outputColorSpace = T.SRGBColorSpace;
      r.toneMapping = T.ACESFilmicToneMapping;
      r.toneMappingExposure = 1.05;
      Object.assign(r.domElement.style, {
        width: '100%',
        height: '100%',
        display: 'block',
        cursor: 'grab'
      });
      this.appendChild(r.domElement);
      const scene = this.scene = new T.Scene();
      const cam = this.cam = new T.PerspectiveCamera(30, w / h, 0.1, 100);
      const fit = asp => {
        const t = Math.tan(15 * Math.PI / 180);
        const k = +(this.getAttribute('fitscale') || this.getAttribute('fit-scale') || 1);
        cam.position.set(0, -0.16, Math.max(1.62 / t, 1.5 / (t * asp)) / k);
      };
      fit(w / h);
      this._fit = fit;
      const es = new T.Scene();
      es.add(new T.Mesh(new T.BoxGeometry(20, 20, 20), new T.MeshBasicMaterial({
        color: 0x55575d,
        side: T.BackSide
      })));
      const panel = (x, y, z, sx, sy, i) => {
        const m = new T.Mesh(new T.PlaneGeometry(sx, sy), new T.MeshBasicMaterial({
          color: new T.Color(i, i, i),
          side: T.DoubleSide
        }));
        m.position.set(x, y, z);
        m.lookAt(0, 0, 0);
        es.add(m);
      };
      panel(-5, 6, 6, 7, 4, 5);
      panel(6, 2, 5, 3, 7, 2.6);
      panel(0, -7, 3, 9, 2, 1.2);
      panel(0, 4, -7, 8, 4, 1.8);
      const pm = new T.PMREMGenerator(r);
      scene.environment = pm.fromScene(es, 0.04).texture;
      const dl = new T.DirectionalLight(0xffffff, 1.1);
      dl.position.set(-3, 4, 5);
      scene.add(dl);
      scene.add(new T.AmbientLight(0xffffff, 0.25));
      const root = this.root = new T.Group();
      root.position.x = -0.22;
      scene.add(root);
      const egg = this.egg = new T.Group();
      root.add(egg);

      // shell (superellipse egg)
      const U = 120,
        V = 90,
        pos = [],
        idx = [];
      for (let j = 0; j <= V; j++) {
        const yn = -Math.cos(Math.PI * j / V),
          R = Rf(yn);
        for (let i = 0; i <= U; i++) {
          const th = -Math.PI / 2 + 2 * Math.PI * i / U,
            c = Math.cos(th),
            s = Math.sin(th);
          pos.push(R * Math.sign(c) * Math.pow(Math.abs(c), 2 / PX), yn * H, D * R * Math.sign(s) * Math.pow(Math.abs(s), 2 / PX));
        }
      }
      for (let j = 0; j < V; j++) for (let i = 0; i < U; i++) {
        const a = j * (U + 1) + i,
          b = a + U + 1;
        idx.push(a, b, a + 1, b, b + 1, a + 1);
      }
      const uv = [];
      for (let q = 0; q < pos.length; q += 3) uv.push(0.5 + pos[q] / 2.6, 0.5 + pos[q + 1] / 2.6);
      const g = new T.BufferGeometry();
      g.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
      g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
      g.setIndex(idx);
      g.computeVertexNormals();
      this.shell = new T.MeshPhysicalMaterial({
        color: 0xc9ccd3,
        roughness: 0.32,
        metalness: 0.15,
        clearcoat: 0.8,
        clearcoatRoughness: 0.18
      });
      this.shell.onBeforeCompile = sh => {
        sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vOP; varying vec3 vON;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvOP = position; vON = normal;');
        sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vOP; varying vec3 vON;').replace('#include <map_fragment>', '#ifdef USE_MAP\n vec3 bw = pow(abs(normalize(vON)), vec3(4.0)); bw /= (bw.x + bw.y + bw.z);\n vec4 tc = texture2D(map, vOP.zy * 0.385 + 0.5) * bw.x + texture2D(map, vOP.xz * 0.385 + 0.5) * bw.y + texture2D(map, vOP.xy * 0.385 + 0.5) * bw.z;\n diffuseColor *= tc;\n #endif');
      };
      this.shell.customProgramCacheKey = () => 'loafy-tri';
      this.ringMat = new T.MeshStandardMaterial({
        color: 0x8a8d94,
        roughness: 0.5
      });
      egg.add(new T.Mesh(g, this.shell));
      // cat ears (rounded tips, recessed pink inner)
      const ears = this.ears = new T.Group();
      egg.add(ears);
      const rtri = (w, h, r, cy, path) => {
        const P = [[0, h / 2 + cy], [-w / 2, -h / 2 + cy], [w / 2, -h / 2 + cy]],
          sh = path || new T.Shape();
        P.forEach((v, i) => {
          const pv = P[(i + 2) % 3],
            nx = P[(i + 1) % 3],
            d1 = new T.Vector2(pv[0] - v[0], pv[1] - v[1]).normalize(),
            d2 = new T.Vector2(nx[0] - v[0], nx[1] - v[1]).normalize();
          const a = [v[0] + d1.x * r, v[1] + d1.y * r],
            b = [v[0] + d2.x * r, v[1] + d2.y * r];
          if (i === 0) sh.moveTo(a[0], a[1]);else sh.lineTo(a[0], a[1]);
          sh.quadraticCurveTo(v[0], v[1], b[0], b[1]);
        });
        sh.closePath();
        return sh;
      };
      const outer = rtri(0.72, 0.64, 0.2, 0);
      outer.holes.push(rtri(0.46, 0.4, 0.12, -0.06, new T.Path()));
      const earG = new T.ExtrudeGeometry(outer, {
        depth: 0.2,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 6,
        curveSegments: 20
      });
      earG.translate(0, 0, -0.1);
      const inG = new T.ExtrudeGeometry(rtri(0.5, 0.44, 0.13, -0.06), {
        depth: 0.04,
        bevelEnabled: false,
        curveSegments: 20
      });
      const inMat = new T.MeshStandardMaterial({
        color: 0xf4b6bf,
        roughness: 0.6
      });
      [-1, 1].forEach(sd => {
        const g2 = new T.Group();
        g2.position.set(sd * 0.5, 1.22, 0);
        g2.rotation.z = -sd * 0.36;
        g2.add(new T.Mesh(earG, this.shell));
        const i2 = new T.Mesh(inG, inMat);
        i2.position.set(0, 0.05, 0.12);
        g2.add(i2);
        ears.add(g2);
      });
      ears.visible = ['cat', 'cattail'].includes(this.getAttribute('form'));
      // tail
      const tail = this.tail = new T.Group();
      egg.add(tail);
      const tcurve = new T.CatmullRomCurve3([new T.Vector3(0.25, -0.8, -0.2), new T.Vector3(0.75, -1.0, -0.42), new T.Vector3(1.1, -0.76, -0.5), new T.Vector3(1.04, -0.42, -0.5), new T.Vector3(1.06, -0.08, -0.5), new T.Vector3(1.32, 0.12, -0.46)]);
      tail.add(new T.Mesh(new T.TubeGeometry(tcurve, 64, 0.085, 14, false), this.shell));
      const ttip = new T.Mesh(new T.SphereGeometry(0.085, 20, 16), this.shell);
      ttip.position.copy(tcurve.getPoint(1));
      tail.add(ttip);
      tail.visible = ['cattail', 'tail'].includes(this.getAttribute('form'));
      // seam line around the side
      const seam = new T.Mesh(new T.TorusGeometry(1, 0.008, 6, 160), this.ringMat);
      seam.rotation.x = Math.PI / 2;
      seam.scale.set(Rf(-0.02 / H) * 1.002, D * Rf(-0.02 / H) * 1.01, 1);
      seam.position.y = -0.02;
      seam.visible = false;
      const rr = (ctx, x, y, w2, h2, rad) => {
        ctx.beginPath();
        ctx.roundRect(x, y, w2, h2, rad);
        ctx.fill();
      };
      const alphaTex = (w2, h2, rad) => {
        const c = document.createElement('canvas');
        c.width = 256;
        c.height = Math.round(256 * h2 / w2);
        const x = c.getContext('2d');
        x.fillStyle = '#000';
        x.fillRect(0, 0, c.width, c.height);
        x.fillStyle = '#fff';
        rr(x, 2, 2, c.width - 4, c.height - 4, rad * c.width / w2);
        return new T.CanvasTexture(c);
      };
      const conform = (w2, h2, cx, cy, off, mat) => {
        const pg = new T.PlaneGeometry(w2, h2, 40, 40),
          p = pg.attributes.position;
        for (let i = 0; i < p.count; i++) p.setZ(i, zSurf(p.getX(i) + cx, p.getY(i) + cy) + off);
        pg.computeVertexNormals();
        const m = new T.Mesh(pg, mat);
        m.position.set(cx, cy, 0);
        egg.add(m);
        return m;
      };
      const SY = 0.1;
      conform(1.5, 1.38, 0, SY, 0.006, new T.MeshPhysicalMaterial({
        color: 0x0c0c10,
        roughness: 0.2,
        clearcoat: 1,
        alphaMap: alphaTex(1.5, 1.38, 0.26),
        alphaTest: 0.5
      }));
      conform(1.56, 1.44, 0, SY, 0.003, new T.MeshStandardMaterial({
        color: 0x000000,
        roughness: 0.6,
        transparent: true,
        opacity: 0.25,
        alphaMap: alphaTex(1.56, 1.44, 0.3)
      }));
      this.tex = new T.CanvasTexture(this.lcd);
      this.tex.magFilter = T.LinearFilter;
      this.tex.colorSpace = T.SRGBColorSpace;
      this.lcdMesh = conform(1.2, 1.2, 0, SY, 0.012, new T.MeshBasicMaterial({
        map: this.tex,
        alphaMap: alphaTex(1.2, 1.2, 0.08),
        alphaTest: 0.5,
        toneMapped: false
      }));
      conform(1.24, 1.24, 0, SY, 0.02, new T.MeshPhysicalMaterial({
        color: 0xffffff,
        roughness: 0.04,
        transparent: true,
        opacity: 0.12,
        clearcoat: 1,
        alphaMap: alphaTex(1.24, 1.24, 0.1)
      }));

      // logo
      const lc = document.createElement('canvas');
      lc.width = 512;
      lc.height = 128;
      const lx = lc.getContext('2d');
      {
        const LG = window.LoafySprites && window.LoafySprites.LOGO || [],
          ls = 5.4,
          ox = (512 - 46 * ls) / 2,
          oy = (128 - 22 * ls) / 2;
        LG.forEach(([x, y, w, h, c]) => {
          lx.fillStyle = c ? '#FF7474' : '#26262c';
          lx.fillRect(ox + x * ls, oy + y * ls, w * ls + 0.5, h * ls + 0.5);
        });
      }
      const lt = new T.CanvasTexture(lc);
      lt.colorSpace = T.SRGBColorSpace;
      conform(0.56, 0.14, 0, 1.0, 0.004, new T.MeshStandardMaterial({
        map: lt,
        transparent: true,
        roughness: 0.5
      }));
      // back side: battery cover, logo, paw
      const conformBack = (w2, h2, cx, cy, off, mat) => {
        const pg = new T.PlaneGeometry(w2, h2, 40, 40),
          p = pg.attributes.position;
        for (let i = 0; i < p.count; i++) p.setZ(i, -(zSurf(p.getX(i) + cx, p.getY(i) + cy) + off));
        pg.computeVertexNormals();
        const nA = pg.attributes.normal;
        for (let i = 0; i < nA.count; i++) nA.setXYZ(i, -nA.getX(i), -nA.getY(i), -nA.getZ(i));
        const m = new T.Mesh(pg, mat);
        m.position.set(cx, cy, 0);
        egg.add(m);
        return m;
      };
      conformBack(0.96, 0.62, 0, 0.12, 0.004, new T.MeshStandardMaterial({
        color: 0x000000,
        roughness: 0.7,
        transparent: true,
        opacity: 0.13,
        alphaMap: alphaTex(0.96, 0.62, 0.16),
        side: T.DoubleSide
      }));
      const lt2 = lt.clone();
      lt2.wrapS = T.RepeatWrapping;
      lt2.repeat.x = -1;
      lt2.offset.x = 1;
      lt2.needsUpdate = true;
      conformBack(0.56, 0.14, 0, 0.3, 0.008, new T.MeshStandardMaterial({
        map: lt2,
        transparent: true,
        roughness: 0.5,
        side: T.DoubleSide
      }));
      const pc2 = document.createElement('canvas');
      pc2.width = pc2.height = 120;
      if (window.LoafySprites && window.LoafySprites.drawIcon) window.LoafySprites.drawIcon(pc2.getContext('2d'), 'pawpink', 10, true, '#000');
      const pt2 = new T.CanvasTexture(pc2);
      pt2.colorSpace = T.SRGBColorSpace;
      pt2.wrapS = T.RepeatWrapping;
      pt2.repeat.x = -1;
      pt2.offset.x = 1;
      pt2.magFilter = T.NearestFilter;
      pt2.minFilter = T.NearestFilter;
      pt2.generateMipmaps = false;
      conformBack(0.3, 0.3, 0, -0.04, 0.008, new T.MeshStandardMaterial({
        map: pt2,
        transparent: true,
        roughness: 0.55,
        side: T.DoubleSide
      }));

      // buttons
      const btnMat = new T.MeshPhysicalMaterial({
        color: 0x1b1b20,
        roughness: 0.3,
        clearcoat: 1,
        clearcoatRoughness: 0.1
      });
      const holeMat = new T.MeshStandardMaterial({
        color: 0x050506,
        roughness: 0.9
      });
      this.buttons = [];
      [[-0.46, -0.84], [0, -0.96], [0.46, -0.84]].forEach(([x, y], i) => {
        const z = zSurf(x, y),
          e = 0.01;
        const n = new T.Vector3(-(zSurf(x + e, y) - zSurf(x - e, y)) / (2 * e), -(zSurf(x, y + e) - zSurf(x, y - e)) / (2 * e), 1).normalize();
        const holder = new T.Group();
        holder.position.set(x, y, z);
        holder.quaternion.setFromUnitVectors(new T.Vector3(0, 0, 1), n);
        egg.add(holder);
        const hole = new T.Mesh(new T.CylinderGeometry(0.125, 0.125, 0.04, 40), holeMat);
        hole.rotation.x = Math.PI / 2;
        hole.position.z = 0.0;
        holder.add(hole);
        const ring = new T.Mesh(new T.TorusGeometry(0.128, 0.016, 12, 48), this.ringMat);
        ring.position.z = 0.01;
        holder.add(ring);
        const b = new T.Mesh(new T.CylinderGeometry(0.1, 0.104, 0.1, 40), btnMat);
        b.rotation.x = Math.PI / 2;
        b.position.z = 0.03;
        b.userData.idx = i;
        holder.add(b);
        const cap = new T.Mesh(new T.SphereGeometry(0.1, 32, 12, 0, Math.PI * 2, 0, Math.PI / 2), btnMat);
        cap.scale.y = 0.25;
        cap.position.y = 0.05;
        b.add(cap);
        cap.userData.idx = i;
        this.buttons.push(b);
      });

      // keychain
      const metal = this.metal = new T.MeshStandardMaterial({
        color: 0xd6d6d8,
        metalness: 1,
        roughness: 0.22
      });
      const bail = new T.Vector3(0.5, 1.1, -0.02);
      const loop = this.loop = new T.Mesh(new T.TorusGeometry(0.075, 0.018, 12, 32), metal);
      loop.position.copy(bail);
      loop.rotation.y = Math.PI / 2.4;
      egg.add(loop);
      const chain = this.chain = new T.Group();
      chain.position.copy(bail);
      egg.add(chain);
      const ball = new T.SphereGeometry(0.026, 12, 10);
      const rx = 0.42,
        ry = 0.95,
        phi0 = 128 * Math.PI / 180,
        cxy = [-rx * Math.cos(phi0), -ry * Math.sin(phi0)];
      for (let k = 0; k < 76; k++) {
        const ph = phi0 - k / 76 * Math.PI * 2;
        const m = new T.Mesh(ball, metal);
        m.position.set(cxy[0] + rx * Math.cos(ph), cxy[1] + ry * Math.sin(ph), -0.04 * Math.sin(ph * 2));
        chain.add(m);
      }
      const clasp = new T.Mesh(new T.CylinderGeometry(0.034, 0.034, 0.14, 16), metal);
      clasp.position.set(cxy[0] + rx * Math.cos(phi0 - Math.PI * 1.1), cxy[1] + ry * Math.sin(phi0 - Math.PI * 1.1), 0);
      clasp.rotation.z = 0.6;
      chain.add(clasp);
      this.setStrap(this.getAttribute('strap'));

      // contact shadow
      const sc = document.createElement('canvas');
      sc.width = sc.height = 128;
      const sx = sc.getContext('2d');
      const gr = sx.createRadialGradient(64, 64, 4, 64, 64, 62);
      gr.addColorStop(0, 'rgba(0,0,0,0.28)');
      gr.addColorStop(0.5, 'rgba(0,0,0,0.1)');
      gr.addColorStop(1, 'rgba(0,0,0,0)');
      sx.fillStyle = gr;
      sx.fillRect(0, 0, 128, 128);
      const shadow = this.shadowM = new T.Mesh(new T.PlaneGeometry(2.4, 0.42), new T.MeshBasicMaterial({
        map: new T.CanvasTexture(sc),
        transparent: true,
        depthWrite: false
      }));
      shadow.position.set(0, -1.42, -0.1);
      shadow.rotation.x = -0.05;
      root.add(shadow);
      this.setShell(this.getAttribute('color'));

      // interaction
      const ray = new T.Raycaster(),
        v2 = new T.Vector2();
      const hit = e => {
        if (Math.cos(this.rot.y) < 0.25) return -1;
        const b = r.domElement.getBoundingClientRect();
        v2.set((e.clientX - b.left) / b.width * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1);
        ray.setFromCamera(v2, cam);
        const h2 = ray.intersectObjects(this.buttons.concat([this.lcdMesh]), true)[0];
        return h2 ? h2.object === this.lcdMesh ? 9 : h2.object.userData.idx : -1;
      };
      this.drag = null;
      this.rot = {
        x: 0,
        y: 0,
        tx: 0,
        ty: 0
      };
      this.press = [0, 0, 0];
      r.domElement.addEventListener('pointerdown', e => {
        const i = hit(e);
        if (this.hasAttribute('still')) return;
        if (i === 9) {
          this.dispatchEvent(new CustomEvent('loafy:open-lcd', {
            bubbles: true,
            composed: true
          }));
          return;
        }
        if (i >= 0) {
          this.press[i] = performance.now();
          this.button(i);
          return;
        }
        this.drag = {
          x: e.clientX,
          y: e.clientY,
          ry: this.rot.ty,
          rx: this.rot.tx
        };
        r.domElement.setPointerCapture(e.pointerId);
        r.domElement.style.cursor = 'grabbing';
      });
      r.domElement.addEventListener('pointermove', e => {
        if (this.drag) {
          this.rot.ty = this.drag.ry + (e.clientX - this.drag.x) * 0.012;
          this.rot.tx = Math.max(-0.6, Math.min(0.6, this.drag.rx + (e.clientY - this.drag.y) * 0.006));
        } else r.domElement.style.cursor = hit(e) >= 0 ? 'pointer' : 'grab';
      });
      const up = () => {
        if (this.drag) {
          const P2 = Math.PI * 2,
            a = (this.rot.ty % P2 + P2) % P2;
          this._dwell = a > 1.2 && a < P2 - 1.2 ? 4200 : 600;
          this._rel = performance.now();
        }
        this.drag = null;
        this.rot.tx = 0;
        r.domElement.style.cursor = 'grab';
      };
      r.domElement.addEventListener('pointerup', up);
      r.domElement.addEventListener('pointercancel', up);
      this.ro = new ResizeObserver(() => {
        const W2 = this.clientWidth,
          H2 = this.clientHeight;
        if (!W2 || !H2) return;
        r.setSize(W2, H2);
        cam.aspect = W2 / H2;
        this._fit(W2 / H2);
        cam.updateProjectionMatrix();
      });
      this.ro.observe(this);
      this.scene = scene;
      this.lastLcd = 0;
      this.t0 = performance.now();
      const tick = now => {
        this.raf = requestAnimationFrame(tick);
        const still = this.hasAttribute('still');
        if (still) this.drag = null;
        const t = still ? 0 : (now - this.t0) / 1000;
        if (!this.drag && this._rel && now - this._rel > this._dwell) {
          this.rot.ty = Math.round(this.rot.ty / (Math.PI * 2)) * Math.PI * 2;
          this._rel = 0;
        }
        const idle = !this.drag && Math.abs(this.rot.y - this.rot.ty) < 0.02;
        this.rot.y += (this.rot.ty + (this.drag ? 0 : Math.sin(t * 0.6) * 0.14) - this.rot.y) * 0.12;
        this.rot.x += (this.rot.tx + (this.drag ? 0 : Math.sin(t * 0.8) * 0.04) - this.rot.x) * 0.12;
        egg.rotation.set(still ? 0 : this.rot.x, still ? 0 : this.rot.y - 0.12, 0);
        egg.position.y = Math.sin(t * 1.3) * 0.035;
        shadow.scale.setScalar(1 - Math.sin(t * 1.3) * 0.04);
        this.chain.rotation.z = Math.sin(t * 1.3 + 0.6) * 0.05 - this.rot.y * 0.15;
        this.buttons.forEach((b, i) => {
          const p = Math.max(0, 1 - (now - this.press[i]) / 160);
          b.position.z = 0.03 - p * 0.035;
        });
        if (now - this.lastLcd > 80 || this._dirty) {
          this.drawLcd(now);
          this.lastLcd = now;
          this._dirty = false;
        }
        r.render(scene, cam);
      };
      this.raf = requestAnimationFrame(tick);
    }
    button(i) {
      this._dirty = true;
      const sim = this.sim,
        wasStatus = sim.mode === 'status';
      const r = sim.button(i);
      if (r === 'feed') this.dispatchEvent(new CustomEvent('loafy:device-feed', {
        bubbles: true
      }));
      const mood = sim.mood,
        streak = this.getAttribute('streak') || '0';
      const feel = mood >= 4 ? '기분 최고야' : mood >= 3 ? '기분 좋아' : mood >= 2 ? '그냥 그래' : '조금 심심해';
      let t;
      if (i === 0) t = sim.anim ? null : ['밥 먹을래?', '쓰다듬어 줄래?', '내 상태 볼래?'][sim.menu];else if (i === 1) t = r === 'feed' ? null : r === 'pet' ? this.pick(['골골골… ' + feel, '거기 좋아', '한 번 더 해줘']) : wasStatus ? '다시 놀자' : sim.mode === 'status' ? feel + ' · ' + streak + '일째 함께야' : null;else t = this.pick(['응, 알겠어', '나 여기 있을게']);
      if (t) this.say(t);
    }
    drawLcd(now) {
      if (!this.sim) return;
      this.sim.draw(this.lcd.getContext('2d'), now, {
        body: this.getAttribute('body'),
        coat: this.getAttribute('coat'),
        lcd: this.getAttribute('lcd'),
        streak: this.getAttribute('streak'),
        scene: this.getAttribute('scene'),
        lcdbg: this.getAttribute('lcdbg')
      });
      if (this.tex) this.tex.needsUpdate = true;
    }
  }
  if (!customElements.get('loafy-tama')) customElements.define('loafy-tama', LoafyTama);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/loafy-tama.js", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'blue',
  children,
  style
}) {
  const t = {
    blue: ['var(--blue-tint)', 'var(--blue-press)'],
    pink: ['var(--pink-tint)', '#D24E66'],
    red: ['#FFE8EA', 'var(--red-dark)'],
    gray: ['var(--surface-2)', 'var(--ink-600)'],
    yellow: ['var(--yellow-tint)', '#8A6A00']
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 8px',
      borderRadius: 'var(--r-pill)',
      background: t[0],
      color: t[1],
      fontSize: 11,
      fontWeight: 600,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'lg',
  full = true,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const h = {
    lg: 52,
    md: 44,
    sm: 36
  }[size];
  const v = {
    primary: {
      background: 'var(--black)',
      color: '#fff'
    },
    secondary: {
      background: 'var(--surface-2)',
      color: 'var(--ink-900)'
    },
    blue: {
      background: 'var(--blue)',
      color: '#fff'
    },
    danger: {
      background: 'var(--red)',
      color: '#fff'
    }
  }[variant];
  const [p, setP] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    onMouseLeave: () => setP(false),
    style: {
      height: h,
      width: full ? '100%' : 'auto',
      padding: '0 20px',
      border: 0,
      borderRadius: size === 'sm' ? 'var(--r-md)' : 'var(--r-lg)',
      fontSize: size === 'sm' ? 14 : 16,
      fontWeight: 600,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? .4 : 1,
      transform: p && !disabled ? 'scale(.98)' : 'none',
      transition: 'transform 120ms var(--ease)',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  error,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--ink-400)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: 52,
      padding: '0 16px',
      border: 0,
      outline: 0,
      borderRadius: 'var(--r-lg)',
      background: 'var(--surface-2)',
      fontSize: 16,
      color: 'var(--ink-900)',
      boxShadow: error ? 'inset 0 0 0 1.5px var(--red)' : 'none',
      ...style
    }
  }, rest)), error && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--red)',
      marginTop: 6
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/ListRow.jsx
try { (() => {
function ListRow({
  title,
  sub,
  right,
  chevron = true,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minHeight: 52,
      padding: '10px 20px',
      boxShadow: 'var(--hairline)',
      cursor: onClick ? 'pointer' : 'default',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--ink-900)'
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-400)',
      marginTop: 2
    }
  }, sub)), right && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--ink-500)'
    }
  }, right), chevron && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-300)',
      fontSize: 20
    }
  }, "\u203A"));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/core/TabBar.jsx
try { (() => {
function TabBar({
  tabs = [{
    id: 'home',
    label: '홈'
  }, {
    id: 'record',
    label: '기록'
  }, {
    id: 'shop',
    label: '샵'
  }, {
    id: 'my',
    label: '마이'
  }],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: '#fff',
      boxShadow: 'inset 0 1px 0 var(--line)',
      height: 60
    }
  }, tabs.map(t => {
    const a = t.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onChange && onChange(t.id),
      style: {
        flex: 1,
        minHeight: 44,
        border: 0,
        background: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        cursor: 'pointer',
        color: a ? 'var(--ink-900)' : 'var(--ink-300)',
        fontSize: 11,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("loafy-icon", {
      name: t.id,
      size: "24",
      active: a ? 'true' : undefined,
      color: a ? '#191F28' : '#B0B8C1'
    }), t.label);
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/core/Toast.jsx
try { (() => {
function Toast({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      padding: '12px 18px',
      borderRadius: 'var(--r-lg)',
      background: 'var(--ink-900)',
      color: '#fff',
      fontSize: 14,
      fontWeight: 500,
      boxShadow: 'var(--shadow-card)',
      animation: 'lfIn 340ms var(--ease)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toast.jsx", error: String((e && e.message) || e) }); }

// ui_kits/loafy-app/loafy-sprites.js
try { (() => {
(function () {
  const COATS = {
    cheese: {
      base: '#F49A3C',
      light: '#FFBE73',
      shade: '#D8742A',
      stripe: '#C45F1C',
      belly: '#FFE8C8',
      bellyShade: '#F2C995',
      line: '#5E2E14',
      ear: '#F6A2A6'
    },
    mackerel: {
      base: '#9AA2AC',
      light: '#C3C9D0',
      shade: '#7A838E',
      stripe: '#565F6B',
      belly: '#F0F2F4',
      bellyShade: '#D1D6DB',
      line: '#2A2E36',
      ear: '#F2A7B0'
    },
    tuxedo: {
      base: '#3C3D47',
      light: '#5A5C6A',
      shade: '#2A2B33',
      stripe: '#3C3D47',
      belly: '#FAFAF6',
      bellyShade: '#D9D9D2',
      line: '#141419',
      ear: '#E99AA4'
    },
    cow: {
      base: '#FAFAF7',
      light: '#FFFFFF',
      shade: '#DCDCD6',
      stripe: '#FAFAF7',
      belly: '#FFFFFF',
      bellyShade: '#E4E4DE',
      line: '#1E1E24',
      ear: '#F2A2AC',
      patch: '#2A2A31',
      patchShade: '#18181C',
      patchLight: '#40404A'
    },
    blue: {
      base: '#8F9BAE',
      light: '#AEB8C8',
      shade: '#727E92',
      stripe: '#8F9BAE',
      belly: '#A9B3C3',
      bellyShade: '#8C97AA',
      line: '#2A303C',
      ear: '#E6A3AE'
    },
    choco: {
      base: '#8A5A3C',
      light: '#A6744F',
      shade: '#6C442C',
      stripe: '#5A3622',
      belly: '#F3E6D8',
      bellyShade: '#DCC6AE',
      line: '#2E1B10',
      ear: '#E9A0A4'
    },
    cream: {
      base: '#EFD8B0',
      light: '#FAEBD0',
      shade: '#D8BA8A',
      stripe: '#CFA972',
      belly: '#FFF8EC',
      bellyShade: '#EEDDC2',
      line: '#6A4A2A',
      ear: '#F4A9AE'
    }
  };
  const COAT_NAMES = {
    cheese: '치즈',
    mackerel: '고등어',
    tuxedo: '턱시도',
    cow: '얼룩이',
    cream: '크림',
    blue: '러시안블루',
    choco: '초코'
  };
  const TYPES = {
    slim: {
      head: {
        x: 16,
        y: 10.6,
        rx: 7.2,
        ry: 6.3
      },
      chest: {
        x: 16,
        y: 20,
        rx: 4.7,
        ry: 6.4
      },
      haunch: {
        x: 16,
        y: 26,
        rx: 6.8,
        ry: 4.8
      },
      fp: {
        dx: 1.9,
        rx: 1.8,
        ry: 1.4
      },
      bp: {
        dx: 5.6,
        rx: 2,
        ry: 1.3
      },
      legs: 3.6
    },
    bulk: {
      head: {
        x: 16,
        y: 10.2,
        rx: 7.6,
        ry: 6.4
      },
      chest: {
        x: 16,
        y: 19.6,
        rx: 9.8,
        ry: 6.2
      },
      haunch: {
        x: 16,
        y: 25.4,
        rx: 9.2,
        ry: 5.4
      },
      arms: {
        dx: 8.4,
        y: 23.4,
        rx: 3.7,
        ry: 6.8
      },
      fp: {
        dx: 8.2,
        rx: 3,
        ry: 1.6
      },
      legs: 0
    },
    normal: {
      head: {
        x: 16,
        y: 10.6,
        rx: 8.4,
        ry: 6.9
      },
      chest: {
        x: 16,
        y: 19.8,
        rx: 6,
        ry: 6.2
      },
      haunch: {
        x: 16,
        y: 25.3,
        rx: 8.8,
        ry: 5.5
      },
      fp: {
        dx: 2.4,
        rx: 2.2,
        ry: 1.5
      },
      bp: {
        dx: 7.4,
        rx: 2.3,
        ry: 1.4
      },
      legs: 4.4
    },
    fit: {
      head: {
        x: 16,
        y: 10.4,
        rx: 7.5,
        ry: 6.3
      },
      chest: {
        x: 16,
        y: 19.8,
        rx: 7.4,
        ry: 6.3
      },
      haunch: {
        x: 16,
        y: 25.6,
        rx: 8.2,
        ry: 5.1
      },
      fp: {
        dx: 2.3,
        rx: 2.1,
        ry: 1.5
      },
      bp: {
        dx: 6.8,
        rx: 2.2,
        ry: 1.3
      },
      legs: 4
    },
    jjin: {
      head: {
        x: 16,
        y: 11.2,
        rx: 8.8,
        ry: 7
      },
      chest: {
        x: 16,
        y: 20.4,
        rx: 8.8,
        ry: 7
      },
      haunch: {
        x: 16,
        y: 25,
        rx: 11.4,
        ry: 5.9
      },
      fp: {
        dx: 3,
        rx: 2.4,
        ry: 1.5
      },
      bp: {
        dx: 9.2,
        rx: 2.4,
        ry: 1.4
      },
      legs: 5
    },
    loaf: {
      head: {
        x: 16,
        y: 12.4,
        rx: 9,
        ry: 7
      },
      chest: null,
      haunch: {
        x: 16,
        y: 22.6,
        rx: 13.6,
        ry: 8.3
      },
      fp: {
        dx: 3.4,
        rx: 2.4,
        ry: 1.3
      },
      bp: {
        dx: 10.2,
        rx: 2.3,
        ry: 1.2
      },
      legs: 0
    }
  };
  const BODY_NAMES = {
    slim: '날렵',
    bulk: '벌크',
    normal: '보통',
    fit: '탄탄',
    jjin: '찐빵',
    loaf: '식빵'
  };
  const W = 32,
    H = 32;
  const inE = (px, py, e) => ((px - e.x) / e.rx) ** 2 + ((py - e.y) / e.ry) ** 2 <= 1;
  const inSE = (px, py, e, p) => Math.abs((px - e.x) / e.rx) ** p + Math.abs((py - e.y) / e.ry) ** p <= 1;
  const sgn = (p1, p2, p3) => (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1]);
  const inT = (p, a, b, c) => {
    const d1 = sgn(p, a, b),
      d2 = sgn(p, b, c),
      d3 = sgn(p, c, a);
    return !((d1 < 0 || d2 < 0 || d3 < 0) && (d1 > 0 || d2 > 0 || d3 > 0));
  };
  const shrink = (t, k) => {
    const cx = (t[0][0] + t[1][0] + t[2][0]) / 3,
      cy = (t[0][1] + t[1][1] + t[2][1]) / 3;
    return t.map(p => [cx + (p[0] - cx) * k, cy + (p[1] - cy) * k + 0.5]);
  };
  const cache = {};
  function make(type, coat, expr, pose) {
    expr = expr || 'idle';
    pose = pose || 'sit';
    const key = [type, coat, expr, pose].join('|');
    if (cache[key]) return cache[key];
    const T = TYPES[type] || TYPES.normal,
      C = COATS[coat] || COATS.cheese;
    const h = T.head,
      ch = T.chest,
      hn = T.haunch;
    const ears = [-1, 1].map(s => [[h.x + s * (h.rx - 0.6), h.y - h.ry * 0.35], [h.x + s * (h.rx - 5.2), h.y - h.ry + 0.4], [h.x + s * (h.rx - 1.6), h.y - h.ry - 2.6]]);
    const earsIn = ears.map(t => shrink(t, 0.48));
    const tail = {
      x: 16 + hn.rx - 0.4 + (T.arms ? 2 : 0),
      y: 29.3,
      rx: 3.6,
      ry: 1.4
    };
    const legTop = ch ? ch.y + 2.5 : 99;
    const region = new Array(W * H).fill(null);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const px = x + 0.5,
        py = y + 0.5;
      let r = null;
      if (inE(px, py, tail)) r = 'tail';
      if (inE(px, py, hn) || ch && inE(px, py, ch)) r = 'body';
      if (r === 'body' && T.legs && Math.abs(px - 16) < T.legs && py > legTop) r = 'leg';
      if (T.arms && [-1, 1].some(s => inE(px, py, {
        ...T.arms,
        x: 16 + s * T.arms.dx
      }))) r = 'arm';
      if (ears.some(t => inT([px, py], ...t))) r = earsIn.some(t => inT([px, py], ...t)) ? 'earIn' : 'ear';
      if (inSE(px, py, h, 2.3)) r = 'head';
      if (T.bp && [-1, 1].some(s => inE(px, py, {
        x: 16 + s * T.bp.dx,
        y: 30.3,
        rx: T.bp.rx,
        ry: T.bp.ry
      }))) r = 'paw';
      if ([-1, 1].some(s => inE(px, py, {
        x: 16 + s * T.fp.dx,
        y: 30.1,
        rx: T.fp.rx,
        ry: T.fp.ry
      }))) r = 'paw';
      if (py > 31) r = null;
      region[y * W + x] = r;
    }
    const R = (x, y) => x < 0 || y < 0 || x >= W || y >= H ? null : region[y * W + x];
    const M = (x, y) => !!R(x, y);
    const belly = ch ? {
      x: 16,
      y: ch.y + 0.6,
      rx: ch.rx * 0.62,
      ry: ch.ry * 0.95
    } : {
      x: 16,
      y: hn.y - 1.5,
      rx: hn.rx * 0.48,
      ry: 6
    };
    const ey = Math.round(h.y + 0.6),
      ex = Math.round(16 - h.rx * 0.52) - 1,
      ny = ey + 2;
    const muzzle = {
      x: 16,
      y: ey + 2.7,
      rx: 3.6,
      ry: 2.3
    };
    const patches = C.patch ? [{
      x: h.x - h.rx * 0.5,
      y: h.y - h.ry * 0.55,
      rx: h.rx * 0.55,
      ry: h.ry * 0.62
    }, {
      x: 16 + hn.rx * 0.55,
      y: hn.y - 0.5,
      rx: hn.rx * 0.42,
      ry: hn.ry * 0.8
    }, {
      x: 16 - (ch ? ch.rx : hn.rx * 0.6) * 0.85,
      y: (ch ? ch.y : hn.y - 4) - 1,
      rx: 2.4,
      ry: 2.2
    }] : [];
    const px = new Array(W * H).fill(null);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const r = R(x, y),
        cx = x + 0.5,
        cy = y + 0.5;
      if (!r) {
        if (M(x + 1, y) || M(x - 1, y) || M(x, y + 1) || M(x, y - 1)) px[y * W + x] = C.line;
        continue;
      }
      let kind = 'base';
      if (r === 'earIn') kind = 'ear';else if (r === 'paw') kind = 'belly';else if (r === 'head') {
        const top = h.y - h.ry;
        if (inE(cx, cy, muzzle)) kind = 'belly';else if ((x === 13 || x === 15 || x === 16 || x === 18) && cy < top + 3.8 && (x === 15 || x === 16 ? cy < top + 3.2 : cy > top + 1)) kind = 'stripe';else if (Math.abs(cx - 16) > h.rx - 2.2 && (y === ey || y === ey + 2)) kind = 'stripe';
      } else if (r === 'body') {
        if (inE(cx, cy, belly)) kind = 'belly';else if (y % 3 === 1 && Math.abs(cx - 16) > Math.max(belly.rx, T.legs) + 0.8) kind = 'stripe';
      } else if (r === 'leg') {
        if (cy < legTop + 2 && inE(cx, cy, belly)) kind = 'belly';else if (x === 15 || x === 16 || Math.abs(cx - 16) > T.legs - 1) kind = 'legline';else if (y % 3 === 2) kind = 'stripe';
      } else if (r === 'arm') {
        if (y % 3 === 0) kind = 'stripe';
        const s = x < 16 ? 1 : -1;
        if (R(x + s, y) === 'body') kind = 'stripe';
      } else if (r === 'tail') {
        if (x % 2 === 0) kind = 'stripe';
      }
      const patched = patches.length && (kind === 'base' || kind === 'stripe' || kind === 'legline') && (r === 'tail' || patches.some(p => inE(cx, cy, p)));
      const shade = !M(x + 2, y + 1) || !M(x + 1, y + 2);
      const light = !shade && (!M(x - 2, y - 1) || !M(x - 1, y - 2));
      const chin = (r === 'body' || r === 'arm' || r === 'leg') && R(x, y - 1) === 'head';
      const pawTop = r === 'paw' && R(x, y - 1) !== 'paw';
      let c;
      if (patched) c = shade || chin || kind === 'legline' ? C.patchShade : light ? C.patchLight : C.patch;else if (kind === 'base') c = shade || chin ? C.shade : light ? C.light : C.base;else if (kind === 'legline') c = C.shade;else if (kind === 'belly') c = shade || chin || pawTop ? C.bellyShade : C.belly;else if (kind === 'stripe') c = chin ? C.shade : C.stripe;else c = C[kind];
      px[y * W + x] = c;
    }
    const set = (x, y, c) => {
      if (x >= 0 && y >= 0 && x < W && y < H) px[y * W + x] = c;
    };
    const D = '#20140E',
      WH = '#FFFFFF',
      BL = '#FF8E9A',
      AM = '#7A5A48';
    const EYES = {
      idle: [[0, -1, WH], [1, -1, D], [2, -1, D], [0, 0, D], [1, 0, D], [2, 0, D], [0, 1, D], [1, 1, AM], [2, 1, D], [1, -2, D]],
      blink: [[0, 0, D], [1, 0, D], [2, 0, D]],
      happy: [[0, 0, D], [1, -1, D], [2, 0, D]],
      eat: [[0, 0, D], [1, -1, D], [2, 0, D]],
      sleep: [[0, -1, D], [1, 0, D], [2, -1, D]],
      surprise: [[1, -2, D], [0, -1, D], [2, -1, D], [0, 0, D], [2, 0, D], [1, 1, D], [1, -1, WH], [1, 0, WH]],
      up: [[0, -2, WH], [1, -2, D], [2, -2, D], [0, -1, D], [1, -1, D], [2, -1, D], [1, 0, AM]]
    };
    const rex = 31 - ex - 2;
    (EYES[expr] || EYES.idle).forEach(([dx, dy, c]) => {
      set(ex + dx, ey + dy, c);
      set(rex + dx, ey + dy, c);
    });
    [[ex - 1, ny], [ex, ny]].forEach(([x, y]) => {
      set(x, y, BL);
      set(31 - x, y, BL);
    });
    set(15, ny, '#E2707C');
    set(16, ny, '#E2707C');
    const L = C.line;
    if (expr === 'eat') {
      set(15, ny + 1, L);
      set(16, ny + 1, L);
      set(14, ny + 2, L);
      set(17, ny + 2, L);
      set(15, ny + 2, '#C2434E');
      set(16, ny + 2, '#C2434E');
      set(15, ny + 3, L);
      set(16, ny + 3, L);
    } else if (expr === 'surprise') {
      set(15, ny + 1, L);
      set(16, ny + 1, L);
      set(14, ny + 2, L);
      set(17, ny + 2, L);
      set(15, ny + 3, L);
      set(16, ny + 3, L);
      set(15, ny + 2, '#C2434E');
      set(16, ny + 2, '#C2434E');
    } else if (expr === 'sleep') {
      set(15, ny + 1, L);
      set(16, ny + 1, L);
    } else {
      set(15, ny + 1, L);
      set(16, ny + 1, L);
      set(14, ny + 2, L);
      set(17, ny + 2, L);
      set(13, ny + 1, L);
      set(18, ny + 1, L);
    }
    const bmp = (rows, ox, oy, map) => rows.forEach((row, yy) => [...row].forEach((k, xx) => {
      if (map[k]) set(ox + xx, oy + yy, map[k]);
    }));
    if (pose === 'letter') {
      const ox = 11,
        oy = ch ? Math.round(ch.y) + 1 : 20;
      bmp(['##########', '#oWWWWWWo#', '#WoWWWWoW#', '#WWorrWWW#'.replace('WWorrWWW', 'WWorroWW'), '#WWWWWWWW#', '##########'], ox, oy, {
        '#': L,
        'W': '#FFFFFF',
        'o': '#B9BCC4',
        'r': '#E5484D'
      });
      bmp(['LL', 'BB'], ox - 1, oy + 2, {
        L: L,
        B: C.belly
      });
      bmp(['LL', 'BB'], ox + 9, oy + 2, {
        L: L,
        B: C.belly
      });
    } else if (pose === 'stamp') {
      bmp(['.r.r.', 'r...r', '.rrr.', 'rrrrr', '.rrr.'], 26, 26, {
        r: '#E5484D'
      });
    } else if (pose === 'sleep') {
      bmp(['###', '.#.', '###'].map(s => s.replace('.#.', '..#').replace('..#', '.#.')), 25, 3, {
        '#': '#5B6472'
      });
      bmp(['##', '##'], 29, 0, {
        '#': '#8E929B'
      });
    }
    return cache[key] = {
      w: W,
      h: H,
      px
    };
  }
  function draw(ctx, spr, ox, oy, s, map) {
    for (let y = 0; y < spr.h; y++) for (let x = 0; x < spr.w; x++) {
      let c = spr.px[y * spr.w + x];
      if (!c) continue;
      if (map) {
        c = map(c);
        if (!c) continue;
      }
      ctx.fillStyle = c;
      ctx.fillRect((ox + x) * s, (oy + y) * s, s, s);
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
  ICONS.pawpink = ICONS.paw;
  ICONS.letterblue = ICONS.letter;
  const ICON_INK = {
    cookie: '#C9566D',
    pawpink: '#D24E66',
    letterblue: '#1B64DA'
  };
  const ICON_FILL = {
    speaker: '#9DB6E6',
    speaker_off: '#C9CED8',
    plane: '#9DB6E6',
    dumbbell: '#C9CED8',
    ex_run: '#FF9F55',
    ex_chest: '#FFC9A3',
    ex_back: '#B9D4FF',
    ex_leg: '#BFE6C9',
    ex_shoulder: '#D9CCF5',
    ex_arm: '#FFE08A',
    ex_core: '#FFB8C4',
    flame: '#FF9F55',
    timer: '#9DC3FF',
    pawpink: '#FF8FA0',
    letterblue: '#FFFFFF',
    home: '#B4BCC8',
    record: '#8FC7B4',
    my: '#F6A2A6',
    paw: '#F49A3C',
    share: '#9DB6E6',
    brush: '#F2C14E',
    letter: '#FFF6E6',
    bell: '#F2C14E',
    shop: '#C9B6F0',
    cookie: '#FFC2CD'
  };
  function drawIcon(ctx, name, s, active, lineColor) {
    const rows = ICONS[name];
    if (!rows) return;
    const at = (x, y) => y < 0 || y >= 12 || x < 0 || x >= 12 ? '.' : rows[y][x];
    const ink = ICON_INK[name] || '#2F343D';
    for (let y = 0; y < 12; y++) for (let x = 0; x < 12; x++) {
      const k = at(x, y);
      if (k === '.') continue;
      const edge = [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => at(x + dx, y + dy) === '.');
      let c = null;
      if (active) c = edge ? ink : k === 'o' ? ink : ICON_FILL[name];else if (edge || k === 'o') c = lineColor;
      if (c) {
        ctx.fillStyle = c;
        ctx.fillRect(x * s, y * s, s, s);
      }
    }
  }

  // ---------- LCD sim (shared by 3D device + fullscreen) ----------
  const N = 48,
    CELL = 8;
  const FONT = {
    '0': ['###', '#.#', '#.#', '#.#', '###'],
    '1': ['.#.', '##.', '.#.', '.#.', '###'],
    '2': ['###', '..#', '###', '#..', '###'],
    '3': ['###', '..#', '.##', '..#', '###'],
    '4': ['#.#', '#.#', '###', '..#', '..#'],
    '5': ['###', '#..', '###', '..#', '###'],
    '6': ['###', '#..', '###', '#.#', '###'],
    '7': ['###', '..#', '.#.', '.#.', '.#.'],
    '8': ['###', '#.#', '###', '#.#', '###'],
    '9': ['###', '#.#', '###', '..#', '###'],
    'D': ['##.', '#.#', '#.#', '#.#', '##.'],
    '+': ['...', '.#.', '###', '.#.', '...']
  };
  const LICONS = {
    feed: ['.....', '#.##.', '#####', '#.##.', '.....'],
    pet: ['.#.#.', '#####', '#####', '.###.', '..#..'],
    stat: ['....#', '..#.#', '..#.#', '#.#.#', '#.#.#']
  };
  const HEART3 = ['#.#', '###', '.#.'];
  const BOWL = ['.#.#..', '######', '#....#', '.####.'],
    BOWL_E = ['......', '######', '#....#', '.####.'];
  const BODIES = ['slim', 'bulk', 'normal', 'jjin', 'loaf'];
  class Sim {
    constructor() {
      this.menu = 0;
      this.mode = 'home';
      this.anim = null;
      this.animT = 0;
      this.mood = 3;
    }
    play(a) {
      this.anim = a;
      this.animT = performance.now();
      this.mode = 'home';
      if (a === 'pet') this.mood = Math.min(4, this.mood + 1);
    }
    button(i) {
      if (i === 0) {
        if (this.mode === 'home' && !this.anim) this.menu = (this.menu + 1) % 3;
        return null;
      }
      if (i === 1) {
        if (this.mode === 'status') {
          this.mode = 'home';
          return null;
        }
        if (this.anim) return null;
        if (this.menu === 0) {
          this.play('eat');
          return 'feed';
        }
        if (this.menu === 1) {
          this.play('pet');
          return 'pet';
        }
        this.mode = 'status';
        return null;
      }
      this.mode = 'home';
      this.anim = null;
      return 'back';
    }
    draw(ctx, now, o) {
      const mono = o.lcd === 'mono';
      const buf = new Array(N * N).fill(null);
      const put = (x, y, c) => {
        x |= 0;
        y |= 0;
        if (x >= 0 && y >= 0 && x < N && y < N) buf[y * N + x] = c;
      };
      const lumF = h => {
        const n = parseInt(h.slice(1), 16);
        return (0.299 * (n >> 16) + 0.587 * (n >> 8 & 255) + 0.114 * (n & 255)) / 255;
      };
      const adj = (h, d) => {
        const n = parseInt(h.slice(1), 16),
          c = v => Math.max(0, Math.min(255, Math.round(v + d * 255)));
        return '#' + [n >> 16, n >> 8 & 255, n & 255].map(v => c(v).toString(16).padStart(2, '0')).join('');
      };
      const sceneK = mono ? 'none' : o.scene || 'none',
        lcdbg = !mono && o.lcdbg ? o.lcdbg : '';
      const dark = !mono && (sceneK === 'night' || lcdbg && lumF(lcdbg) < 0.35);
      const ink = mono ? '#2E3A26' : dark ? '#F3EBDD' : '#3A2A22',
        red = mono ? ink : '#E5566A',
        off = mono ? '#8FA07C' : dark ? '#5A6285' : '#D8CBB4';
      const bgb = new Array(N * N).fill(null);
      const bput = (x, y, c) => {
        x |= 0;
        y |= 0;
        if (x >= 0 && y >= 0 && x < N && y < N) bgb[y * N + x] = c;
      };
      const bbmp = (rows, ox, oy, c) => rows.forEach((row, y) => [...row].forEach((chr, x) => {
        if (chr === '#') bput(ox + x, oy + y, c);
      }));
      const bmp = (rows, ox, oy, c, sc) => {
        sc = sc || 1;
        rows.forEach((row, y) => [...row].forEach((chr, x) => {
          if (chr === '#') for (let a = 0; a < sc; a++) for (let b = 0; b < sc; b++) put(ox + x * sc + a, oy + y * sc + b, c);
        }));
      };
      const text = (str, ox, oy, c, sc) => {
        sc = sc || 1;
        [...str].forEach((chr, k) => FONT[chr] && bmp(FONT[chr], ox + k * 4 * sc, oy, c, sc));
      };
      const t = now / 1000,
        streak = String(o.streak || 12),
        body = o.body || 'normal',
        coat = o.coat || 'cheese';
      if (this.anim && now - this.animT > (this.anim === 'eat' ? 2600 : 1800)) this.anim = null;
      if (sceneK !== 'none') {
        const band = (y0, y1, c) => {
          for (let y = y0; y < y1; y++) for (let x = 0; x < N; x++) bput(x, y, c);
        };
        const CL = ['...####....', '..######...', '.########..', '###########', '.#########.'];
        const cloud = (x, y, c) => {
          bbmp(CL, x, y, c);
        };
        if (sceneK === 'cloud') {
          band(0, 16, '#A9D6FF');
          band(16, 32, '#BDE2FF');
          band(32, N, '#D3EEFF');
          cloud(t * 1.6 % 62 - 13, 9, '#FFFFFF');
          cloud((t * 1.0 + 30) % 62 - 13, 22, '#F4FAFF');
          cloud((t * 0.7 + 12) % 62 - 13, 34, '#FFFFFF');
        } else if (sceneK === 'meadow') {
          band(0, N, '#CDEBFF');
          cloud(t * 0.8 % 62 - 13, 6, '#FFFFFF');
          for (let x = 0; x < N; x++) {
            const h = 34 + Math.round(2 * Math.sin(x * 0.22));
            for (let y = h; y < N; y++) bput(x, y, y < h + 3 ? '#8FCB6B' : '#79BC58');
          }
          [[5, 40, '#FF8FA0'], [14, 43, '#FFE066'], [27, 41, '#FFFFFF'], [36, 44, '#FF8FA0'], [43, 40, '#FFE066'], [20, 45, '#FFFFFF']].forEach(([x, y, c]) => bput(x, y, c));
        } else if (sceneK === 'desert') {
          band(0, 22, '#FBE3B8');
          band(22, N, '#FCEBCB');
          for (let y = -4; y <= 4; y++) for (let x = -4; x <= 4; x++) if (x * x + y * y <= 17) bput(38 + x, 9 + y, '#F6A24A');
          for (let x = 0; x < N; x++) {
            const h = 36 + Math.round(2 * Math.sin(x * 0.3 + 1));
            for (let y = h; y < N; y++) bput(x, y, y < h + 4 ? '#E9C27D' : '#DDB06A');
          }
          bbmp(['..#..', '#.#.#', '#.#.#', '###.#', '..###', '..#..', '..#..'], 3, 31, '#6FB04F');
        } else if (sceneK === 'night') {
          band(0, N, '#2B3354');
          [[5, 6], [14, 3], [22, 9], [33, 4], [41, 13], [9, 18], [45, 24], [3, 30], [28, 44], [18, 15]].forEach(([x, y], i) => {
            if ((Math.floor(t * 1.6) + i) % 3) bput(x, y, '#FFF4C2');
          });
          for (let y = -4; y <= 4; y++) for (let x = -4; x <= 4; x++) if (x * x + y * y <= 17) bput(37 + x, 8 + y, '#F6EFC8');
          for (let y = -4; y <= 4; y++) for (let x = -4; x <= 4; x++) if (x * x + y * y <= 14) bput(35 + x, 7 + y, '#2B3354');
        }
      }
      if (this.mode === 'status') {
        const wT = ('D+' + streak).length * 8 - 2;
        text('D+' + streak, (N - wT) / 2, 6, ink, 2);
        for (let k = 0; k < 4; k++) bmp(HEART3, 10 + k * 8, 22, k < this.mood ? red : off, 2);
        BODIES.forEach((b, k) => {
          const x = 6 + k * 8,
            on = b === body;
          for (let a = 0; a < 6; a++) for (let c = 0; c < 6; c++) if (on || a === 0 || c === 0 || a === 5 || c === 5) put(x + a, 34 + c, on ? mono ? ink : '#F49A3C' : ink);
        });
      } else {
        bmp(HEART3, 2, 2, red);
        text('D+' + streak, 7, 1, ink);
        for (let k = 0; k < 4; k++) bmp(HEART3, N - 18 + k * 4, 2, k < this.mood ? red : off);
        let expr = 'idle',
          ox = 8,
          bob = Math.floor(t / 0.6) % 2;
        const el = (now - this.animT) / 1000;
        if (this.anim === 'eat') {
          expr = Math.floor(el / 0.28) % 2 ? 'eat' : 'idle';
          ox = 4;
          bob = 0;
        } else if (this.anim === 'pet') {
          expr = 'happy';
          bob = Math.floor(el / 0.2) % 2;
        } else if (t % 3.4 < 0.14) expr = 'blink';
        const spr = make(body, coat, expr);
        const map = mono ? c => {
          const n = parseInt(c.slice(1), 16),
            l = (0.299 * (n >> 16) + 0.587 * (n >> 8 & 255) + 0.114 * (n & 255)) / 255;
          return l < 0.4 ? ink : l < 0.72 ? '#5F7150' : l < 0.9 ? '#91A47E' : null;
        } : null;
        for (let y = 0; y < spr.h; y++) for (let x = 0; x < spr.w; x++) {
          let c = spr.px[y * spr.w + x];
          if (!c) continue;
          if (map) {
            c = map(c);
            if (!c) continue;
          }
          put(ox + x, 7 + bob + y, c);
        }
        if (this.anim === 'eat') bmp(el < 1.6 ? BOWL : BOWL_E, 38, 34, mono ? ink : '#4F8FD6');
        if (this.anim === 'pet') [[36, 20], [6, 16], [38, 10]].forEach(([x, y], k) => {
          const p = el * 1.2 - k * 0.3;
          if (p > 0 && p < 1) bmp(HEART3, x, y - p * 8, red, 2);
        });
        ['feed', 'pet', 'stat'].forEach((k, i) => {
          const x = 8 + i * 13,
            y = 41,
            sel = this.menu === i;
          if (sel) for (let a = -1; a < 6; a++) for (let b = -1; b < 6; b++) put(x + a, y + b, ink);
          bmp(LICONS[k], x, y, sel ? mono ? '#B7C7A2' : dark ? '#2B3354' : '#F6F0E1' : ink);
        });
      }
      const base = mono ? '#B7C7A2' : lcdbg || '#F6F0E1',
        cellC = mono ? '#AEBF98' : lcdbg ? adj(lcdbg, dark ? 0.06 : -0.05) : '#EEE6D3';
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, N * CELL, N * CELL);
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        ctx.fillStyle = buf[y * N + x] || bgb[y * N + x] || cellC;
        ctx.fillRect(x * CELL + 0.5, y * CELL + 0.5, CELL - 1, CELL - 1);
      }
    }
  }
  window.LoafySprites = {
    make,
    draw,
    drawIcon,
    COATS,
    COAT_NAMES,
    TYPES,
    BODY_NAMES,
    ICONS,
    ICON_FILL,
    Sim,
    LCD_SIZE: N * CELL
  };
  function drawAcc(ctx, type, acc, oy) {
    if (!acc || acc === 'none') return;
    const h = (TYPES[type] || TYPES.normal).head,
      ey = Math.round(h.y + 0.6) + oy,
      ex = Math.round(16 - h.rx * 0.52) - 1,
      rex = 31 - ex - 2;
    const put = (x, y, c) => {
      ctx.fillStyle = c;
      ctx.fillRect(x, y, 1, 1);
    };
    const bmp = (rows, x0, y0, pal) => rows.forEach((r, y) => [...r].forEach((k, x) => {
      if (pal[k]) put(x0 + x, y0 + y, pal[k]);
    }));
    if (acc === 'glasses') {
      [ex, rex].forEach(x0 => {
        for (let i = -1; i <= 3; i++) {
          put(x0 + i, ey - 2, '#2A2E36');
          put(x0 + i, ey + 2, '#2A2E36');
        }
        for (let j = -1; j <= 1; j++) {
          put(x0 - 1, ey + j, '#2A2E36');
          put(x0 + 3, ey + j, '#2A2E36');
        }
      });
      for (let x = ex + 4; x < rex - 1; x++) put(x, ey - 1, '#2A2E36');
    }
    if (acc === 'ribbon') {
      const cx = Math.round(h.x + h.rx - 3.5),
        cy = Math.round(h.y - h.ry + 0.5) + oy;
      bmp(['##.##', '#####', '##.##'], cx - 2, cy - 1, {
        '#': '#FF6B8A'
      });
      put(cx, cy, '#D9435F');
    }
    if (acc === 'crown') {
      const cy = Math.round(h.y - h.ry) - 2 + oy;
      bmp(['#.#.#', '#####', '##o##'], 14, cy, {
        '#': '#F2C14E',
        o: '#FF6B8A'
      });
    }
  }
  class LoafySprite extends HTMLElement {
    static get observedAttributes() {
      return ['type', 'coat', 'expr', 'pose', 'scale', 'animate', 'acc'];
    }
    connectedCallback() {
      if (!this.cv) {
        this.cv = document.createElement('canvas');
        this.cv.style.imageRendering = 'pixelated';
        this.cv.style.display = 'block';
        this.appendChild(this.cv);
      }
      this.style.display = 'inline-block';
      this.render();
      if (this.hasAttribute('animate')) this.loop();
    }
    disconnectedCallback() {
      clearTimeout(this.t);
    }
    attributeChangedCallback() {
      if (this.cv) this.render();
    }
    loop() {
      clearTimeout(this.t);
      this.frame = (this.frame || 0) + 1;
      this.render();
      this.t = setTimeout(() => this.loop(), this.frame % 6 === 5 ? 140 : 520);
    }
    render() {
      const s = +(this.getAttribute('scale') || 4),
        anim = this.hasAttribute('animate'),
        f = this.frame || 0;
      let expr = this.getAttribute('expr') || 'idle';
      if (anim && expr === 'idle' && f % 6 === 5) expr = 'blink';
      const spr = make(this.getAttribute('type') || 'normal', this.getAttribute('coat') || 'cheese', expr, this.getAttribute('pose') || 'sit');
      this.cv.width = spr.w;
      this.cv.height = spr.h + 1;
      this.cv.style.width = spr.w * s + 'px';
      this.cv.style.height = (spr.h + 1) * s + 'px';
      const ctx = this.cv.getContext('2d');
      ctx.clearRect(0, 0, this.cv.width, this.cv.height);
      draw(ctx, spr, 0, anim && f % 2 ? 1 : 0, 1);
      drawAcc(ctx, this.getAttribute('type') || 'normal', this.getAttribute('acc'), anim && f % 2 ? 1 : 0);
    }
  }
  if (!customElements.get('loafy-sprite')) customElements.define('loafy-sprite', LoafySprite);
  class LoafyIcon extends HTMLElement {
    static get observedAttributes() {
      return ['name', 'size', 'active', 'color'];
    }
    connectedCallback() {
      if (!this.cv) {
        this.cv = document.createElement('canvas');
        this.cv.style.imageRendering = 'pixelated';
        this.cv.style.display = 'block';
        this.appendChild(this.cv);
      }
      this.style.display = 'inline-block';
      this.style.lineHeight = '0';
      this.render();
    }
    attributeChangedCallback() {
      if (this.cv) this.render();
    }
    render() {
      const size = +(this.getAttribute('size') || 24),
        s = Math.max(1, Math.round(size / 12)),
        dpr = 2;
      const a = this.getAttribute('active'),
        active = a !== null && a !== 'false';
      this.cv.width = 12 * s * dpr;
      this.cv.height = 12 * s * dpr;
      this.cv.style.width = 12 * s + 'px';
      this.cv.style.height = 12 * s + 'px';
      const ctx = this.cv.getContext('2d');
      ctx.clearRect(0, 0, this.cv.width, this.cv.height);
      drawIcon(ctx, this.getAttribute('name'), s * dpr, active, this.getAttribute('color') || '#8E929B');
    }
  }
  if (!customElements.get('loafy-icon')) customElements.define('loafy-icon', LoafyIcon);
  class LoafyLcd extends HTMLElement {
    static get observedAttributes() {
      return ['body', 'coat', 'lcd', 'streak'];
    }
    connectedCallback() {
      if (this.cv) return;
      this.sim = new Sim();
      this.cv = document.createElement('canvas');
      this.cv.width = this.cv.height = N * CELL;
      Object.assign(this.cv.style, {
        width: '100%',
        height: '100%',
        display: 'block'
      });
      Object.assign(this.style, {
        display: 'block',
        width: '100%',
        height: '100%'
      });
      this.appendChild(this.cv);
      const tick = now => {
        this.raf = requestAnimationFrame(tick);
        if (now - (this.last || 0) < 80) return;
        this.last = now;
        this.draw(now);
      };
      this.raf = requestAnimationFrame(tick);
    }
    disconnectedCallback() {
      cancelAnimationFrame(this.raf);
      this.cv && this.cv.remove();
      this.cv = null;
    }
    draw(now) {
      this.sim.draw(this.cv.getContext('2d'), now, {
        body: this.getAttribute('body'),
        coat: this.getAttribute('coat'),
        lcd: this.getAttribute('lcd'),
        streak: this.getAttribute('streak'),
        scene: this.getAttribute('scene'),
        lcdbg: this.getAttribute('lcdbg')
      });
    }
    play(a) {
      this.sim.play(a);
    }
    button(i) {
      const r = this.sim.button(i);
      if (r === 'feed') this.dispatchEvent(new CustomEvent('loafy:device-feed', {
        bubbles: true
      }));
      return r;
    }
  }
  if (!customElements.get('loafy-lcd')) customElements.define('loafy-lcd', LoafyLcd);

  // ---------- logo (from uploads/Loafy.svg, 46x22 units) ----------
  const LOGO = [[0, 0, 2, 2, 0], [2, 2, 2, 10, 0], [2, 12, 2, 2, 0], [4, 14, 2, 2, 0], [6, 14, 2, 2, 0], [8, 10, 2, 2, 0], [8, 8, 2, 2, 0], [20, 12, 2, 2, 0], [22, 14, 2, 2, 0], [26, 0, 2, 2, 0], [28, 2, 2, 2, 0], [24, 2, 2, 2, 0], [24, 4, 2, 4, 0], [24, 8, 2, 4, 0], [28, 8, 2, 6, 0], [30, 14, 2, 2, 0], [32, 14, 2, 2, 0], [32, 10, 2, 4, 0], [32, 16, 2, 4, 0], [30, 20, 2, 2, 0], [28, 18, 2, 2, 0], [32, 8, 2, 2, 0], [38, 7, 2, 2, 1], [39, 10, 4, 4, 1], [42, 7, 2, 2, 1], [36, 10, 2, 2, 1], [44, 10, 2, 2, 1], [26, 6, 2, 2, 0], [24, 12, 2, 2, 0], [24, 14, 2, 2, 0], [10, 6, 2, 2, 0], [18, 10, 2, 2, 0], [18, 14, 2, 2, 0], [10, 14, 2, 2, 0], [8, 12, 2, 2, 0], [12, 8, 2, 2, 0], [20, 8, 2, 2, 0], [20, 6, 2, 2, 0], [18, 4, 2, 2, 0], [16, 6, 2, 2, 0], [20, 10, 2, 2, 0], [16, 12, 2, 2, 0], [12, 10, 2, 4, 0], [14, 14, 2, 2, 0]];
  class LoafyLogo extends HTMLElement {
    static get observedAttributes() {
      return ['scale', 'replay', 'ink'];
    }
    connectedCallback() {
      if (!this.cv) {
        this.cv = document.createElement('canvas');
        this.cv.style.display = 'block';
        this.appendChild(this.cv);
      }
      this.style.display = 'inline-block';
      this.style.lineHeight = '0';
      this.start();
    }
    disconnectedCallback() {
      cancelAnimationFrame(this.raf);
    }
    attributeChangedCallback() {
      if (this.cv) this.start();
    }
    start() {
      const s = +(this.getAttribute('scale') || 4),
        dpr = 2,
        W = 46 * s,
        H = 22 * s;
      this.cv.width = W * dpr;
      this.cv.height = H * dpr;
      this.cv.style.width = W + 'px';
      this.cv.style.height = H + 'px';
      const blocks = [];
      LOGO.forEach(([x, y, w, h, c]) => {
        if (c) return blocks.push({
          x,
          y,
          w,
          h,
          c
        });
        for (let yy = y; yy < y + h; yy += 2) for (let xx = x; xx < x + w; xx += 2) blocks.push({
          x: xx,
          y: yy,
          w: 2,
          h: 2,
          c
        });
      });
      let seed = 11;
      const rnd = () => {
        seed = seed * 16807 % 2147483647;
        return seed / 2147483647;
      };
      blocks.forEach(b => {
        b.t = b.c ? 1000 + (b.y < 9 ? 160 : 0) + Math.abs(b.x - 40) * 14 : b.x * 15 + rnd() * 240;
        b.d = b.c ? 380 : 260;
      });
      const still = this.hasAttribute('still'),
        t0 = performance.now(),
        ctx = this.cv.getContext('2d');
      const back = p => {
        const c1 = 1.9,
          c3 = c1 + 1;
        return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2);
      };
      cancelAnimationFrame(this.raf);
      const frame = now => {
        const t = still ? 1e9 : now - t0;
        let done = true;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, W, H);
        blocks.forEach(b => {
          const p = Math.max(0, Math.min(1, (t - b.t) / b.d));
          if (p < 1) done = false;
          if (p <= 0) return;
          const k = p >= 1 ? 1 : back(p),
            cx = (b.x + b.w / 2) * s,
            cy = (b.y + b.h / 2) * s,
            ww = b.w * s * k,
            hh = b.h * s * k;
          ctx.globalAlpha = Math.min(1, p * 2.5);
          ctx.fillStyle = b.c ? '#FF7474' : this.getAttribute('ink') || '#111114';
          ctx.fillRect(cx - ww / 2, cy - hh / 2 - (1 - p) * s * 2, ww, hh);
        });
        ctx.globalAlpha = 1;
        if (!done) this.raf = requestAnimationFrame(frame);else if (!still) this.dispatchEvent(new CustomEvent('loafy:logo-done', {
          bubbles: true
        }));
      };
      this.raf = requestAnimationFrame(frame);
    }
  }
  if (!customElements.get('loafy-logo')) customElements.define('loafy-logo', LoafyLogo);
  window.LoafySprites.LOGO = LOGO;

  // ---------- paw-print screen transition ----------
  class LoafyPaws extends HTMLElement {
    static get observedAttributes() {
      return ['run'];
    }
    connectedCallback() {
      Object.assign(this.style, {
        display: 'block',
        position: 'absolute',
        inset: '0',
        pointerEvents: 'none',
        overflow: 'hidden'
      });
      if (this.parentElement) this.parentElement.style.pointerEvents = 'none';
      this._ready = true;
    }
    attributeChangedCallback(n, o, v) {
      if (this._ready && v && v !== '0' && v !== o) this.play();
    }
    img() {
      if (LoafyPaws._img) return LoafyPaws._img;
      const c = document.createElement('canvas');
      c.width = c.height = 48;
      drawIcon(c.getContext('2d'), 'pawpink', 4, true, '#000');
      return LoafyPaws._img = c.toDataURL();
    }
    play() {
      const W = this.clientWidth || 400,
        H = this.clientHeight || 800,
        src = this.img();
      const layer = document.createElement('div');
      Object.assign(layer.style, {
        position: 'absolute',
        inset: '0'
      });
      this.appendChild(layer);
      const wash = document.createElement('div');
      Object.assign(wash.style, {
        position: 'absolute',
        inset: '0',
        background: '#FFF6F4',
        opacity: '0'
      });
      layer.appendChild(wash);
      wash.animate([{
        opacity: 0
      }, {
        opacity: 0.96,
        offset: 0.42
      }, {
        opacity: 0.96,
        offset: 0.56
      }, {
        opacity: 0
      }], {
        duration: 1300,
        easing: 'ease-in-out',
        fill: 'forwards'
      });
      const G = 56,
        sz = 40,
        cols = Math.ceil(W / G) + 1,
        rows = Math.ceil(H / G) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * G + (r % 2 ? G / 2 : 0) - G / 2 + (Math.random() - 0.5) * 14,
            y = H - r * G - G / 2 + (Math.random() - 0.5) * 14;
          const rot = (Math.random() - 0.5) * 36,
            op = 0.38 + Math.random() * 0.3;
          const el = document.createElement('img');
          el.src = src;
          Object.assign(el.style, {
            position: 'absolute',
            left: x - sz / 2 + 'px',
            top: y - sz / 2 + 'px',
            width: sz + 'px',
            height: sz + 'px',
            imageRendering: 'pixelated',
            opacity: '0'
          });
          layer.appendChild(el);
          el.animate([{
            opacity: 0,
            transform: 'translateY(24px) rotate(' + rot + 'deg) scale(0.3)'
          }, {
            opacity: op,
            transform: 'translateY(-2px) rotate(' + rot + 'deg) scale(1.12)',
            offset: 0.6
          }, {
            opacity: op,
            transform: 'translateY(0) rotate(' + rot + 'deg) scale(1)'
          }], {
            duration: 320,
            delay: r * 42 + Math.random() * 90,
            easing: 'cubic-bezier(.34,1.56,.64,1)',
            fill: 'forwards'
          });
        }
      }
      const fade = layer.animate([{
        opacity: 1
      }, {
        opacity: 1,
        offset: 0.62
      }, {
        opacity: 0
      }], {
        duration: 1600,
        easing: 'ease-out',
        fill: 'forwards'
      });
      fade.onfinish = () => layer.remove();
    }
  }
  if (!customElements.get('loafy-paws')) customElements.define('loafy-paws', LoafyPaws);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/loafy-app/loafy-sprites.js", error: String((e && e.message) || e) }); }

// ui_kits/loafy-app/loafy-tama.js
try { (() => {
(function () {
  const THREE_URL = 'https://unpkg.com/three@0.160.0/build/three.module.js';
  const H = 1.3,
    D = 0.56,
    PX = 5,
    PY = 2.25;
  const Rf = yn => {
    const a = Math.min(1, Math.abs(yn));
    return Math.pow(Math.max(0, 1 - Math.pow(a, PY)), 1 / PY) * (1 - 0.12 * yn);
  };
  const zSurf = (x, y) => {
    const R = Rf(y / H);
    if (R <= Math.abs(x)) return 0;
    return D * R * Math.pow(1 - Math.pow(Math.abs(x) / R, PX), 1 / PX);
  };
  class LoafyTama extends HTMLElement {
    static get observedAttributes() {
      return ['color', 'body', 'coat', 'lcd', 'streak', 'fit-scale', 'fitscale', 'strap', 'pattern', 'form', 'scene', 'lcdbg'];
    }
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      Object.assign(this.style, {
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '100%',
        touchAction: 'none',
        userSelect: 'none'
      });
      this.lcd = document.createElement('canvas');
      this.lcd.width = this.lcd.height = 384;
      const go = () => {
        if (!this.isConnected) return;
        if (!window.LoafySprites) return setTimeout(go, 50);
        this.sim = this.sim || new window.LoafySprites.Sim();
        import(THREE_URL).then(T => this.isConnected && !this.renderer && this.build(T));
      };
      go();
    }
    disconnectedCallback() {
      clearTimeout(this._bt);
      this.bubble && this.bubble.remove();
      this.bubble = null;
      cancelAnimationFrame(this.raf);
      this.ro && this.ro.disconnect();
      if (this.renderer) {
        this.renderer.dispose();
        this.renderer.forceContextLoss();
        this.renderer.domElement.remove();
        this.renderer = null;
      }
      this._init = false;
    }
    attributeChangedCallback(n, o, v) {
      if (n === 'color' && this.shell) this.setShell(v);
      if (n === 'strap' && this.chain) this.setStrap(v);
      if (n === 'form' && this.ears) this.setForm(v);
      if (n === 'pattern' && this.shell) this.setShell(this.getAttribute('color'));
      if ((n === 'fit-scale' || n === 'fitscale') && this._fit && this.cam) {
        this._fit(this.cam.aspect);
        this.cam.updateProjectionMatrix();
      }
      this._dirty = true;
    }
    patternTex(base, kind) {
      const T = this.T,
        cv = document.createElement('canvas');
      cv.width = cv.height = 1024;
      const x = cv.getContext('2d');
      x.fillStyle = '#' + base.getHexString(T.SRGBColorSpace);
      x.fillRect(0, 0, 1024, 1024);
      const hsl = {};
      base.getHSL(hsl);
      const pc = new T.Color().setHSL(hsl.h, Math.min(1, hsl.s * 1.1), hsl.l > 0.55 ? hsl.l - 0.2 : Math.min(0.95, hsl.l + 0.28));
      x.fillStyle = '#' + pc.getHexString(T.SRGBColorSpace);
      const st = 112;
      if (kind === 'dots') for (let j = 0; j < 11; j++) for (let i = 0; i < 11; i++) {
        x.beginPath();
        x.arc(i * st + j % 2 * st / 2, j * st, 20, 0, 7);
        x.fill();
      }
      if (kind === 'hearts') for (let j = 0; j < 11; j++) for (let i = 0; i < 11; i++) {
        const cx = i * st + j % 2 * st / 2,
          cy = j * st,
          s = 30;
        x.beginPath();
        x.moveTo(cx, cy + s * 0.55);
        x.bezierCurveTo(cx - s * 1.2, cy - s * 0.2, cx - s * 0.55, cy - s * 1.05, cx, cy - s * 0.4);
        x.bezierCurveTo(cx + s * 0.55, cy - s * 1.05, cx + s * 1.2, cy - s * 0.2, cx, cy + s * 0.55);
        x.fill();
      }
      if (kind === 'stripes') for (let i = 0; i < 18; i++) x.fillRect(0, i * 60, 1024, 24);
      if (kind === 'stars') for (let j = 0; j < 9; j++) for (let i = 0; i < 9; i++) {
        const cx = i * 128 + j % 2 * 64,
          cy = j * 128;
        x.beginPath();
        for (let k = 0; k < 10; k++) {
          const rr2 = k % 2 ? 11 : 26,
            a = -Math.PI / 2 + k * Math.PI / 5;
          x.lineTo(cx + Math.cos(a) * rr2, cy + Math.sin(a) * rr2);
        }
        x.closePath();
        x.fill();
      }
      if (kind === 'check') for (let j = 0; j < 16; j++) for (let i = 0; i < 16; i++) if ((i + j) % 2) x.fillRect(i * 64, j * 64, 64, 64);
      if (kind === 'paws') for (let j = 0; j < 9; j++) for (let i = 0; i < 9; i++) {
        const cx = i * 128 + j % 2 * 64,
          cy = j * 128;
        x.beginPath();
        x.ellipse(cx, cy + 8, 17, 14, 0, 0, 7);
        x.fill();
        [[-15, -13], [0, -19], [15, -13]].forEach(([dx, dy]) => {
          x.beginPath();
          x.arc(cx + dx, cy + dy, 6.5, 0, 7);
          x.fill();
        });
      }
      if (kind === 'waves') {
        x.strokeStyle = x.fillStyle;
        x.lineWidth = 14;
        for (let j = 0; j < 12; j++) {
          x.beginPath();
          for (let px = 0; px <= 1024; px += 16) {
            const py = j * 90 + Math.sin(px / 1024 * Math.PI * 8) * 18;
            px ? x.lineTo(px, py) : x.moveTo(px, py);
          }
          x.stroke();
        }
      }
      if (kind === 'flowers') for (let j = 0; j < 7; j++) for (let i = 0; i < 7; i++) {
        const cx = i * 160 + j % 2 * 80,
          cy = j * 160;
        for (let k = 0; k < 5; k++) {
          const a = k * Math.PI * 2 / 5;
          x.beginPath();
          x.arc(cx + Math.cos(a) * 17, cy + Math.sin(a) * 17, 12, 0, 7);
          x.fill();
        }
        x.fillStyle = '#' + base.getHexString(T.SRGBColorSpace);
        x.beginPath();
        x.arc(cx, cy, 8, 0, 7);
        x.fill();
        x.fillStyle = '#' + pc.getHexString(T.SRGBColorSpace);
      }
      const tex = new T.CanvasTexture(cv);
      tex.colorSpace = T.SRGBColorSpace;
      tex.anisotropy = 4;
      tex.wrapS = tex.wrapT = T.RepeatWrapping;
      return tex;
    }
    setForm(v) {
      this.ears.visible = v === 'cat' || v === 'cattail';
      if (this.tail) this.tail.visible = v === 'cattail' || v === 'tail';
      this._dirty = true;
    }
    snapshot() {
      if (!this.renderer || !this.scene) return null;
      this.renderer.render(this.scene, this.cam);
      return this.renderer.domElement.toDataURL('image/png');
    }
    setStrap(v) {
      const on = !!v && v !== 'none';
      this.chain.visible = on;
      this.loop.visible = on;
      if (this.root) this.root.position.x = on ? -0.22 : 0;
      if (on) this.metal.color.setHex({
        silver: 0xd6d6d8,
        gold: 0xe3c16f,
        rose: 0xe8b4a0
      }[v] || 0xd6d6d8);
      this._dirty = true;
    }
    setShell(v) {
      const c = new this.T.Color(v || '#C9CCD3');
      const pat = this.getAttribute('pattern');
      if (this._ptex) {
        this._ptex.dispose();
        this._ptex = null;
      }
      if (pat && pat !== 'none') {
        this._ptex = this.patternTex(c, pat);
        this.shell.map = this._ptex;
        this.shell.color.set(0xffffff);
      } else {
        this.shell.map = null;
        this.shell.color.copy(c);
      }
      this.shell.needsUpdate = true;
      this._dirty = true;
      const hsl = {};
      c.getHSL(hsl);
      this.ringMat.color.setHSL(hsl.h, hsl.s * 0.8, Math.max(0, hsl.l - 0.18));
    }
    play(a) {
      this.sim && this.sim.play(a);
      this._dirty = true;
      if (a === 'eat') this.say(this.pick(['냠냠, 맛있다', '오늘도 와줬구나', '배부르다…']));
    }
    pick(a) {
      return a[Math.floor(Math.random() * a.length)];
    }
    say(text) {
      if (this.hasAttribute('still')) return;
      if (!this.bubble) {
        const b = this.bubble = document.createElement('div');
        Object.assign(b.style, {
          position: 'absolute',
          left: '50%',
          top: '2%',
          transform: 'translate(-50%, 6px) scale(0.92)',
          opacity: '0',
          pointerEvents: 'none',
          zIndex: '2',
          padding: '10px 18px',
          borderRadius: '999px',
          background: '#FFFFFF',
          color: '#191F28',
          fontSize: '15px',
          fontWeight: '600',
          whiteSpace: 'nowrap',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          transition: 'opacity 180ms cubic-bezier(0.32,0.72,0,1), transform 280ms cubic-bezier(0.32,0.72,0,1)',
          fontFamily: 'inherit'
        });
        this.bubbleText = document.createElement('span');
        this.bubbleText.style.position = 'relative';
        b.appendChild(this.bubbleText);
        this.appendChild(b);
      }
      this.bubbleText.textContent = text;
      const b = this.bubble;
      b.style.opacity = '1';
      b.style.transform = 'translate(-50%, 0) scale(1)';
      clearTimeout(this._bt);
      this._bt = setTimeout(() => {
        b.style.opacity = '0';
        b.style.transform = 'translate(-50%, 6px) scale(0.92)';
      }, 2200);
    }
    build(T) {
      this.T = T;
      const w = this.clientWidth || 400,
        h = this.clientHeight || 400;
      const r = this.renderer = new T.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      r.setPixelRatio(Math.min(2, devicePixelRatio));
      r.setSize(w, h);
      r.outputColorSpace = T.SRGBColorSpace;
      r.toneMapping = T.ACESFilmicToneMapping;
      r.toneMappingExposure = 1.05;
      Object.assign(r.domElement.style, {
        width: '100%',
        height: '100%',
        display: 'block',
        cursor: 'grab'
      });
      this.appendChild(r.domElement);
      const scene = this.scene = new T.Scene();
      const cam = this.cam = new T.PerspectiveCamera(30, w / h, 0.1, 100);
      const fit = asp => {
        const t = Math.tan(15 * Math.PI / 180);
        const k = +(this.getAttribute('fitscale') || this.getAttribute('fit-scale') || 1);
        cam.position.set(0, -0.16, Math.max(1.62 / t, 1.5 / (t * asp)) / k);
      };
      fit(w / h);
      this._fit = fit;
      const es = new T.Scene();
      es.add(new T.Mesh(new T.BoxGeometry(20, 20, 20), new T.MeshBasicMaterial({
        color: 0x55575d,
        side: T.BackSide
      })));
      const panel = (x, y, z, sx, sy, i) => {
        const m = new T.Mesh(new T.PlaneGeometry(sx, sy), new T.MeshBasicMaterial({
          color: new T.Color(i, i, i),
          side: T.DoubleSide
        }));
        m.position.set(x, y, z);
        m.lookAt(0, 0, 0);
        es.add(m);
      };
      panel(-5, 6, 6, 7, 4, 5);
      panel(6, 2, 5, 3, 7, 2.6);
      panel(0, -7, 3, 9, 2, 1.2);
      panel(0, 4, -7, 8, 4, 1.8);
      const pm = new T.PMREMGenerator(r);
      scene.environment = pm.fromScene(es, 0.04).texture;
      const dl = new T.DirectionalLight(0xffffff, 1.1);
      dl.position.set(-3, 4, 5);
      scene.add(dl);
      scene.add(new T.AmbientLight(0xffffff, 0.25));
      const root = this.root = new T.Group();
      root.position.x = -0.22;
      scene.add(root);
      const egg = this.egg = new T.Group();
      root.add(egg);

      // shell (superellipse egg)
      const U = 120,
        V = 90,
        pos = [],
        idx = [];
      for (let j = 0; j <= V; j++) {
        const yn = -Math.cos(Math.PI * j / V),
          R = Rf(yn);
        for (let i = 0; i <= U; i++) {
          const th = -Math.PI / 2 + 2 * Math.PI * i / U,
            c = Math.cos(th),
            s = Math.sin(th);
          pos.push(R * Math.sign(c) * Math.pow(Math.abs(c), 2 / PX), yn * H, D * R * Math.sign(s) * Math.pow(Math.abs(s), 2 / PX));
        }
      }
      for (let j = 0; j < V; j++) for (let i = 0; i < U; i++) {
        const a = j * (U + 1) + i,
          b = a + U + 1;
        idx.push(a, b, a + 1, b, b + 1, a + 1);
      }
      const uv = [];
      for (let q = 0; q < pos.length; q += 3) uv.push(0.5 + pos[q] / 2.6, 0.5 + pos[q + 1] / 2.6);
      const g = new T.BufferGeometry();
      g.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
      g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
      g.setIndex(idx);
      g.computeVertexNormals();
      this.shell = new T.MeshPhysicalMaterial({
        color: 0xc9ccd3,
        roughness: 0.32,
        metalness: 0.15,
        clearcoat: 0.8,
        clearcoatRoughness: 0.18
      });
      this.shell.onBeforeCompile = sh => {
        sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vOP; varying vec3 vON;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvOP = position; vON = normal;');
        sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vOP; varying vec3 vON;').replace('#include <map_fragment>', '#ifdef USE_MAP\n vec3 bw = pow(abs(normalize(vON)), vec3(4.0)); bw /= (bw.x + bw.y + bw.z);\n vec4 tc = texture2D(map, vOP.zy * 0.385 + 0.5) * bw.x + texture2D(map, vOP.xz * 0.385 + 0.5) * bw.y + texture2D(map, vOP.xy * 0.385 + 0.5) * bw.z;\n diffuseColor *= tc;\n #endif');
      };
      this.shell.customProgramCacheKey = () => 'loafy-tri';
      this.ringMat = new T.MeshStandardMaterial({
        color: 0x8a8d94,
        roughness: 0.5
      });
      egg.add(new T.Mesh(g, this.shell));
      // cat ears (rounded tips, recessed pink inner)
      const ears = this.ears = new T.Group();
      egg.add(ears);
      const rtri = (w, h, r, cy, path) => {
        const P = [[0, h / 2 + cy], [-w / 2, -h / 2 + cy], [w / 2, -h / 2 + cy]],
          sh = path || new T.Shape();
        P.forEach((v, i) => {
          const pv = P[(i + 2) % 3],
            nx = P[(i + 1) % 3],
            d1 = new T.Vector2(pv[0] - v[0], pv[1] - v[1]).normalize(),
            d2 = new T.Vector2(nx[0] - v[0], nx[1] - v[1]).normalize();
          const a = [v[0] + d1.x * r, v[1] + d1.y * r],
            b = [v[0] + d2.x * r, v[1] + d2.y * r];
          if (i === 0) sh.moveTo(a[0], a[1]);else sh.lineTo(a[0], a[1]);
          sh.quadraticCurveTo(v[0], v[1], b[0], b[1]);
        });
        sh.closePath();
        return sh;
      };
      const outer = rtri(0.72, 0.64, 0.2, 0);
      outer.holes.push(rtri(0.46, 0.4, 0.12, -0.06, new T.Path()));
      const earG = new T.ExtrudeGeometry(outer, {
        depth: 0.2,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 6,
        curveSegments: 20
      });
      earG.translate(0, 0, -0.1);
      const inG = new T.ExtrudeGeometry(rtri(0.5, 0.44, 0.13, -0.06), {
        depth: 0.04,
        bevelEnabled: false,
        curveSegments: 20
      });
      const inMat = new T.MeshStandardMaterial({
        color: 0xf4b6bf,
        roughness: 0.6
      });
      [-1, 1].forEach(sd => {
        const g2 = new T.Group();
        g2.position.set(sd * 0.5, 1.22, 0);
        g2.rotation.z = -sd * 0.36;
        g2.add(new T.Mesh(earG, this.shell));
        const i2 = new T.Mesh(inG, inMat);
        i2.position.set(0, 0.05, 0.12);
        g2.add(i2);
        ears.add(g2);
      });
      ears.visible = ['cat', 'cattail'].includes(this.getAttribute('form'));
      // tail
      const tail = this.tail = new T.Group();
      egg.add(tail);
      const tcurve = new T.CatmullRomCurve3([new T.Vector3(0.25, -0.8, -0.2), new T.Vector3(0.75, -1.0, -0.42), new T.Vector3(1.1, -0.76, -0.5), new T.Vector3(1.04, -0.42, -0.5), new T.Vector3(1.06, -0.08, -0.5), new T.Vector3(1.32, 0.12, -0.46)]);
      tail.add(new T.Mesh(new T.TubeGeometry(tcurve, 64, 0.085, 14, false), this.shell));
      const ttip = new T.Mesh(new T.SphereGeometry(0.085, 20, 16), this.shell);
      ttip.position.copy(tcurve.getPoint(1));
      tail.add(ttip);
      tail.visible = ['cattail', 'tail'].includes(this.getAttribute('form'));
      // seam line around the side
      const seam = new T.Mesh(new T.TorusGeometry(1, 0.008, 6, 160), this.ringMat);
      seam.rotation.x = Math.PI / 2;
      seam.scale.set(Rf(-0.02 / H) * 1.002, D * Rf(-0.02 / H) * 1.01, 1);
      seam.position.y = -0.02;
      seam.visible = false;
      const rr = (ctx, x, y, w2, h2, rad) => {
        ctx.beginPath();
        ctx.roundRect(x, y, w2, h2, rad);
        ctx.fill();
      };
      const alphaTex = (w2, h2, rad) => {
        const c = document.createElement('canvas');
        c.width = 256;
        c.height = Math.round(256 * h2 / w2);
        const x = c.getContext('2d');
        x.fillStyle = '#000';
        x.fillRect(0, 0, c.width, c.height);
        x.fillStyle = '#fff';
        rr(x, 2, 2, c.width - 4, c.height - 4, rad * c.width / w2);
        return new T.CanvasTexture(c);
      };
      const conform = (w2, h2, cx, cy, off, mat) => {
        const pg = new T.PlaneGeometry(w2, h2, 40, 40),
          p = pg.attributes.position;
        for (let i = 0; i < p.count; i++) p.setZ(i, zSurf(p.getX(i) + cx, p.getY(i) + cy) + off);
        pg.computeVertexNormals();
        const m = new T.Mesh(pg, mat);
        m.position.set(cx, cy, 0);
        egg.add(m);
        return m;
      };
      const SY = 0.1;
      conform(1.5, 1.38, 0, SY, 0.006, new T.MeshPhysicalMaterial({
        color: 0x0c0c10,
        roughness: 0.2,
        clearcoat: 1,
        alphaMap: alphaTex(1.5, 1.38, 0.26),
        alphaTest: 0.5
      }));
      conform(1.56, 1.44, 0, SY, 0.003, new T.MeshStandardMaterial({
        color: 0x000000,
        roughness: 0.6,
        transparent: true,
        opacity: 0.25,
        alphaMap: alphaTex(1.56, 1.44, 0.3)
      }));
      this.tex = new T.CanvasTexture(this.lcd);
      this.tex.magFilter = T.LinearFilter;
      this.tex.colorSpace = T.SRGBColorSpace;
      this.lcdMesh = conform(1.2, 1.2, 0, SY, 0.012, new T.MeshBasicMaterial({
        map: this.tex,
        alphaMap: alphaTex(1.2, 1.2, 0.08),
        alphaTest: 0.5,
        toneMapped: false
      }));
      conform(1.24, 1.24, 0, SY, 0.02, new T.MeshPhysicalMaterial({
        color: 0xffffff,
        roughness: 0.04,
        transparent: true,
        opacity: 0.12,
        clearcoat: 1,
        alphaMap: alphaTex(1.24, 1.24, 0.1)
      }));

      // logo
      const lc = document.createElement('canvas');
      lc.width = 512;
      lc.height = 128;
      const lx = lc.getContext('2d');
      {
        const LG = window.LoafySprites && window.LoafySprites.LOGO || [],
          ls = 5.4,
          ox = (512 - 46 * ls) / 2,
          oy = (128 - 22 * ls) / 2;
        LG.forEach(([x, y, w, h, c]) => {
          lx.fillStyle = c ? '#FF7474' : '#26262c';
          lx.fillRect(ox + x * ls, oy + y * ls, w * ls + 0.5, h * ls + 0.5);
        });
      }
      const lt = new T.CanvasTexture(lc);
      lt.colorSpace = T.SRGBColorSpace;
      conform(0.56, 0.14, 0, 1.0, 0.004, new T.MeshStandardMaterial({
        map: lt,
        transparent: true,
        roughness: 0.5
      }));
      // back side: battery cover, logo, paw
      const conformBack = (w2, h2, cx, cy, off, mat) => {
        const pg = new T.PlaneGeometry(w2, h2, 40, 40),
          p = pg.attributes.position;
        for (let i = 0; i < p.count; i++) p.setZ(i, -(zSurf(p.getX(i) + cx, p.getY(i) + cy) + off));
        pg.computeVertexNormals();
        const nA = pg.attributes.normal;
        for (let i = 0; i < nA.count; i++) nA.setXYZ(i, -nA.getX(i), -nA.getY(i), -nA.getZ(i));
        const m = new T.Mesh(pg, mat);
        m.position.set(cx, cy, 0);
        egg.add(m);
        return m;
      };
      conformBack(0.96, 0.62, 0, 0.12, 0.004, new T.MeshStandardMaterial({
        color: 0x000000,
        roughness: 0.7,
        transparent: true,
        opacity: 0.13,
        alphaMap: alphaTex(0.96, 0.62, 0.16),
        side: T.DoubleSide
      }));
      const lt2 = lt.clone();
      lt2.wrapS = T.RepeatWrapping;
      lt2.repeat.x = -1;
      lt2.offset.x = 1;
      lt2.needsUpdate = true;
      conformBack(0.56, 0.14, 0, 0.3, 0.008, new T.MeshStandardMaterial({
        map: lt2,
        transparent: true,
        roughness: 0.5,
        side: T.DoubleSide
      }));
      const pc2 = document.createElement('canvas');
      pc2.width = pc2.height = 120;
      if (window.LoafySprites && window.LoafySprites.drawIcon) window.LoafySprites.drawIcon(pc2.getContext('2d'), 'pawpink', 10, true, '#000');
      const pt2 = new T.CanvasTexture(pc2);
      pt2.colorSpace = T.SRGBColorSpace;
      pt2.wrapS = T.RepeatWrapping;
      pt2.repeat.x = -1;
      pt2.offset.x = 1;
      pt2.magFilter = T.NearestFilter;
      pt2.minFilter = T.NearestFilter;
      pt2.generateMipmaps = false;
      conformBack(0.3, 0.3, 0, -0.04, 0.008, new T.MeshStandardMaterial({
        map: pt2,
        transparent: true,
        roughness: 0.55,
        side: T.DoubleSide
      }));

      // buttons
      const btnMat = new T.MeshPhysicalMaterial({
        color: 0x1b1b20,
        roughness: 0.3,
        clearcoat: 1,
        clearcoatRoughness: 0.1
      });
      const holeMat = new T.MeshStandardMaterial({
        color: 0x050506,
        roughness: 0.9
      });
      this.buttons = [];
      [[-0.46, -0.84], [0, -0.96], [0.46, -0.84]].forEach(([x, y], i) => {
        const z = zSurf(x, y),
          e = 0.01;
        const n = new T.Vector3(-(zSurf(x + e, y) - zSurf(x - e, y)) / (2 * e), -(zSurf(x, y + e) - zSurf(x, y - e)) / (2 * e), 1).normalize();
        const holder = new T.Group();
        holder.position.set(x, y, z);
        holder.quaternion.setFromUnitVectors(new T.Vector3(0, 0, 1), n);
        egg.add(holder);
        const hole = new T.Mesh(new T.CylinderGeometry(0.125, 0.125, 0.04, 40), holeMat);
        hole.rotation.x = Math.PI / 2;
        hole.position.z = 0.0;
        holder.add(hole);
        const ring = new T.Mesh(new T.TorusGeometry(0.128, 0.016, 12, 48), this.ringMat);
        ring.position.z = 0.01;
        holder.add(ring);
        const b = new T.Mesh(new T.CylinderGeometry(0.1, 0.104, 0.1, 40), btnMat);
        b.rotation.x = Math.PI / 2;
        b.position.z = 0.03;
        b.userData.idx = i;
        holder.add(b);
        const cap = new T.Mesh(new T.SphereGeometry(0.1, 32, 12, 0, Math.PI * 2, 0, Math.PI / 2), btnMat);
        cap.scale.y = 0.25;
        cap.position.y = 0.05;
        b.add(cap);
        cap.userData.idx = i;
        this.buttons.push(b);
      });

      // keychain
      const metal = this.metal = new T.MeshStandardMaterial({
        color: 0xd6d6d8,
        metalness: 1,
        roughness: 0.22
      });
      const bail = new T.Vector3(0.5, 1.1, -0.02);
      const loop = this.loop = new T.Mesh(new T.TorusGeometry(0.075, 0.018, 12, 32), metal);
      loop.position.copy(bail);
      loop.rotation.y = Math.PI / 2.4;
      egg.add(loop);
      const chain = this.chain = new T.Group();
      chain.position.copy(bail);
      egg.add(chain);
      const ball = new T.SphereGeometry(0.026, 12, 10);
      const rx = 0.42,
        ry = 0.95,
        phi0 = 128 * Math.PI / 180,
        cxy = [-rx * Math.cos(phi0), -ry * Math.sin(phi0)];
      for (let k = 0; k < 76; k++) {
        const ph = phi0 - k / 76 * Math.PI * 2;
        const m = new T.Mesh(ball, metal);
        m.position.set(cxy[0] + rx * Math.cos(ph), cxy[1] + ry * Math.sin(ph), -0.04 * Math.sin(ph * 2));
        chain.add(m);
      }
      const clasp = new T.Mesh(new T.CylinderGeometry(0.034, 0.034, 0.14, 16), metal);
      clasp.position.set(cxy[0] + rx * Math.cos(phi0 - Math.PI * 1.1), cxy[1] + ry * Math.sin(phi0 - Math.PI * 1.1), 0);
      clasp.rotation.z = 0.6;
      chain.add(clasp);
      this.setStrap(this.getAttribute('strap'));

      // contact shadow
      const sc = document.createElement('canvas');
      sc.width = sc.height = 128;
      const sx = sc.getContext('2d');
      const gr = sx.createRadialGradient(64, 64, 4, 64, 64, 62);
      gr.addColorStop(0, 'rgba(0,0,0,0.28)');
      gr.addColorStop(0.5, 'rgba(0,0,0,0.1)');
      gr.addColorStop(1, 'rgba(0,0,0,0)');
      sx.fillStyle = gr;
      sx.fillRect(0, 0, 128, 128);
      const shadow = this.shadowM = new T.Mesh(new T.PlaneGeometry(2.4, 0.42), new T.MeshBasicMaterial({
        map: new T.CanvasTexture(sc),
        transparent: true,
        depthWrite: false
      }));
      shadow.position.set(0, -1.42, -0.1);
      shadow.rotation.x = -0.05;
      root.add(shadow);
      this.setShell(this.getAttribute('color'));

      // interaction
      const ray = new T.Raycaster(),
        v2 = new T.Vector2();
      const hit = e => {
        if (Math.cos(this.rot.y) < 0.25) return -1;
        const b = r.domElement.getBoundingClientRect();
        v2.set((e.clientX - b.left) / b.width * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1);
        ray.setFromCamera(v2, cam);
        const h2 = ray.intersectObjects(this.buttons.concat([this.lcdMesh]), true)[0];
        return h2 ? h2.object === this.lcdMesh ? 9 : h2.object.userData.idx : -1;
      };
      this.drag = null;
      this.rot = {
        x: 0,
        y: 0,
        tx: 0,
        ty: 0
      };
      this.press = [0, 0, 0];
      r.domElement.addEventListener('pointerdown', e => {
        const i = hit(e);
        if (this.hasAttribute('still')) return;
        if (i === 9) {
          this.dispatchEvent(new CustomEvent('loafy:open-lcd', {
            bubbles: true,
            composed: true
          }));
          return;
        }
        if (i >= 0) {
          this.press[i] = performance.now();
          this.button(i);
          return;
        }
        this.drag = {
          x: e.clientX,
          y: e.clientY,
          ry: this.rot.ty,
          rx: this.rot.tx
        };
        r.domElement.setPointerCapture(e.pointerId);
        r.domElement.style.cursor = 'grabbing';
      });
      r.domElement.addEventListener('pointermove', e => {
        if (this.drag) {
          this.rot.ty = this.drag.ry + (e.clientX - this.drag.x) * 0.012;
          this.rot.tx = Math.max(-0.6, Math.min(0.6, this.drag.rx + (e.clientY - this.drag.y) * 0.006));
        } else r.domElement.style.cursor = hit(e) >= 0 ? 'pointer' : 'grab';
      });
      const up = () => {
        if (this.drag) {
          const P2 = Math.PI * 2,
            a = (this.rot.ty % P2 + P2) % P2;
          this._dwell = a > 1.2 && a < P2 - 1.2 ? 4200 : 600;
          this._rel = performance.now();
        }
        this.drag = null;
        this.rot.tx = 0;
        r.domElement.style.cursor = 'grab';
      };
      r.domElement.addEventListener('pointerup', up);
      r.domElement.addEventListener('pointercancel', up);
      this.ro = new ResizeObserver(() => {
        const W2 = this.clientWidth,
          H2 = this.clientHeight;
        if (!W2 || !H2) return;
        r.setSize(W2, H2);
        cam.aspect = W2 / H2;
        this._fit(W2 / H2);
        cam.updateProjectionMatrix();
      });
      this.ro.observe(this);
      this.scene = scene;
      this.lastLcd = 0;
      this.t0 = performance.now();
      const tick = now => {
        this.raf = requestAnimationFrame(tick);
        const still = this.hasAttribute('still');
        if (still) this.drag = null;
        const t = still ? 0 : (now - this.t0) / 1000;
        if (!this.drag && this._rel && now - this._rel > this._dwell) {
          this.rot.ty = Math.round(this.rot.ty / (Math.PI * 2)) * Math.PI * 2;
          this._rel = 0;
        }
        const idle = !this.drag && Math.abs(this.rot.y - this.rot.ty) < 0.02;
        this.rot.y += (this.rot.ty + (this.drag ? 0 : Math.sin(t * 0.6) * 0.14) - this.rot.y) * 0.12;
        this.rot.x += (this.rot.tx + (this.drag ? 0 : Math.sin(t * 0.8) * 0.04) - this.rot.x) * 0.12;
        egg.rotation.set(still ? 0 : this.rot.x, still ? 0 : this.rot.y - 0.12, 0);
        egg.position.y = Math.sin(t * 1.3) * 0.035;
        shadow.scale.setScalar(1 - Math.sin(t * 1.3) * 0.04);
        this.chain.rotation.z = Math.sin(t * 1.3 + 0.6) * 0.05 - this.rot.y * 0.15;
        this.buttons.forEach((b, i) => {
          const p = Math.max(0, 1 - (now - this.press[i]) / 160);
          b.position.z = 0.03 - p * 0.035;
        });
        if (now - this.lastLcd > 80 || this._dirty) {
          this.drawLcd(now);
          this.lastLcd = now;
          this._dirty = false;
        }
        r.render(scene, cam);
      };
      this.raf = requestAnimationFrame(tick);
    }
    button(i) {
      this._dirty = true;
      const sim = this.sim,
        wasStatus = sim.mode === 'status';
      const r = sim.button(i);
      if (r === 'feed') this.dispatchEvent(new CustomEvent('loafy:device-feed', {
        bubbles: true
      }));
      const mood = sim.mood,
        streak = this.getAttribute('streak') || '0';
      const feel = mood >= 4 ? '기분 최고야' : mood >= 3 ? '기분 좋아' : mood >= 2 ? '그냥 그래' : '조금 심심해';
      let t;
      if (i === 0) t = sim.anim ? null : ['밥 먹을래?', '쓰다듬어 줄래?', '내 상태 볼래?'][sim.menu];else if (i === 1) t = r === 'feed' ? null : r === 'pet' ? this.pick(['골골골… ' + feel, '거기 좋아', '한 번 더 해줘']) : wasStatus ? '다시 놀자' : sim.mode === 'status' ? feel + ' · ' + streak + '일째 함께야' : null;else t = this.pick(['응, 알겠어', '나 여기 있을게']);
      if (t) this.say(t);
    }
    drawLcd(now) {
      if (!this.sim) return;
      this.sim.draw(this.lcd.getContext('2d'), now, {
        body: this.getAttribute('body'),
        coat: this.getAttribute('coat'),
        lcd: this.getAttribute('lcd'),
        streak: this.getAttribute('streak'),
        scene: this.getAttribute('scene'),
        lcdbg: this.getAttribute('lcdbg')
      });
      if (this.tex) this.tex.needsUpdate = true;
    }
  }
  if (!customElements.get('loafy-tama')) customElements.define('loafy-tama', LoafyTama);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/loafy-app/loafy-tama.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.Toast = __ds_scope.Toast;

})();
