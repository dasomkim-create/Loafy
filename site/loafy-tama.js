(function () {
  const THREE_URL = 'https://unpkg.com/three@0.160.0/build/three.module.js';
    const H = 1.3, D = 0.56, PX = 5, PY = 2.25;
  const Rf = (yn) => { const a = Math.min(1, Math.abs(yn)); return Math.pow(Math.max(0, 1 - Math.pow(a, PY)), 1 / PY) * (1 - 0.12 * yn); };
  const zSurf = (x, y) => { const R = Rf(y / H); if (R <= Math.abs(x)) return 0; return D * R * Math.pow(1 - Math.pow(Math.abs(x) / R, PX), 1 / PX); };

  class LoafyTama extends HTMLElement {
    static get observedAttributes() { return ['color', 'body', 'coat', 'lcd', 'streak', 'fit-scale', 'fitscale', 'strap', 'pattern', 'form', 'scene', 'lcdbg']; }
    connectedCallback() {
      if (this._init) return; this._init = true;
      Object.assign(this.style, { display: 'block', position: 'relative', width: '100%', height: '100%', touchAction: 'none', userSelect: 'none' });
      
      this.lcd = document.createElement('canvas'); this.lcd.width = this.lcd.height = 384;
            const go = () => { if (!this.isConnected) return; if (!window.LoafySprites) return setTimeout(go, 50); this.sim = this.sim || new window.LoafySprites.Sim(); import(THREE_URL).then(T => this.isConnected && !this.renderer && this.build(T)); };
      go();
    }
    disconnectedCallback() {
      clearTimeout(this._bt); this.bubble && this.bubble.remove(); this.bubble = null;
            cancelAnimationFrame(this.raf); this.ro && this.ro.disconnect();
      if (this.renderer) { this.renderer.dispose(); this.renderer.forceContextLoss(); this.renderer.domElement.remove(); this.renderer = null; }
      this._init = false;
    }
    attributeChangedCallback(n, o, v) {
      if (n === 'color' && this.shell) this.setShell(v);
      if (n === 'strap' && this.chain) this.setStrap(v);
      if (n === 'form' && this.ears) this.setForm(v);
      if (n === 'pattern' && this.shell) this.setShell(this.getAttribute('color'));
      if ((n === 'fit-scale' || n === 'fitscale') && this._fit && this.cam) { this._fit(this.cam.aspect); this.cam.updateProjectionMatrix(); }
      this._dirty = true;
    }
    patternTex(base, kind) {
      const T = this.T, cv = document.createElement('canvas'); cv.width = cv.height = 1024; const x = cv.getContext('2d');
      x.fillStyle = '#' + base.getHexString(T.SRGBColorSpace); x.fillRect(0, 0, 1024, 1024);
      const hsl = {}; base.getHSL(hsl);
      const pc = new T.Color().setHSL(hsl.h, Math.min(1, hsl.s * 1.1), hsl.l > 0.55 ? hsl.l - 0.2 : Math.min(0.95, hsl.l + 0.28));
      x.fillStyle = '#' + pc.getHexString(T.SRGBColorSpace);
      const st = 112;
      if (kind === 'dots') for (let j = 0; j < 11; j++) for (let i = 0; i < 11; i++) { x.beginPath(); x.arc(i * st + (j % 2) * st / 2, j * st, 20, 0, 7); x.fill(); }
      if (kind === 'hearts') for (let j = 0; j < 11; j++) for (let i = 0; i < 11; i++) { const cx = i * st + (j % 2) * st / 2, cy = j * st, s = 30; x.beginPath(); x.moveTo(cx, cy + s * 0.55); x.bezierCurveTo(cx - s * 1.2, cy - s * 0.2, cx - s * 0.55, cy - s * 1.05, cx, cy - s * 0.4); x.bezierCurveTo(cx + s * 0.55, cy - s * 1.05, cx + s * 1.2, cy - s * 0.2, cx, cy + s * 0.55); x.fill(); }
      if (kind === 'stripes') for (let i = 0; i < 18; i++) x.fillRect(0, i * 60, 1024, 24);
      if (kind === 'stars') for (let j = 0; j < 9; j++) for (let i = 0; i < 9; i++) { const cx = i * 128 + (j % 2) * 64, cy = j * 128; x.beginPath(); for (let k = 0; k < 10; k++) { const rr2 = k % 2 ? 11 : 26, a = -Math.PI / 2 + k * Math.PI / 5; x.lineTo(cx + Math.cos(a) * rr2, cy + Math.sin(a) * rr2); } x.closePath(); x.fill(); }
      if (kind === 'check') for (let j = 0; j < 16; j++) for (let i = 0; i < 16; i++) if ((i + j) % 2) x.fillRect(i * 64, j * 64, 64, 64);
      if (kind === 'paws') for (let j = 0; j < 9; j++) for (let i = 0; i < 9; i++) { const cx = i * 128 + (j % 2) * 64, cy = j * 128; x.beginPath(); x.ellipse(cx, cy + 8, 17, 14, 0, 0, 7); x.fill(); [[-15, -13], [0, -19], [15, -13]].forEach(([dx, dy]) => { x.beginPath(); x.arc(cx + dx, cy + dy, 6.5, 0, 7); x.fill(); }); }
      if (kind === 'waves') { x.strokeStyle = x.fillStyle; x.lineWidth = 14; for (let j = 0; j < 12; j++) { x.beginPath(); for (let px = 0; px <= 1024; px += 16) { const py = j * 90 + Math.sin(px / 1024 * Math.PI * 8) * 18; px ? x.lineTo(px, py) : x.moveTo(px, py); } x.stroke(); } }
      if (kind === 'flowers') for (let j = 0; j < 7; j++) for (let i = 0; i < 7; i++) { const cx = i * 160 + (j % 2) * 80, cy = j * 160; for (let k = 0; k < 5; k++) { const a = k * Math.PI * 2 / 5; x.beginPath(); x.arc(cx + Math.cos(a) * 17, cy + Math.sin(a) * 17, 12, 0, 7); x.fill(); } x.fillStyle = '#' + base.getHexString(T.SRGBColorSpace); x.beginPath(); x.arc(cx, cy, 8, 0, 7); x.fill(); x.fillStyle = '#' + pc.getHexString(T.SRGBColorSpace); }
      const tex = new T.CanvasTexture(cv); tex.colorSpace = T.SRGBColorSpace; tex.anisotropy = 4; tex.wrapS = tex.wrapT = T.RepeatWrapping; return tex;
    }
    setForm(v) { this.ears.visible = v === 'cat' || v === 'cattail'; if (this.tail) this.tail.visible = v === 'cattail' || v === 'tail'; this._dirty = true; }
    snapshot() { if (!this.renderer || !this.scene) return null; this.renderer.render(this.scene, this.cam); return this.renderer.domElement.toDataURL('image/png'); }
    setStrap(v) {
      const on = !!v && v !== 'none';
      this.chain.visible = on; this.loop.visible = on; if (this.root) this.root.position.x = on ? -0.22 : 0;
      if (on) this.metal.color.setHex({ silver: 0xd6d6d8, gold: 0xe3c16f, rose: 0xe8b4a0 }[v] || 0xd6d6d8);
      this._dirty = true;
    }
    setShell(v) {
      const c = new this.T.Color(v || '#C9CCD3');
      const pat = this.getAttribute('pattern');
      if (this._ptex) { this._ptex.dispose(); this._ptex = null; }
      if (pat && pat !== 'none') { this._ptex = this.patternTex(c, pat); this.shell.map = this._ptex; this.shell.color.set(0xffffff); }
      else { this.shell.map = null; this.shell.color.copy(c); }
      this.shell.needsUpdate = true; this._dirty = true;
      const hsl = {}; c.getHSL(hsl);
      this.ringMat.color.setHSL(hsl.h, hsl.s * 0.8, Math.max(0, hsl.l - 0.18));
    }
    play(a) { this.sim && this.sim.play(a); this._dirty = true; if (a === 'eat') this.say(this.pick(['냠냠, 맛있다', '오늘도 와줬구나', '배부르다…'])); }
    pick(a) { return a[Math.floor(Math.random() * a.length)]; }
    say(text) {
      if (this.hasAttribute('still')) return;
      if (!this.bubble) {
        const b = this.bubble = document.createElement('div');
        Object.assign(b.style, { position: 'absolute', left: '50%', top: '2%', transform: 'translate(-50%, 6px) scale(0.92)', opacity: '0', pointerEvents: 'none', zIndex: '2',
          padding: '10px 18px', borderRadius: '999px', background: '#FFFFFF', color: '#191F28', fontSize: '15px', fontWeight: '600', whiteSpace: 'nowrap',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)', transition: 'opacity 180ms cubic-bezier(0.32,0.72,0,1), transform 280ms cubic-bezier(0.32,0.72,0,1)', fontFamily: 'inherit' });
                this.bubbleText = document.createElement('span'); this.bubbleText.style.position = 'relative'; b.appendChild(this.bubbleText);
        this.appendChild(b);
      }
      this.bubbleText.textContent = text;
      const b = this.bubble; b.style.opacity = '1'; b.style.transform = 'translate(-50%, 0) scale(1)';
      clearTimeout(this._bt); this._bt = setTimeout(() => { b.style.opacity = '0'; b.style.transform = 'translate(-50%, 6px) scale(0.92)'; }, 2200);
    }

    build(T) {
      this.T = T;
      const w = this.clientWidth || 400, h = this.clientHeight || 400;
      const r = this.renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
      r.setPixelRatio(Math.min(2, devicePixelRatio)); r.setSize(w, h);
      r.outputColorSpace = T.SRGBColorSpace; r.toneMapping = T.ACESFilmicToneMapping; r.toneMappingExposure = 1.05;
      Object.assign(r.domElement.style, { width: '100%', height: '100%', display: 'block', cursor: 'grab' });
      this.appendChild(r.domElement);
      const scene = this.scene = new T.Scene();
      const cam = this.cam = new T.PerspectiveCamera(30, w / h, 0.1, 100); const fit = (asp) => { const t = Math.tan(15 * Math.PI / 180); const k = +(this.getAttribute('fitscale') || this.getAttribute('fit-scale') || 1); cam.position.set(0, -0.16, Math.max(1.62 / t, 1.5 / (t * asp)) / k); }; fit(w / h); this._fit = fit;

      const es = new T.Scene();
      es.add(new T.Mesh(new T.BoxGeometry(20, 20, 20), new T.MeshBasicMaterial({ color: 0x55575d, side: T.BackSide })));
      const panel = (x, y, z, sx, sy, i) => { const m = new T.Mesh(new T.PlaneGeometry(sx, sy), new T.MeshBasicMaterial({ color: new T.Color(i, i, i), side: T.DoubleSide })); m.position.set(x, y, z); m.lookAt(0, 0, 0); es.add(m); };
      panel(-5, 6, 6, 7, 4, 5); panel(6, 2, 5, 3, 7, 2.6); panel(0, -7, 3, 9, 2, 1.2); panel(0, 4, -7, 8, 4, 1.8);
      const pm = new T.PMREMGenerator(r); scene.environment = pm.fromScene(es, 0.04).texture;
      const dl = new T.DirectionalLight(0xffffff, 1.1); dl.position.set(-3, 4, 5); scene.add(dl);
      scene.add(new T.AmbientLight(0xffffff, 0.25));

      const root = this.root = new T.Group(); root.position.x = -0.22; scene.add(root);
      const egg = this.egg = new T.Group(); root.add(egg);

      // shell (superellipse egg)
      const U = 120, V = 90, pos = [], idx = [];
      for (let j = 0; j <= V; j++) {
        const yn = -Math.cos(Math.PI * j / V), R = Rf(yn);
        for (let i = 0; i <= U; i++) {
          const th = -Math.PI / 2 + 2 * Math.PI * i / U, c = Math.cos(th), s = Math.sin(th);
          pos.push(R * Math.sign(c) * Math.pow(Math.abs(c), 2 / PX), yn * H, D * R * Math.sign(s) * Math.pow(Math.abs(s), 2 / PX));
        }
      }
      for (let j = 0; j < V; j++) for (let i = 0; i < U; i++) { const a = j * (U + 1) + i, b = a + U + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
      const uv = []; for (let q = 0; q < pos.length; q += 3) uv.push(0.5 + pos[q] / 2.6, 0.5 + pos[q + 1] / 2.6);
      const g = new T.BufferGeometry(); g.setAttribute('position', new T.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
      this.shell = new T.MeshPhysicalMaterial({ color: 0xc9ccd3, roughness: 0.32, metalness: 0.15, clearcoat: 0.8, clearcoatRoughness: 0.18 });
      this.shell.onBeforeCompile = (sh) => {
        sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vOP; varying vec3 vON;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvOP = position; vON = normal;');
        sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vOP; varying vec3 vON;').replace('#include <map_fragment>', '#ifdef USE_MAP\n vec3 bw = pow(abs(normalize(vON)), vec3(4.0)); bw /= (bw.x + bw.y + bw.z);\n vec4 tc = texture2D(map, vOP.zy * 0.385 + 0.5) * bw.x + texture2D(map, vOP.xz * 0.385 + 0.5) * bw.y + texture2D(map, vOP.xy * 0.385 + 0.5) * bw.z;\n diffuseColor *= tc;\n #endif');
      };
      this.shell.customProgramCacheKey = () => 'loafy-tri';
      this.ringMat = new T.MeshStandardMaterial({ color: 0x8a8d94, roughness: 0.5 });
      egg.add(new T.Mesh(g, this.shell));
      // cat ears (rounded tips, recessed pink inner)
      const ears = this.ears = new T.Group(); egg.add(ears);
      const rtri = (w, h, r, cy, path) => {
        const P = [[0, h / 2 + cy], [-w / 2, -h / 2 + cy], [w / 2, -h / 2 + cy]], sh = path || new T.Shape();
        P.forEach((v, i) => {
          const pv = P[(i + 2) % 3], nx = P[(i + 1) % 3], d1 = new T.Vector2(pv[0] - v[0], pv[1] - v[1]).normalize(), d2 = new T.Vector2(nx[0] - v[0], nx[1] - v[1]).normalize();
          const a = [v[0] + d1.x * r, v[1] + d1.y * r], b = [v[0] + d2.x * r, v[1] + d2.y * r];
          if (i === 0) sh.moveTo(a[0], a[1]); else sh.lineTo(a[0], a[1]);
          sh.quadraticCurveTo(v[0], v[1], b[0], b[1]);
        });
        sh.closePath(); return sh;
      };
      const outer = rtri(0.72, 0.64, 0.2, 0);
      outer.holes.push(rtri(0.46, 0.4, 0.12, -0.06, new T.Path()));
      const earG = new T.ExtrudeGeometry(outer, { depth: 0.2, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 6, curveSegments: 20 }); earG.translate(0, 0, -0.1);
      const inG = new T.ExtrudeGeometry(rtri(0.5, 0.44, 0.13, -0.06), { depth: 0.04, bevelEnabled: false, curveSegments: 20 });
      const inMat = new T.MeshStandardMaterial({ color: 0xf4b6bf, roughness: 0.6 });
      [-1, 1].forEach(sd => {
        const g2 = new T.Group(); g2.position.set(sd * 0.5, 1.22, 0); g2.rotation.z = -sd * 0.36;
        g2.add(new T.Mesh(earG, this.shell));
        const i2 = new T.Mesh(inG, inMat); i2.position.set(0, 0.05, 0.12); g2.add(i2);
        ears.add(g2);
      });
      ears.visible = ['cat', 'cattail'].includes(this.getAttribute('form'));
      // tail
      const tail = this.tail = new T.Group(); egg.add(tail);
      const tcurve = new T.CatmullRomCurve3([new T.Vector3(0.25, -0.8, -0.2), new T.Vector3(0.75, -1.0, -0.42), new T.Vector3(1.1, -0.76, -0.5), new T.Vector3(1.04, -0.42, -0.5), new T.Vector3(1.06, -0.08, -0.5), new T.Vector3(1.32, 0.12, -0.46)]);
      tail.add(new T.Mesh(new T.TubeGeometry(tcurve, 64, 0.085, 14, false), this.shell));
      const ttip = new T.Mesh(new T.SphereGeometry(0.085, 20, 16), this.shell); ttip.position.copy(tcurve.getPoint(1)); tail.add(ttip);
      tail.visible = ['cattail', 'tail'].includes(this.getAttribute('form'));
      // seam line around the side
      const seam = new T.Mesh(new T.TorusGeometry(1, 0.008, 6, 160), this.ringMat);
      seam.rotation.x = Math.PI / 2; seam.scale.set(Rf(-0.02 / H) * 1.002, D * Rf(-0.02 / H) * 1.01, 1); seam.position.y = -0.02; seam.visible = false;

      const rr = (ctx, x, y, w2, h2, rad) => { ctx.beginPath(); ctx.roundRect(x, y, w2, h2, rad); ctx.fill(); };
      const alphaTex = (w2, h2, rad) => { const c = document.createElement('canvas'); c.width = 256; c.height = Math.round(256 * h2 / w2); const x = c.getContext('2d'); x.fillStyle = '#000'; x.fillRect(0, 0, c.width, c.height); x.fillStyle = '#fff'; rr(x, 2, 2, c.width - 4, c.height - 4, rad * c.width / w2); return new T.CanvasTexture(c); };
      const conform = (w2, h2, cx, cy, off, mat) => {
        const pg = new T.PlaneGeometry(w2, h2, 40, 40), p = pg.attributes.position;
        for (let i = 0; i < p.count; i++) p.setZ(i, zSurf(p.getX(i) + cx, p.getY(i) + cy) + off);
        pg.computeVertexNormals(); const m = new T.Mesh(pg, mat); m.position.set(cx, cy, 0); egg.add(m); return m;
      };
      const SY = 0.1;
      conform(1.5, 1.38, 0, SY, 0.006, new T.MeshPhysicalMaterial({ color: 0x0c0c10, roughness: 0.2, clearcoat: 1, alphaMap: alphaTex(1.5, 1.38, 0.26), alphaTest: 0.5 }));
      conform(1.56, 1.44, 0, SY, 0.003, new T.MeshStandardMaterial({ color: 0x000000, roughness: 0.6, transparent: true, opacity: 0.25, alphaMap: alphaTex(1.56, 1.44, 0.3) }));
      this.tex = new T.CanvasTexture(this.lcd); this.tex.magFilter = T.LinearFilter; this.tex.colorSpace = T.SRGBColorSpace;
      this.lcdMesh = conform(1.2, 1.2, 0, SY, 0.012, new T.MeshBasicMaterial({ map: this.tex, alphaMap: alphaTex(1.2, 1.2, 0.08), alphaTest: 0.5, toneMapped: false }));
      conform(1.24, 1.24, 0, SY, 0.02, new T.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.04, transparent: true, opacity: 0.12, clearcoat: 1, alphaMap: alphaTex(1.24, 1.24, 0.1) }));

      // logo
      const lc = document.createElement('canvas'); lc.width = 512; lc.height = 128; const lx = lc.getContext('2d');
      { const LG = (window.LoafySprites && window.LoafySprites.LOGO) || [], ls = 5.4, ox = (512 - 46 * ls) / 2, oy = (128 - 22 * ls) / 2; LG.forEach(([x, y, w, h, c]) => { lx.fillStyle = c ? '#FF7474' : '#26262c'; lx.fillRect(ox + x * ls, oy + y * ls, w * ls + 0.5, h * ls + 0.5); }); }
      const lt = new T.CanvasTexture(lc); lt.colorSpace = T.SRGBColorSpace;
      conform(0.56, 0.14, 0, 1.0, 0.004, new T.MeshStandardMaterial({ map: lt, transparent: true, roughness: 0.5 }));
      // back side: battery cover, logo, paw
      const conformBack = (w2, h2, cx, cy, off, mat) => {
        const pg = new T.PlaneGeometry(w2, h2, 40, 40), p = pg.attributes.position;
        for (let i = 0; i < p.count; i++) p.setZ(i, -(zSurf(p.getX(i) + cx, p.getY(i) + cy) + off));
        pg.computeVertexNormals(); const nA = pg.attributes.normal; for (let i = 0; i < nA.count; i++) nA.setXYZ(i, -nA.getX(i), -nA.getY(i), -nA.getZ(i));
        const m = new T.Mesh(pg, mat); m.position.set(cx, cy, 0); egg.add(m); return m;
      };
      conformBack(0.96, 0.62, 0, 0.12, 0.004, new T.MeshStandardMaterial({ color: 0x000000, roughness: 0.7, transparent: true, opacity: 0.13, alphaMap: alphaTex(0.96, 0.62, 0.16), side: T.DoubleSide }));
      const lt2 = lt.clone(); lt2.wrapS = T.RepeatWrapping; lt2.repeat.x = -1; lt2.offset.x = 1; lt2.needsUpdate = true;
      conformBack(0.56, 0.14, 0, 0.3, 0.008, new T.MeshStandardMaterial({ map: lt2, transparent: true, roughness: 0.5, side: T.DoubleSide }));
      const pc2 = document.createElement('canvas'); pc2.width = pc2.height = 120; if (window.LoafySprites && window.LoafySprites.drawIcon) window.LoafySprites.drawIcon(pc2.getContext('2d'), 'pawpink', 10, true, '#000');
      const pt2 = new T.CanvasTexture(pc2); pt2.colorSpace = T.SRGBColorSpace; pt2.wrapS = T.RepeatWrapping; pt2.repeat.x = -1; pt2.offset.x = 1; pt2.magFilter = T.NearestFilter; pt2.minFilter = T.NearestFilter; pt2.generateMipmaps = false;
      conformBack(0.3, 0.3, 0, -0.04, 0.008, new T.MeshStandardMaterial({ map: pt2, transparent: true, roughness: 0.55, side: T.DoubleSide }));

      // buttons
      const btnMat = new T.MeshPhysicalMaterial({ color: 0x1b1b20, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.1 });
      const holeMat = new T.MeshStandardMaterial({ color: 0x050506, roughness: 0.9 });
      this.buttons = [];
      [[-0.46, -0.84], [0, -0.96], [0.46, -0.84]].forEach(([x, y], i) => {
        const z = zSurf(x, y), e = 0.01;
        const n = new T.Vector3(-(zSurf(x + e, y) - zSurf(x - e, y)) / (2 * e), -(zSurf(x, y + e) - zSurf(x, y - e)) / (2 * e), 1).normalize();
        const holder = new T.Group(); holder.position.set(x, y, z); holder.quaternion.setFromUnitVectors(new T.Vector3(0, 0, 1), n); egg.add(holder);
        const hole = new T.Mesh(new T.CylinderGeometry(0.125, 0.125, 0.04, 40), holeMat); hole.rotation.x = Math.PI / 2; hole.position.z = 0.0; holder.add(hole);
        const ring = new T.Mesh(new T.TorusGeometry(0.128, 0.016, 12, 48), this.ringMat); ring.position.z = 0.01; holder.add(ring);
        const b = new T.Mesh(new T.CylinderGeometry(0.1, 0.104, 0.1, 40), btnMat); b.rotation.x = Math.PI / 2; b.position.z = 0.03; b.userData.idx = i; holder.add(b);
        const cap = new T.Mesh(new T.SphereGeometry(0.1, 32, 12, 0, Math.PI * 2, 0, Math.PI / 2), btnMat); cap.scale.y = 0.25; cap.position.y = 0.05; b.add(cap); cap.userData.idx = i;
        this.buttons.push(b);
      });

      // keychain
      const metal = this.metal = new T.MeshStandardMaterial({ color: 0xd6d6d8, metalness: 1, roughness: 0.22 });
      const bail = new T.Vector3(0.5, 1.1, -0.02);
      const loop = this.loop = new T.Mesh(new T.TorusGeometry(0.075, 0.018, 12, 32), metal); loop.position.copy(bail); loop.rotation.y = Math.PI / 2.4; egg.add(loop);
      const chain = this.chain = new T.Group(); chain.position.copy(bail); egg.add(chain);
      const ball = new T.SphereGeometry(0.026, 12, 10);
      const rx = 0.42, ry = 0.95, phi0 = (128 * Math.PI) / 180, cxy = [-rx * Math.cos(phi0), -ry * Math.sin(phi0)];
      for (let k = 0; k < 76; k++) {
        const ph = phi0 - (k / 76) * Math.PI * 2;
        const m = new T.Mesh(ball, metal); m.position.set(cxy[0] + rx * Math.cos(ph), cxy[1] + ry * Math.sin(ph), -0.04 * Math.sin(ph * 2)); chain.add(m);
      }
      const clasp = new T.Mesh(new T.CylinderGeometry(0.034, 0.034, 0.14, 16), metal); clasp.position.set(cxy[0] + rx * Math.cos(phi0 - Math.PI * 1.1), cxy[1] + ry * Math.sin(phi0 - Math.PI * 1.1), 0); clasp.rotation.z = 0.6; chain.add(clasp);
      this.setStrap(this.getAttribute('strap'));

      // contact shadow
      const sc = document.createElement('canvas'); sc.width = sc.height = 128; const sx = sc.getContext('2d');
      const gr = sx.createRadialGradient(64, 64, 4, 64, 64, 62); gr.addColorStop(0, 'rgba(0,0,0,0.28)'); gr.addColorStop(0.5, 'rgba(0,0,0,0.1)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); sx.fillStyle = gr; sx.fillRect(0, 0, 128, 128);
      const shadow = this.shadowM = new T.Mesh(new T.PlaneGeometry(2.4, 0.42), new T.MeshBasicMaterial({ map: new T.CanvasTexture(sc), transparent: true, depthWrite: false }));
      shadow.position.set(0, -1.42, -0.1); shadow.rotation.x = -0.05; root.add(shadow);

      this.setShell(this.getAttribute('color'));

      // interaction
      const ray = new T.Raycaster(), v2 = new T.Vector2();
      const hit = (e) => { if (Math.cos(this.rot.y) < 0.25) return -1; const b = r.domElement.getBoundingClientRect(); v2.set(((e.clientX - b.left) / b.width) * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1); ray.setFromCamera(v2, cam); const h2 = ray.intersectObjects(this.buttons.concat([this.lcdMesh]), true)[0]; return h2 ? (h2.object === this.lcdMesh ? 9 : h2.object.userData.idx) : -1; };
      this.drag = null; this.rot = { x: 0, y: 0, tx: 0, ty: 0 }; this.press = [0, 0, 0];
      r.domElement.addEventListener('pointerdown', (e) => {
        const i = hit(e);
        if (this.hasAttribute('still')) return;
        if (i === 9) { this.dispatchEvent(new CustomEvent('loafy:open-lcd', { bubbles: true, composed: true })); return; }
        if (i >= 0) { this.press[i] = performance.now(); this.button(i); return; }
        this.drag = { x: e.clientX, y: e.clientY, ry: this.rot.ty, rx: this.rot.tx }; r.domElement.setPointerCapture(e.pointerId); r.domElement.style.cursor = 'grabbing';
      });
      r.domElement.addEventListener('pointermove', (e) => {
        if (this.drag) { this.rot.ty = this.drag.ry + (e.clientX - this.drag.x) * 0.012; this.rot.tx = Math.max(-0.6, Math.min(0.6, this.drag.rx + (e.clientY - this.drag.y) * 0.006)); }
        else r.domElement.style.cursor = hit(e) >= 0 ? 'pointer' : 'grab';
      });
      const up = () => { if (this.drag) { const P2 = Math.PI * 2, a = ((this.rot.ty % P2) + P2) % P2; this._dwell = (a > 1.2 && a < P2 - 1.2) ? 4200 : 600; this._rel = performance.now(); } this.drag = null; this.rot.tx = 0; r.domElement.style.cursor = 'grab'; };
      r.domElement.addEventListener('pointerup', up); r.domElement.addEventListener('pointercancel', up);

      this.ro = new ResizeObserver(() => { const W2 = this.clientWidth, H2 = this.clientHeight; if (!W2 || !H2) return; r.setSize(W2, H2); cam.aspect = W2 / H2; this._fit(W2 / H2); cam.updateProjectionMatrix(); });
      this.ro.observe(this);

      this.scene = scene; this.lastLcd = 0; this.t0 = performance.now();
      const tick = (now) => {
        this.raf = requestAnimationFrame(tick);
        const still = this.hasAttribute('still'); if (still) this.drag = null;
        const t = still ? 0 : (now - this.t0) / 1000;
        if (!this.drag && this._rel && now - this._rel > this._dwell) { this.rot.ty = Math.round(this.rot.ty / (Math.PI * 2)) * Math.PI * 2; this._rel = 0; }
        const idle = !this.drag && Math.abs(this.rot.y - this.rot.ty) < 0.02;
        this.rot.y += ((this.rot.ty + (this.drag ? 0 : Math.sin(t * 0.6) * 0.14)) - this.rot.y) * 0.12;
        this.rot.x += ((this.rot.tx + (this.drag ? 0 : Math.sin(t * 0.8) * 0.04)) - this.rot.x) * 0.12;
        egg.rotation.set(still ? 0 : this.rot.x, still ? 0 : this.rot.y - 0.12, 0);
        egg.position.y = Math.sin(t * 1.3) * 0.035;
        shadow.scale.setScalar(1 - Math.sin(t * 1.3) * 0.04);
        this.chain.rotation.z = Math.sin(t * 1.3 + 0.6) * 0.05 - this.rot.y * 0.15;
        this.buttons.forEach((b, i) => { const p = Math.max(0, 1 - (now - this.press[i]) / 160); b.position.z = 0.03 - p * 0.035; });
        if (now - this.lastLcd > 80 || this._dirty) { this.drawLcd(now); this.lastLcd = now; this._dirty = false; }
        r.render(scene, cam);
      };
      this.raf = requestAnimationFrame(tick);
    }

    button(i) {
      this._dirty = true; const sim = this.sim, wasStatus = sim.mode === 'status';
      const r = sim.button(i);
      if (r === 'feed') this.dispatchEvent(new CustomEvent('loafy:device-feed', { bubbles: true }));
      const mood = sim.mood, streak = this.getAttribute('streak') || '0';
      const feel = mood >= 4 ? '기분 최고야' : mood >= 3 ? '기분 좋아' : mood >= 2 ? '그냥 그래' : '조금 심심해';
      let t;
      if (i === 0) t = sim.anim ? null : ['밥 먹을래?', '쓰다듬어 줄래?', '내 상태 볼래?'][sim.menu];
      else if (i === 1) t = r === 'feed' ? null : r === 'pet' ? this.pick(['골골골… ' + feel, '거기 좋아', '한 번 더 해줘']) : wasStatus ? '다시 놀자' : sim.mode === 'status' ? feel + ' · ' + streak + '일째 함께야' : null;
      else t = this.pick(['응, 알겠어', '나 여기 있을게']);
      if (t) this.say(t);
    }
    drawLcd(now) {
      if (!this.sim) return;
      this.sim.draw(this.lcd.getContext('2d'), now, { body: this.getAttribute('body'), coat: this.getAttribute('coat'), lcd: this.getAttribute('lcd'), streak: this.getAttribute('streak'), scene: this.getAttribute('scene'), lcdbg: this.getAttribute('lcdbg') });
      if (this.tex) this.tex.needsUpdate = true;
    }
  }
  if (!customElements.get('loafy-tama')) customElements.define('loafy-tama', LoafyTama);
})();
