const KIND = { man: "Món chính", rau: "Món rau", canh: "Canh", trang: "Tráng miệng" };
const PROT = { lon: "Thịt lợn", bo: "Thịt bò", ga: "Thịt gà", ca: "Cá", tom: "Tôm", muc: "Mực", trung: "Trứng", dau: "Đậu phụ", cua: "Cua", ngao: "Ngao" };
const ANIMAL = new Set(["lon", "bo", "ga", "ca", "tom", "muc", "cua", "ngao"]);

function toDish(row, cat) {
  const [id, name, emoji, color, tags, time, ing, steps] = row;
  return {
    id, name, emoji, color, cat, time,
    tags: tags ? tags.split(",") : [],
    ing: ing.split("|").map(s => { const k = s.indexOf(": "); return k < 0 ? [s, ""] : [s.slice(0, k), s.slice(k + 2)]; }),
    steps: steps.split("|")
  };
}
const M = MAINS.map(r => toDish(r, "man"));
const V = VEGS.map(r => toDish(r, "rau"));
const S = SOUPS.map(r => toDish(r, "canh"));
const T = DESSERTS.map(r => toDish(r, "trang"));

// ---------- Tạo 100 thực đơn cố định (cùng một hạt giống nên luôn ra cùng danh sách) ----------
function rng(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function shuffle(a, r) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const share = (a, b) => a.tags.some(t => b.tags.includes(t));
const prot = d => d.tags.filter(t => t !== "cc");

function buildCombos() {
  const r = rng(20261009);
  const mains = [], desserts = [];
  while (mains.length < 100) mains.push(...shuffle(M, r));
  while (desserts.length < 100) desserts.push(...shuffle(T, r));
  const sCount = {}, vCount = {}, seen = new Set(), out = [];
  for (let i = 0; i < 100; i++) {
    const m = mains[i];
    const soups = shuffle(S, r).sort((a, b) => (sCount[a.id] || 0) - (sCount[b.id] || 0));
    const vegs = shuffle(V, r).sort((a, b) => (vCount[a.id] || 0) - (vCount[b.id] || 0));
    let pick = null;
    for (const s of soups) {
      if (share(m, s)) continue;
      // Món chính là đậu/trứng thì canh phải có đạm động vật
      if (![...prot(m), ...prot(s)].some(t => ANIMAL.has(t))) continue;
      const v = vegs.find(v => !share(m, v) && !share(s, v) && !seen.has(m.id + s.id + v.id));
      if (v) { pick = [s, v]; break; }
    }
    const [s, v] = pick;
    sCount[s.id] = (sCount[s.id] || 0) + 1;
    vCount[v.id] = (vCount[v.id] || 0) + 1;
    seen.add(m.id + s.id + v.id);
    out.push({ n: i + 1, dishes: [m, v, s, desserts[i]] });
  }
  return out;
}
const COMBOS = buildCombos();

// ---------- Tranh minh họa món ăn ----------
function hash(s) { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
function mix(hex, amt) {
  const n = parseInt(hex.slice(1), 16); let rr = n >> 16, g = n >> 8 & 255, b = n & 255;
  const t = amt < 0 ? 0 : 255, p = Math.abs(amt);
  rr = Math.round(rr + (t - rr) * p); g = Math.round(g + (t - g) * p); b = Math.round(b + (t - b) * p);
  return `rgb(${rr},${g},${b})`;
}
const EMOJI_FONT = "'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif";
const BLUE = "#2F5D8A", CERAMIC = "#FBFAF4", RIM = "#D8D4C7";
function art(d) {
  const r = rng(hash(d.id)), id = "g" + d.id, cx = 150, cy = 96;
  const emo = (x, y, size) => `<text x="${x}" y="${y + size * 0.36}" text-anchor="middle" font-size="${size}" style="font-family:${EMOJI_FONT}">${d.emoji}</text>`;
  let s = `<svg viewBox="0 0 300 200" role="img" aria-label="Tranh minh họa ${d.name}"><defs>`
    + `<radialGradient id="${id}" cx="42%" cy="38%" r="70%"><stop offset="0" stop-color="${mix(d.color, .35)}"/><stop offset="1" stop-color="${mix(d.color, -.18)}"/></radialGradient></defs>`
    + `<ellipse cx="${cx + 6}" cy="${cy + 74}" rx="96" ry="12" fill="rgba(0,0,0,.13)"/>`;
  let fr = 44, fx = 1, fy = 1; // bán kính vùng thức ăn để rắc rau thơm
  if (d.cat === "man") {
    s += `<circle cx="${cx}" cy="${cy}" r="76" fill="${CERAMIC}" stroke="${RIM}"/>`
      + `<circle cx="${cx}" cy="${cy}" r="68" fill="none" stroke="${BLUE}" stroke-width="2"/>`
      + `<circle cx="${cx}" cy="${cy}" r="64" fill="none" stroke="${BLUE}" stroke-width="3" stroke-dasharray="2 6" opacity=".55"/>`
      + `<circle cx="${cx}" cy="${cy}" r="50" fill="url(#${id})"/>`;
  } else if (d.cat === "canh") {
    s += `<circle cx="${cx}" cy="${cy}" r="76" fill="${CERAMIC}" stroke="${RIM}"/>`
      + `<circle cx="${cx}" cy="${cy}" r="71" fill="none" stroke="${BLUE}" stroke-width="4"/>`
      + `<circle cx="${cx}" cy="${cy}" r="60" fill="url(#${id})" opacity=".92"/>`
      + `<ellipse cx="${cx - 22}" cy="${cy - 26}" rx="22" ry="8" fill="#fff" opacity=".22" transform="rotate(-25 ${cx - 22} ${cy - 26})"/>`;
    fr = 52;
  } else if (d.cat === "rau") {
    s += `<ellipse cx="${cx}" cy="${cy}" rx="110" ry="74" fill="${CERAMIC}" stroke="${RIM}"/>`
      + `<ellipse cx="${cx}" cy="${cy}" rx="101" ry="66" fill="none" stroke="${BLUE}" stroke-width="2"/>`
      + `<ellipse cx="${cx}" cy="${cy}" rx="76" ry="48" fill="url(#${id})"/>`;
    fr = 48; fx = 1.5;
  } else {
    s += `<circle cx="${cx}" cy="${cy}" r="72" fill="${CERAMIC}" stroke="${RIM}"/>`
      + `<circle cx="${cx}" cy="${cy}" r="64" fill="none" stroke="${BLUE}" stroke-width="7" stroke-dasharray="1 9" opacity=".6"/>`
      + `<circle cx="${cx}" cy="${cy}" r="54" fill="${mix(d.color, .78)}"/>`;
    s += emo(cx - 26, cy + 14, 34) + emo(cx + 28, cy + 10, 34) + emo(cx, cy - 18, 44) + `</svg>`;
    return s;
  }
  const herbs = ["#3E7D32", "#5FA046", "#3E7D32", "#D2452E", "#F4E6B8"];
  for (let i = 0; i < 16; i++) {
    const a = r() * Math.PI * 2, rad = Math.sqrt(r()) * fr * 0.85;
    const x = cx + Math.cos(a) * rad * fx, y = cy + Math.sin(a) * rad * fy;
    if (Math.hypot(x - cx, y - cy) < 20) continue;
    s += `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${(2.5 + r() * 4).toFixed(1)}" ry="${(1.4 + r() * 1.8).toFixed(1)}" fill="${herbs[Math.floor(r() * herbs.length)]}" transform="rotate(${Math.floor(r() * 180)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
  }
  return s + emo(cx, cy, 46) + `</svg>`;
}

// ---------- Ảnh thật (Pexels), lỗi tải thì dùng tranh minh họa ----------
const ALL = new Map([...M, ...V, ...S, ...T].map(d => [d.id, d]));
window.artFor = id => art(ALL.get(id));
function picture(d, credit) {
  const p = typeof PHOTOS !== "undefined" && PHOTOS[d.id];
  if (!p) return art(d);
  return `<img src="images/${d.id}.jpg" alt="Ảnh món ${esc(d.name)}" width="720" height="480" decoding="async" onerror="this.outerHTML=artFor('${d.id}')">`
    + (credit ? `<a class="credit" href="${esc(p.url)}" target="_blank" rel="noopener">Ảnh: ${esc(p.by)} / Pexels</a>` : "");
}

// ---------- Tiện ích ----------
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
// Lưu trên máy: thực đơn đã chọn hôm nay, các thực đơn gần đây, các món đã mua
function load(k, fb) { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? fb; } catch (e) { return fb; } }
function store(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } }
function today() { const d = new Date(); return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; }
function toast(msg) { const t = $("toast"); t.textContent = msg; t.hidden = false; clearTimeout(toast.h); toast.h = setTimeout(() => t.hidden = true, 2000); }
const CHEV = `<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const THU = ["Chủ nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];

let current = 0;
let tab = "today";

// ---------- Tab Hôm nay ----------
function renderCombo(idx, fresh) {
  current = idx;
  const c = COMBOS[idx];
  const [m, v, s, t] = c.dishes;
  $("comboPill").textContent = `Số ${c.n}/100`;
  const longest = Math.max(m.time, v.time, s.time);
  const d = new Date();
  $("dateLine").textContent = `${THU[d.getDay()]}, ${d.getDate()}/${d.getMonth() + 1} · nấu khoảng ${longest} phút`;
  const proteins = [...new Set([m, v, s].flatMap(prot))].map(p => PROT[p]);
  $("nutri").innerHTML = [
    ["Chất đạm", proteins.join(", ")],
    ["Rau, chất xơ", v.name],
    ["Canh", s.name],
    ["Trái cây", t.name],
  ].map(([k, val]) => `<div><b>${k}</b><span>${esc(val)}</span></div>`).join("");
  const f = fresh ? " fresh" : "";
  $("menu").innerHTML =
    `<button type="button" class="card${f}" data-id="${m.id}">
       <div class="hero"><div class="ph">${picture(m)}</div>
         <div class="cap"><small>${KIND.man}</small><strong>${esc(m.name)}</strong><em>${m.time} phút · ${m.ing.length} nguyên liệu</em></div>
       </div>
     </button>`
    + [v, s, t].map(x => `
     <button type="button" class="card row${f}" data-id="${x.id}">
       <div class="ph">${picture(x)}</div>
       <div class="txt"><small>${KIND[x.cat]}</small><strong>${esc(x.name)}</strong><em>${x.time} phút · ${x.ing.length} nguyên liệu</em></div>
       ${CHEV}
     </button>`).join("");
  document.querySelectorAll(".combo").forEach(b => b.classList.toggle("on", +b.dataset.i === idx));
  renderMarket();
  store("cntm-today", { idx, day: today() });
}

function pickNew() {
  const recent = load("cntm-recent", []);
  const pool = COMBOS.map((_, i) => i).filter(i => i !== current && !recent.includes(i));
  const idx = pool[Math.floor(Math.random() * pool.length)];
  store("cntm-recent", [idx, ...recent].slice(0, 30));
  return idx;
}

$("pickBtn").addEventListener("click", () => {
  const btn = $("pickBtn");
  if (btn.disabled) return;
  if (tab !== "today") showTab("today");
  const idx = pickNew();
  try { navigator.vibrate && navigator.vibrate(20); } catch (e) { }
  if (reduceMotion()) { renderCombo(idx, false); return; }
  btn.disabled = true; btn.classList.add("spin"); $("pickLabel").textContent = "Đang chọn…";
  let ticks = 0;
  const timer = setInterval(() => {
    const k = Math.floor(Math.random() * 100);
    $("comboPill").textContent = `Số ${k + 1}/100`;
    if (++ticks >= 12) {
      clearInterval(timer);
      renderCombo(idx, true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      try { navigator.vibrate && navigator.vibrate([15, 40, 15]); } catch (e) { }
      btn.disabled = false; btn.classList.remove("spin"); $("pickLabel").textContent = "Chọn món khác";
    }
  }, 55);
});

$("menu").addEventListener("click", e => {
  const b = e.target.closest(".card"); if (b) openDish(b.dataset.id);
});

// ---------- Trang chi tiết món (nút Back của điện thoại cũng đóng được) ----------
function openDish(id) {
  const d = ALL.get(id);
  $("sheetKind").textContent = KIND[d.cat];
  $("sheetBody").innerHTML = `
    <div class="sheet-photo"><div class="ph">${picture(d, true)}</div></div>
    <div class="sheet-content">
      <h2 id="sheetTitle">${esc(d.name)}</h2>
      <div class="meta"><span>${d.time} phút</span><span>Cho 3 người</span><span>${d.ing.length} nguyên liệu</span></div>
      <h3>Nguyên liệu</h3>
      <ul class="ing">${d.ing.map(([n, q]) => `<li><span>${esc(n)}</span><span>${esc(q)}</span></li>`).join("")}</ul>
      <h3>${d.cat === "trang" ? "Chuẩn bị" : "Cách nấu"}</h3>
      <ol class="steps">${d.steps.map(x => `<li><span>${esc(x)}</span></li>`).join("")}</ol>
    </div>`;
  const sh = $("sheet");
  sh.hidden = false; sh.scrollTop = 0;
  document.body.style.overflow = "hidden";
  if (!history.state || !history.state.dish) history.pushState({ dish: id }, "");
  $("sheetBack").focus({ preventScroll: true });
}
function closeDish() {
  $("sheet").hidden = true;
  document.body.style.overflow = "";
}
$("sheetBack").addEventListener("click", () => { if (history.state && history.state.dish) history.back(); else closeDish(); });
window.addEventListener("popstate", () => { if (!$("sheet").hidden) closeDish(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !$("sheet").hidden) $("sheetBack").click(); });

// ---------- Tab Đi chợ ----------
const checkKey = () => `cntm-check-${COMBOS[current].n}`;
function renderMarket() {
  const c = COMBOS[current];
  const done = new Set(load(checkKey(), []));
  $("marketSub").textContent = `Thực đơn số ${c.n} · cho 3 người`;
  const row = (key, n, q) => `<label class="check"><input type="checkbox" data-k="${key}"${done.has(key) ? " checked" : ""}><span class="n">${esc(n)}</span><span class="q">${esc(q)}</span></label>`;
  $("market").innerHTML = c.dishes.map(d => `
    <div class="group">
      <h3><span>${esc(d.name)}</span><small>${KIND[d.cat]}</small></h3>
      ${d.ing.map(([n, q], i) => row(`${d.id}-${i}`, n, q)).join("")}
    </div>`).join("") + `<div class="group">${row("gao", "Gạo", "300g")}</div>`;
  updateCount();
}
function updateCount() {
  const boxes = [...document.querySelectorAll("#market input")];
  const n = boxes.filter(b => b.checked).length;
  $("marketCount").textContent = n === boxes.length ? "Đã mua đủ, về nấu thôi!" : `Đã mua ${n}/${boxes.length} thứ`;
}
$("market").addEventListener("change", () => {
  store(checkKey(), [...document.querySelectorAll("#market input:checked")].map(b => b.dataset.k));
  updateCount();
});
$("uncheckBtn").addEventListener("click", () => { store(checkKey(), []); renderMarket(); });

function shoppingText() {
  const c = COMBOS[current];
  return `Thực đơn số ${c.n} (3 người)\n` + c.dishes.map(d =>
    `\n${d.name}\n` + d.ing.map(([n, q]) => `- ${n}${q ? ": " + q : ""}`).join("\n")).join("\n")
    + `\n\nGạo: khoảng 300g`;
}
$("copyBtn").addEventListener("click", () => {
  const text = shoppingText();
  const fallback = () => { const ta = $("copyFallback"); ta.value = text; ta.hidden = false; ta.focus(); ta.select(); toast("Đã chọn sẵn chữ, giữ tay để sao chép"); };
  try { navigator.clipboard.writeText(text).then(() => toast("Đã chép, dán vào Zalo là xong"), fallback); }
  catch (e) { fallback(); }
});

// ---------- Tab 100 thực đơn ----------
const fold = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d");
function renderList(q) {
  const f = fold(q.trim());
  const rows = COMBOS.map((c, i) => ({ c, i })).filter(({ c }) => !f || fold(c.dishes.map(d => d.name).join(" ")).includes(f));
  $("list").innerHTML = rows.length ? rows.map(({ c, i }) => `
    <button class="combo${i === current ? " on" : ""}" type="button" data-i="${i}">
      <b>${c.n}</b>
      <span><strong>${esc(c.dishes[0].name)}</strong> · ${esc(c.dishes[1].name)} · ${esc(c.dishes[2].name)} · ${esc(c.dishes[3].name)}</span>
    </button>`).join("") : `<p class="empty">Không có thực đơn nào có món này.</p>`;
}
$("search").addEventListener("input", e => renderList(e.target.value));
$("list").addEventListener("click", e => {
  const b = e.target.closest(".combo"); if (!b) return;
  renderCombo(+b.dataset.i, true);
  showTab("today");
  toast(`Đã chọn thực đơn số ${COMBOS[+b.dataset.i].n}`);
});

// ---------- Chuyển tab ----------
function showTab(name) {
  tab = name;
  for (const t of ["today", "market", "all"]) $("view-" + t).hidden = t !== name;
  document.querySelectorAll(".tab").forEach(b => {
    const on = b.dataset.tab === name;
    b.classList.toggle("on", on);
    if (on) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current");
  });
  $("pickBtn").hidden = name === "all";
  window.scrollTo({ top: 0 });
}
document.querySelector(".tabbar").addEventListener("click", e => {
  const b = e.target.closest(".tab"); if (b) showTab(b.dataset.tab);
});

// ---------- Gợi ý cài lên màn hình chính ----------
const standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
let installEvent = null;
function showInstall(text, withButton) {
  if (standalone || load("cntm-install-hidden", false)) return;
  $("installText").textContent = text;
  $("installBtn").hidden = !withButton;
  $("installTip").hidden = false;
}
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault(); installEvent = e;
  showInstall("Mở nhanh như app, dùng được cả khi không có mạng.", true);
});
$("installBtn").addEventListener("click", async () => {
  if (!installEvent) return;
  installEvent.prompt();
  await installEvent.userChoice;
  installEvent = null; $("installTip").hidden = true;
});
$("installClose").addEventListener("click", () => { $("installTip").hidden = true; store("cntm-install-hidden", true); });
window.addEventListener("appinstalled", () => { $("installTip").hidden = true; toast("Đã cài lên màn hình chính"); });
if (/iphone|ipad|ipod/i.test(navigator.userAgent) && !standalone) {
  showInstall("Bấm nút Chia sẻ ở Safari, rồi chọn “Thêm vào MH chính”.", false);
}

// Chạy offline khi trang được mở qua https
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => { }));
}

// ---------- Mở app: giữ thực đơn đã chọn hôm nay, nếu chưa chọn thì gợi ý thực đơn của ngày ----------
(function start() {
  const saved = load("cntm-today", null);
  const dayIdx = Math.floor(Date.now() / 86400000) % 100;
  const idx = saved && saved.day === today() && COMBOS[saved.idx] ? saved.idx : dayIdx;
  renderList("");
  renderCombo(idx, false);
})();
