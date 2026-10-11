/* Routerboard.se — designkoncept */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const kr = n => n.toLocaleString('sv-SE') + ' kr';

  /* ---------- Device illustrations (inline SVG) ---------- */
  let uid = 0;
  const ART = {
    router() {
      const id = 'g' + (uid++);
      const ports = [0,1,2,3,4].map(i => `
        <rect x="${62 + i*30}" y="104" width="24" height="20" rx="2" fill="#07090c" stroke="#2b333e"/>
        <rect x="${66 + i*30}" y="108" width="16" height="3" fill="#1a2028"/>
        <circle cx="${74 + i*30}" cy="94" r="2" fill="${i < 3 ? 'var(--signal)' : '#2b333e'}"/>`).join('');
      return `<svg viewBox="0 0 280 200"><defs>
        <linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a313b"/><stop offset="1" stop-color="#13171d"/></linearGradient></defs>
        <ellipse cx="140" cy="160" rx="110" ry="12" fill="#000" opacity=".5"/>
        <path d="M40 70 L60 52 L240 52 L220 70 Z" fill="#323a45"/>
        <rect x="40" y="70" width="180" height="80" rx="6" fill="url(#${id})" stroke="#3a434f"/>
        <path d="M220 70 L240 52 L240 132 L220 150 Z" fill="#0e1116"/>
        <text x="54" y="88" font-family="Geist Mono,monospace" font-size="8" fill="#5b6672">hEX</text>
        ${ports}
      </svg>`;
    },
    switch() {
      const id = 'g' + (uid++);
      let p = '';
      for (let r = 0; r < 2; r++) for (let i = 0; i < 12; i++) {
        const x = 34 + i * 15 + Math.floor(i / 4) * 4, y = 70 + r * 18;
        p += `<rect x="${x}" y="${y}" width="12" height="13" rx="1.5" fill="#07090c" stroke="#29313b"/>`;
        if ((i + r * 3) % 4 !== 3) p += `<rect x="${x + 2}" y="${y + 1.5}" width="3" height="1.6" fill="var(--signal)" opacity=".9"/>`;
      }
      for (let i = 0; i < 2; i++) p += `<rect x="${236 + i*0}" y="${70 + i*18}" width="20" height="13" rx="1.5" fill="#07090c" stroke="#3b4652"/><rect x="${240}" y="${74 + i*18}" width="12" height="5" fill="#1d2630"/>`;
      return `<svg viewBox="0 0 290 170"><defs>
        <linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b323c"/><stop offset="1" stop-color="#14181e"/></linearGradient></defs>
        <ellipse cx="145" cy="132" rx="135" ry="10" fill="#000" opacity=".5"/>
        <path d="M16 56 L30 44 L276 44 L264 56 Z" fill="#323a45"/>
        <rect x="16" y="56" width="248" height="62" rx="4" fill="url(#${id})" stroke="#3a434f"/>
        <path d="M264 56 L276 44 L276 106 L264 118 Z" fill="#0d1015"/>
        <rect x="8" y="58" width="10" height="58" rx="2" fill="#1d232b" stroke="#333c47"/>
        <circle cx="13" cy="66" r="2" fill="#07090c"/><circle cx="13" cy="108" r="2" fill="#07090c"/>
        ${p}
      </svg>`;
    },
    ap() {
      const id = 'g' + (uid++), id2 = 'g' + (uid++);
      return `<svg viewBox="0 0 260 200"><defs>
        <radialGradient id="${id}" cx=".4" cy=".3" r=".9"><stop offset="0" stop-color="#f4f6f8"/><stop offset=".7" stop-color="#c9cfd6"/><stop offset="1" stop-color="#8e979f"/></radialGradient>
        <radialGradient id="${id2}" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="var(--signal)" stop-opacity=".35"/><stop offset="1" stop-color="var(--signal)" stop-opacity="0"/></radialGradient></defs>
        <g fill="none" stroke="var(--signal)" stroke-width="1.2" opacity=".55">
          <path d="M88 56 Q130 24 172 56"><animate attributeName="opacity" values="0;1;0" dur="2.4s" repeatCount="indefinite"/></path>
          <path d="M70 46 Q130 2 190 46"><animate attributeName="opacity" values="0;1;0" dur="2.4s" begin=".4s" repeatCount="indefinite"/></path>
          <path d="M52 36 Q130 -20 208 36"><animate attributeName="opacity" values="0;1;0" dur="2.4s" begin=".8s" repeatCount="indefinite"/></path>
        </g>
        <ellipse cx="130" cy="160" rx="96" ry="14" fill="#000" opacity=".55"/>
        <ellipse cx="130" cy="122" rx="96" ry="34" fill="#6b747d"/>
        <ellipse cx="130" cy="112" rx="96" ry="34" fill="url(#${id})"/>
        <ellipse cx="130" cy="112" rx="70" ry="24" fill="none" stroke="#fff" stroke-opacity=".5"/>
        <ellipse cx="130" cy="112" rx="40" ry="14" fill="url(#${id2})"/>
        <ellipse cx="130" cy="112" rx="5" ry="2" fill="var(--signal)"/>
      </svg>`;
    },
    lte() {
      const id = 'g' + (uid++);
      return `<svg viewBox="0 0 240 240"><defs>
        <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f2f4f6"/><stop offset="1" stop-color="#aab2ba"/></linearGradient></defs>
        <ellipse cx="120" cy="206" rx="80" ry="10" fill="#000" opacity=".5"/>
        <rect x="58" y="20" width="10" height="90" rx="5" fill="#2a313b" transform="rotate(-8 63 110)"/>
        <rect x="172" y="20" width="10" height="90" rx="5" fill="#2a313b" transform="rotate(8 177 110)"/>
        <rect x="50" y="96" width="140" height="104" rx="14" fill="url(#${id})"/>
        <rect x="50" y="96" width="140" height="104" rx="14" fill="none" stroke="#fff" stroke-opacity=".6"/>
        <g font-family="Geist Mono,monospace" font-size="7" fill="#5b636c"><text x="66" y="188">5G</text></g>
        <g>${[0,1,2,3,4].map(i => `<rect x="${92 + i*12}" y="${170 - i*5}" width="7" height="${10 + i*5}" rx="1.5" fill="${i < 4 ? '#1b2a00' : '#c3c9cf'}"/>`).join('')}</g>
        <circle cx="172" cy="114" r="3" fill="var(--signal)"><animate attributeName="opacity" values="1;.2;1" dur="1.6s" repeatCount="indefinite"/></circle>
      </svg>`;
    },
    outdoor() {
      const id = 'g' + (uid++);
      return `<svg viewBox="0 0 320 220"><defs>
        <radialGradient id="${id}" cx=".35" cy=".35" r=".8"><stop offset="0" stop-color="#f5f7f9"/><stop offset="1" stop-color="#9aa3ab"/></radialGradient></defs>
        <rect x="70" y="40" width="8" height="180" fill="#2a313b"/>
        <rect x="242" y="40" width="8" height="180" fill="#2a313b"/>
        <path d="M108 90 L212 90" stroke="var(--signal)" stroke-width="1.5" stroke-dasharray="3 7" class="flow"/>
        <path d="M108 102 L212 102" stroke="var(--cyan)" stroke-width="1.5" stroke-dasharray="3 7" class="flow" style="animation-direction:reverse"/>
        <g><circle cx="94" cy="96" r="34" fill="url(#${id})"/><circle cx="94" cy="96" r="22" fill="none" stroke="#fff" stroke-opacity=".5"/><circle cx="94" cy="96" r="4" fill="#4a535c"/></g>
        <g><circle cx="226" cy="96" r="34" fill="url(#${id})"/><circle cx="226" cy="96" r="22" fill="none" stroke="#fff" stroke-opacity=".5"/><circle cx="226" cy="96" r="4" fill="#4a535c"/></g>
        <text x="160" y="80" text-anchor="middle" font-family="Geist Mono,monospace" font-size="9" fill="var(--signal)">60 GHz · 2 Gbit/s</text>
      </svg>`;
    },
    rack() {
      const id = 'g' + (uid++);
      let bays = '';
      for (let i = 0; i < 10; i++) bays += `<rect x="${46 + i*19}" y="78" width="15" height="44" rx="2" fill="#0a0d11" stroke="#2c343e"/><circle cx="${53.5 + i*19}" cy="114" r="1.6" fill="${i % 3 ? 'var(--signal)' : 'var(--cyan)'}"><animate attributeName="opacity" values="1;.2;1" dur="${0.6 + (i % 4) * .35}s" repeatCount="indefinite"/></circle>`;
      return `<svg viewBox="0 0 290 180"><defs>
        <linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b323c"/><stop offset="1" stop-color="#12161b"/></linearGradient></defs>
        <ellipse cx="145" cy="150" rx="135" ry="10" fill="#000" opacity=".5"/>
        <path d="M30 64 L44 50 L266 50 L252 64 Z" fill="#323a45"/>
        <rect x="30" y="64" width="222" height="72" rx="4" fill="url(#${id})" stroke="#3a434f"/>
        <path d="M252 64 L266 50 L266 122 L252 136 Z" fill="#0d1015"/>
        ${bays}
        <rect x="20" y="66" width="12" height="68" rx="2" fill="#1d232b" stroke="#333c47"/>
      </svg>`;
    },
    tower() {
      const id = 'g' + (uid++);
      return `<svg viewBox="0 0 240 240"><defs>
        <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e9edf0"/><stop offset="1" stop-color="#a7afb7"/></linearGradient></defs>
        <ellipse cx="120" cy="210" rx="70" ry="10" fill="#000" opacity=".5"/>
        <path d="M82 30 Q120 18 158 30 L162 196 Q120 208 78 196 Z" fill="url(#${id})"/>
        <path d="M82 30 Q120 18 158 30 Q120 42 82 30Z" fill="#fff" opacity=".7"/>
        <circle cx="120" cy="70" r="4" fill="var(--signal)"/>
        <path d="M104 92 L136 92" stroke="#7e8790" stroke-width="2" stroke-linecap="round"/>
        <g fill="none" stroke="var(--signal)" stroke-width="1.2" opacity=".6">
          <path d="M176 70 Q190 100 176 130"><animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/></path>
          <path d="M188 58 Q208 100 188 142"><animate attributeName="opacity" values="0;1;0" dur="2s" begin=".4s" repeatCount="indefinite"/></path>
        </g>
      </svg>`;
    }
  };

  /* ---------- Catalog ---------- */
  const P = [
    { id:'hap-ax-s', name:'hAP ax S', cat:'Trådlöst hem & kontor', c:['home','wifi6','router'], art:'tower', price:749, specs:['WiFi 6','5× GbE','2.5G SFP'], tags:['best'], stock:42 },
    { id:'hex-s-25', name:'hEX S (2025)', cat:'Routrar · Ethernet', c:['router'], art:'router', price:649, specs:['5× GbE','SFP','PoE-out'], tags:['new','best'], stock:118 },
    { id:'cap-ax', name:'cAP ax', cat:'Access points', c:['home','wifi6'], art:'ap', price:1229, specs:['WiFi 6','PoE-in','Tak/vägg'], tags:['best'], stock:57 },
    { id:'chateau-lte12', name:'Chateau LTE12 kit', cat:'5G / LTE / 4G', c:['lte','home'], art:'lte', price:1759, specs:['LTE Cat 12','WiFi 5','5× GbE'], tags:['new'], stock:21 },
    { id:'sxt-lte6', name:'SXT LTE6 kit', cat:'5G / LTE / 4G · Utomhus', c:['lte','outdoor'], art:'outdoor', price:899, was:1129, specs:['LTE Cat 6','IP54','PoE'], tags:['sale'], stock:9 },
    { id:'css318', name:'CSS318-16G-2S+IN', cat:'Switchar · Ethernet', c:['switch'], art:'switch', price:1319, specs:['16× GbE','2× SFP+','SwOS'], tags:['best'], stock:33 },
    { id:'crs418', name:'CRS418-8P-8G-2S+5axQ2axQ-RM', cat:'Switchar · PoE · WiFi', c:['switch','office','wifi6'], art:'switch', price:4749, specs:['8× PoE','2× SFP+','WiFi 6 Quad'], tags:['new'], stock:6 },
    { id:'l009', name:'L009UiGS-RM', cat:'Routrar · Ethernet', c:['router','office'], art:'switch', price:1129, specs:['8× GbE','2.5G SFP','Rack 1U'], tags:[], stock:25 },
    { id:'rose', name:'RouterOS Enterprise Data Server', cat:'ROSE Data Server', c:['dc'], art:'rack', price:18590, specs:['20× U.2','100G','ROSE'], tags:['new'], stock:2 },
    { id:'wap-be', name:'cAP be', cat:'WiFi 7 be', c:['wifi7','home','office'], art:'ap', price:1890, specs:['WiFi 7','MLO','2.5G PoE'], tags:['new'], stock:14 },
    { id:'hap-be3', name:'hAP be³', cat:'WiFi 7 be · Router', c:['wifi7','home','router'], art:'tower', price:1690, specs:['WiFi 7','2.5G WAN','4× GbE'], tags:['new'], stock:30 },
    { id:'cube-60', name:'Cube 60Pro ac kit', cat:'Radiolänkar · 60 GHz', c:['outdoor'], art:'outdoor', price:2190, was:2490, specs:['60 GHz','~1 km','PoE'], tags:['sale'], stock:11 },
    { id:'crs326', name:'CRS326-24G-2S+RM', cat:'Switchar · SFP', c:['switch','office'], art:'switch', price:2290, specs:['24× GbE','2× SFP+','RouterOS'], tags:['best'], stock:19 },
    { id:'netpower', name:'netPower 16P', cat:'Switchar · PoE · Utomhus', c:['switch','outdoor'], art:'switch', price:2690, specs:['15× PoE','IP-skydd','2× SFP+'], tags:[], stock:7 },
    { id:'atl-5g', name:'ATL 5G R16', cat:'5G / LTE · Utomhus', c:['lte','outdoor'], art:'lte', price:3490, specs:['5G NR','IP66','PoE'], tags:['new'], stock:8 },
    { id:'rb5009', name:'RB5009UG+S+IN', cat:'Routrar · Ethernet', c:['router','office'], art:'router', price:2190, specs:['10G SFP+','2.5G','7× GbE'], tags:['best'], stock:44 }
  ];
  const byId = Object.fromEntries(P.map(p => [p.id, p]));

  /* ---------- Bento art ---------- */
  $$('.tile__art').forEach(el => el.innerHTML = ART[el.dataset.art]());
  $$('.tile').forEach(t => t.addEventListener('pointermove', e => {
    const r = t.getBoundingClientRect();
    t.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    t.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }));

  /* ---------- Product grid ---------- */
  const grid = $('#productGrid');
  const tagLabel = { new:'Nyhet', sale:'Rea', best:'Bästsäljare' };
  let filter = 'all', catFilter = null;
  function renderGrid() {
    let list = P.filter(p => filter === 'all' || p.tags.includes(filter));
    if (catFilter) list = P.filter(p => p.c.includes(catFilter));
    if (filter === 'all' && !catFilter) list = list.slice(0, 12);
    grid.innerHTML = list.map((p, i) => `
      <article class="card" style="animation-delay:${i * 40}ms">
        <div class="card__media">
          <div class="card__tags">${p.tags.map(t => `<span class="tag tag--${t}">${t === 'sale' ? '−' + Math.round((1 - p.price / p.was) * 100) + '%' : tagLabel[t]}</span>`).join('')}</div>
          <span class="stock"><i class="dot" style="${p.stock < 10 ? 'background:#ffb03e' : ''}"></i>${p.stock < 10 ? 'Få kvar' : 'I lager'}</span>
          ${ART[p.art]()}
        </div>
        <div class="card__body">
          <span class="card__cat">${p.cat}</span>
          <h3 class="card__name">${p.name}</h3>
          <div class="card__specs">${p.specs.map(s => `<span>${s}</span>`).join('')}</div>
          <div class="card__foot">
            <span class="price ${p.was ? 'price--sale' : ''}">${kr(p.price)}${p.was ? `<s>${kr(p.was)}</s>` : ''}</span>
            <button class="add" data-add="${p.id}" aria-label="Lägg ${p.name} i varukorgen">+</button>
          </div>
        </div>
      </article>`).join('');
  }
  renderGrid();

  const ink = $('#tabInk');
  function moveInk(btn) { ink.style.width = btn.offsetWidth + 'px'; ink.style.transform = `translateX(${btn.offsetLeft - 4}px)`; }
  $$('.tab').forEach(b => b.addEventListener('click', () => {
    $$('.tab').forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active'); moveInk(b);
    filter = b.dataset.filter; catFilter = null; renderGrid();
  }));
  requestAnimationFrame(() => moveInk($('.tab.is-active')));
  addEventListener('resize', () => moveInk($('.tab.is-active')));

  // Category links filter the grid
  $$('[data-cat]').forEach(a => a.addEventListener('click', () => {
    catFilter = a.dataset.cat; filter = 'all';
    $$('.tab').forEach(x => x.classList.remove('is-active'));
    const first = $('.tab'); first.classList.add('is-active'); moveInk(first);
    renderGrid(); closeMega();
    toast(`Visar: ${a.querySelector('h3')?.textContent || a.textContent.trim()}`);
  }));

  /* ---------- Cart ---------- */
  let cart = {};
  try { cart = JSON.parse(localStorage.getItem('rb-cart') || '{}'); } catch (e) {}
  const FREE = 1500;
  function saveCart() { try { localStorage.setItem('rb-cart', JSON.stringify(cart)); } catch (e) {} }
  function renderCart() {
    const ids = Object.keys(cart).filter(id => byId[id]);
    const count = ids.reduce((s, id) => s + cart[id], 0);
    const sum = ids.reduce((s, id) => s + cart[id] * byId[id].price, 0);
    const cc = $('#cartCount'); cc.textContent = count; cc.classList.toggle('has', count > 0);
    $('#cartList').innerHTML = ids.length ? ids.map(id => {
      const p = byId[id];
      return `<li><div class="thumb">${ART[p.art]()}</div>
        <div><div class="nm">${p.name}</div><div class="qtyctl"><button data-q="${id}" data-d="-1">−</button>${cart[id]}<button data-q="${id}" data-d="1">+</button></div></div>
        <span class="mono">${kr(p.price * cart[id])}</span></li>`;
    }).join('') : '<li class="drawer__empty">Varukorgen är tom.<br>Dags att uppgradera nätverket?</li>';
    $('#cartSum').textContent = kr(sum);
    const left = FREE - sum;
    $('#shipText').textContent = left > 0 ? `${kr(left)} kvar till fri frakt` : '✓ Du har fri frakt';
    $('#shipFill').style.width = Math.min(100, sum / FREE * 100) + '%';
    saveCart();
  }
  function add(id, n = 1, quiet) {
    cart[id] = (cart[id] || 0) + n;
    if (cart[id] <= 0) delete cart[id];
    renderCart();
    const cc = $('#cartCount'); cc.classList.remove('bump'); void cc.offsetWidth; cc.classList.add('bump');
    if (!quiet && n > 0) toast(`${byId[id].name} lades i varukorgen`);
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-add]');
    if (a) { add(a.dataset.add); a.classList.add('done'); a.textContent = '✓'; setTimeout(() => { a.classList.remove('done'); a.textContent = '+'; }, 1200); }
    const q = e.target.closest('[data-q]');
    if (q) add(q.dataset.q, +q.dataset.d, true);
  });
  const openCart = () => { $('#cart').classList.add('on'); $('#scrim').classList.add('on'); $('#cart').setAttribute('aria-hidden', 'false'); };
  const closeCart = () => { $('#cart').classList.remove('on'); $('#scrim').classList.remove('on'); $('#cart').setAttribute('aria-hidden', 'true'); };
  $('#openCart').onclick = openCart; $('#closeCart').onclick = closeCart; $('#scrim').onclick = closeCart;
  renderCart();

  /* ---------- Toast ---------- */
  let tt;
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('on'), 2200); }

  /* ---------- Mega menu & nav ---------- */
  const megaBtn = $('#megaBtn'), mega = $('#mega');
  function closeMega() { mega.hidden = true; megaBtn.setAttribute('aria-expanded', 'false'); }
  megaBtn.onclick = e => { e.stopPropagation(); const open = mega.hidden; mega.hidden = !open; megaBtn.setAttribute('aria-expanded', String(open)); };
  document.addEventListener('click', e => { if (!e.target.closest('#mega') && !e.target.closest('#megaBtn')) closeMega(); });
  $('#burger').onclick = () => $('.nav__links').classList.toggle('open');
  $$('.nav__links a').forEach(a => a.addEventListener('click', () => $('.nav__links').classList.remove('open')));
  addEventListener('scroll', () => $('#nav').classList.toggle('is-scrolled', scrollY > 10), { passive: true });

  /* ---------- Command palette ---------- */
  const pal = $('#palette'), pin = $('#paletteInput'), plist = $('#paletteList');
  let sel = 0, results = [];
  function renderPal() {
    const q = pin.value.trim().toLowerCase();
    results = P.filter(p => !q || (p.name + ' ' + p.cat + ' ' + p.specs.join(' ')).toLowerCase().includes(q)).slice(0, 8);
    sel = Math.min(sel, Math.max(0, results.length - 1));
    plist.innerHTML = results.length ? results.map((p, i) => `
      <li class="${i === sel ? 'sel' : ''}" data-i="${i}"><div class="thumb">${ART[p.art]()}</div>
      <div><div>${p.name}</div><div class="meta">${p.cat} · ${p.specs.join(' · ')}</div></div>
      <span class="mono">${kr(p.price)}</span></li>`).join('') : `<li class="empty">Inga träffar på ”${pin.value}”. Ring oss — vi har mer än det som syns.</li>`;
  }
  function openPal() { pal.hidden = false; pin.value = ''; sel = 0; renderPal(); setTimeout(() => pin.focus(), 10); }
  function closePal() { pal.hidden = true; }
  $('#openSearch').onclick = openPal;
  pal.addEventListener('click', e => { if (e.target === pal) closePal(); const li = e.target.closest('li[data-i]'); if (li) { add(results[+li.dataset.i].id); closePal(); } });
  pin.addEventListener('input', () => { sel = 0; renderPal(); });
  addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); pal.hidden ? openPal() : closePal(); }
    if (e.key === 'Escape') { closePal(); closeCart(); closeMega(); }
    if (!pal.hidden) {
      if (e.key === 'ArrowDown') { sel = (sel + 1) % results.length; renderPal(); e.preventDefault(); }
      if (e.key === 'ArrowUp') { sel = (sel - 1 + results.length) % results.length; renderPal(); e.preventDefault(); }
      if (e.key === 'Enter' && results[sel]) { add(results[sel].id); closePal(); }
    }
  });

  /* ---------- Network guide ---------- */
  const G = { place: 'home', size: 25, prio: 'value' };
  $$('.guide__q .seg').forEach(seg => seg.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('button', seg).forEach(x => x.classList.remove('is-on')); b.classList.add('is-on');
    G[seg.parentElement.dataset.q] = b.dataset.v; renderGuide();
  }));
  const range = $('#sizeRange');
  range.addEventListener('input', () => { G.size = +range.value; $('#sizeOut').textContent = G.size; renderGuide(); });

  let bundle = [];
  function buildBundle() {
    const b = [], aps = Math.max(1, Math.ceil(G.size / (G.prio === 'speed' ? 20 : 30)));
    const router = G.size > 60 || G.place === 'office' ? 'rb5009' : (G.prio === 'speed' ? 'hap-be3' : 'hap-ax-s');
    if (G.place === 'remote') b.push(['chateau-lte12', 1, 'Uppkoppling via 4G/LTE']);
    b.push([G.place === 'remote' ? 'hex-s-25' : router, 1, 'Hjärtat i nätverket']);
    if (G.place === 'site') b.push(['cube-60', 2, 'Trådlös gigabit mellan husen']);
    if (G.prio === 'poe' || G.size > 40 || G.place === 'office') b.push([G.prio === 'poe' ? 'crs418' : 'crs326', 1, G.prio === 'poe' ? 'Strömmar AP & kameror' : 'Kabelkapacitet för alla']);
    const extraAps = G.place === 'home' && G.size <= 30 && G.prio !== 'speed' ? 0 : aps;
    if (extraAps) b.push([G.prio === 'speed' ? 'wap-be' : 'cap-ax', extraAps, G.prio === 'speed' ? 'WiFi 7-täckning' : 'Sömlös täckning']);
    if (G.place === 'office' && G.size > 40) b.push(['hex-s-25', 1, 'Separat gästnät']);
    return b.filter((x, i, arr) => arr.findIndex(y => y[0] === x[0]) === i);
  }
  function renderGuide() {
    bundle = buildBundle();
    range.style.setProperty('--p', ((G.size - 5) / 195 * 100) + '%');
    $('#guideList').innerHTML = bundle.map(([id, n, why], i) => `
      <li style="animation-delay:${i * 60}ms"><span class="qty">${n}×</span><span class="nm">${byId[id].name}<small>${why}</small></span><span class="pr">${kr(byId[id].price * n)}</span></li>`).join('');
    $('#guideTotal').textContent = kr(bundle.reduce((s, [id, n]) => s + byId[id].price * n, 0));
    drawDiagram();
  }
  function drawDiagram() {
    const svg = $('#guideSvg');
    const nodes = [{ x: 40, y: 130, l: G.place === 'remote' ? '4G/LTE' : 'Fiber', k: 'net' }];
    const tiers = bundle.map(([id, n]) => ({ id, n }));
    const w = 340 / Math.max(1, tiers.length);
    let s = `<defs><filter id="glow"><feGaussianBlur stdDeviation="3"/></filter></defs>`;
    const pts = [{ x: 40, y: 130 }];
    tiers.forEach((t, i) => pts.push({ x: 40 + w * (i + 1), y: i % 2 ? 90 : 170 }));
    for (let i = 0; i < pts.length - 1; i++) {
      s += `<path d="M${pts[i].x} ${pts[i].y} C ${(pts[i].x + pts[i + 1].x) / 2} ${pts[i].y}, ${(pts[i].x + pts[i + 1].x) / 2} ${pts[i + 1].y}, ${pts[i + 1].x} ${pts[i + 1].y}" fill="none" stroke="var(--signal)" stroke-width="1.5" class="flow" opacity=".8"/>`;
    }
    s += `<circle cx="40" cy="130" r="16" fill="none" stroke="var(--cyan)" stroke-dasharray="2 3"/><text x="40" y="160" text-anchor="middle" font-family="Geist Mono" font-size="9" fill="var(--muted)">${nodes[0].l}</text><circle cx="40" cy="130" r="4" fill="var(--cyan)"/>`;
    tiers.forEach((t, i) => {
      const p = pts[i + 1], name = byId[t.id].name.split(' ')[0];
      s += `<g><rect x="${p.x - 30}" y="${p.y - 16}" width="60" height="32" rx="8" fill="#10141a" stroke="var(--line-2)"/>
        <circle cx="${p.x - 20}" cy="${p.y}" r="3" fill="var(--signal)"><animate attributeName="opacity" values="1;.3;1" dur="${1 + i * .3}s" repeatCount="indefinite"/></circle>
        <text x="${p.x + 4}" y="${p.y + 3.5}" text-anchor="middle" font-family="Geist Mono" font-size="9" fill="#eef2f6">${name.length > 8 ? name.slice(0, 7) + '…' : name}</text>
        ${t.n > 1 ? `<text x="${p.x + 30}" y="${p.y - 20}" text-anchor="end" font-family="Geist Mono" font-size="9" fill="var(--signal)">×${t.n}</text>` : ''}</g>`;
    });
    // clients along the bottom
    const dots = Math.min(24, Math.ceil(G.size / 6));
    for (let i = 0; i < dots; i++) {
      const cx = 30 + (360 / Math.max(1, dots - 1)) * i;
      s += `<circle cx="${cx}" cy="226" r="2.5" fill="var(--signal)" opacity=".5"><animate attributeName="opacity" values=".2;.9;.2" dur="${1.4 + (i % 5) * .3}s" repeatCount="indefinite"/></circle>`;
    }
    s += `<text x="210" y="248" text-anchor="middle" font-family="Geist Mono" font-size="9" fill="var(--muted)">${G.size} enheter · ${bundle.reduce((a, [, n]) => a + n, 0)} komponenter</text>`;
    svg.innerHTML = s;
  }
  $('#guideAdd').onclick = () => { bundle.forEach(([id, n]) => add(id, n, true)); toast('Paketet ligger i varukorgen'); openCart(); };
  renderGuide();

  /* ---------- Partner form ---------- */
  $('#partnerForm').addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    $$('[required]', e.target).forEach(i => { const bad = !i.value.trim() || (i.type === 'email' && !/^\S+@\S+\.\S+$/.test(i.value)); i.classList.toggle('err', bad); if (bad) ok = false; });
    if (ok) { $('#formOk').hidden = false; e.target.querySelector('button').disabled = true; }
  });

  /* ---------- Reveal & counters ---------- */
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add('in'); io.unobserve(en.target);
    if (en.target.querySelector('[data-count]')) countUp(en.target.querySelector('[data-count]'));
  }), { threshold: .15 });
  $$('.reveal').forEach((el, i) => { el.style.transitionDelay = (el.closest('.hero') ? i * 90 : 0) + 'ms'; io.observe(el); });
  function countUp(el) {
    const to = +el.dataset.count, t0 = performance.now();
    (function f(t) { const k = Math.min(1, (t - t0) / 1600); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + (k === 1 ? '+' : ''); if (k < 1) requestAnimationFrame(f); })(t0);
  }
  $('#yr').textContent = new Date().getFullYear();

  /* ---------- Hero console ---------- */
  const lines = [
    ['<span class="c-dim">[admin@hAP-ax3] ></span> /interface print', 30],
    ['<span class="c-ok">R</span> ether1   <span class="c-cy">wan</span>     1Gbps  <span class="c-ok">running</span>', 6],
    ['<span class="c-ok">R</span> wifi1    <span class="c-cy">5GHz-ax</span> 2.4Gbps <span class="c-ok">running</span>', 6],
    ['<span class="c-ok">R</span> sfp1     <span class="c-cy">fiber</span>   2.5Gbps <span class="c-ok">running</span>', 6],
    ['<span class="c-dim">[admin@hAP-ax3] ></span> /ping 1.1.1.1 count=3', 30],
    ['  seq=0 time=<span class="c-ok">3ms</span>  seq=1 time=<span class="c-ok">2ms</span>  seq=2 time=<span class="c-ok">2ms</span>', 6],
    ['<span class="c-dim">[admin@hAP-ax3] ></span> <span class="c-ok">✓</span> nätverket mår bra', 30]
  ];
  const out = $('#consoleOut');
  (async function type() {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    await sleep(1200);
    while (true) {
      out.innerHTML = '';
      for (const [html, spd] of lines) {
        const tmp = document.createElement('div'); tmp.innerHTML = html;
        const plain = tmp.textContent; let shown = '';
        for (let i = 0; i <= plain.length; i += (spd > 10 ? 1 : 4)) {
          shown = plain.slice(0, i);
          out.innerHTML = out.dataset.done ? out.dataset.done + escapeHtml(shown) + '<span class="caret"></span>' : escapeHtml(shown) + '<span class="caret"></span>';
          await sleep(spd);
        }
        out.dataset.done = (out.dataset.done || '') + html + '\n';
        out.innerHTML = out.dataset.done + '<span class="caret"></span>';
        await sleep(spd > 10 ? 380 : 120);
      }
      await sleep(4200); out.dataset.done = '';
    }
  })();
  function escapeHtml(s) { return s.replace(/[&<>]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;' }[c])); }

  /* ---------- Hero topology canvas ---------- */
  const cv = $('#topo'), ctx = cv.getContext('2d');
  let W, H, DPR, nodes = [], edges = [], packets = [], mouse = { x: -999, y: -999 };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function setup() {
    DPR = Math.min(2, devicePixelRatio || 1);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * DPR; cv.height = H * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const n = Math.round(Math.min(70, W * H / 18000));
    nodes = Array.from({ length: n }, () => ({
      x: W * (.25 + Math.random() * .8), y: Math.random() * H,
      vx: (Math.random() - .5) * .12, vy: (Math.random() - .5) * .12,
      r: Math.random() < .12 ? 3.2 : 1.6, hub: false
    }));
    nodes.forEach(nd => nd.hub = nd.r > 3);
    edges = [];
    nodes.forEach((a, i) => {
      const near = nodes.map((b, j) => [j, Math.hypot(a.x - b.x, a.y - b.y)]).filter(([j]) => j !== i).sort((x, y) => x[1] - y[1]).slice(0, a.hub ? 4 : 2);
      near.forEach(([j]) => { if (!edges.some(e => (e[0] === i && e[1] === j) || (e[0] === j && e[1] === i))) edges.push([i, j]); });
    });
    packets = [];
  }
  function spawn() {
    const e = edges[Math.floor(Math.random() * edges.length)]; if (!e) return;
    packets.push({ e, t: 0, sp: .004 + Math.random() * .01, dir: Math.random() < .5, c: Math.random() < .75 ? '200,255,62' : '94,230,255' });
  }
  cv.parentElement.addEventListener('pointermove', e => { const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  cv.parentElement.addEventListener('pointerleave', () => { mouse.x = mouse.y = -999; });
  let visible = true;
  new IntersectionObserver(([en]) => visible = en.isIntersecting).observe(cv);
  function frame() {
    requestAnimationFrame(frame);
    if (!visible) return;
    ctx.clearRect(0, 0, W, H);
    nodes.forEach(n => {
      if (!reduce) { n.x += n.vx; n.y += n.vy; }
      if (n.x < 0 || n.x > W) n.vx *= -1; if (n.y < 0 || n.y > H) n.vy *= -1;
      const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
      n.glow = Math.max(0, 1 - d / 180);
    });
    ctx.lineWidth = 1;
    edges.forEach(([i, j]) => {
      const a = nodes[i], b = nodes[j], g = Math.max(a.glow, b.glow);
      ctx.strokeStyle = `rgba(${g > .05 ? '200,255,62' : '160,175,190'},${.07 + g * .35})`;
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
    });
    if (!reduce && Math.random() < .35 && packets.length < 60) spawn();
    packets = packets.filter(p => {
      p.t += p.sp; if (p.t >= 1) return false;
      const a = nodes[p.e[p.dir ? 0 : 1]], b = nodes[p.e[p.dir ? 1 : 0]];
      const x = a.x + (b.x - a.x) * p.t, y = a.y + (b.y - a.y) * p.t;
      const tx = a.x + (b.x - a.x) * Math.max(0, p.t - .08), ty = a.y + (b.y - a.y) * Math.max(0, p.t - .08);
      const grd = ctx.createLinearGradient(tx, ty, x, y);
      grd.addColorStop(0, `rgba(${p.c},0)`); grd.addColorStop(1, `rgba(${p.c},.9)`);
      ctx.strokeStyle = grd; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(x, y); ctx.stroke();
      ctx.fillStyle = `rgba(${p.c},1)`; ctx.beginPath(); ctx.arc(x, y, 1.6, 0, 7); ctx.fill();
      return true;
    });
    nodes.forEach(n => {
      ctx.fillStyle = n.hub ? `rgba(200,255,62,${.55 + n.glow * .45})` : `rgba(200,215,230,${.35 + n.glow * .6})`;
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r + n.glow * 1.5, 0, 7); ctx.fill();
      if (n.hub) { ctx.strokeStyle = 'rgba(200,255,62,.18)'; ctx.beginPath(); ctx.arc(n.x, n.y, 9 + n.glow * 6, 0, 7); ctx.stroke(); }
    });
  }
  setup(); frame();
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(setup, 200); });

  // WiFi compare bars
  new IntersectionObserver((es, o) => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); o.disconnect(); } }), { threshold: .4 }).observe($('.compare'));
})();
