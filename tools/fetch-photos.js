// Tìm ảnh trên Pexels cho từng món và tải về thư mục images/ của web.
// Dùng: PEXELS_API_KEY=... node fetch-photos.js <thư mục web> [id1,id2,...] [chỉ số kết quả]
const fs = require("fs");
const path = require("path");

const KEY = process.env.PEXELS_API_KEY;
const OUT = process.argv[2];
const ONLY = process.argv[3] ? process.argv[3].split(",") : null;
const PICK = Number(process.argv[4] || 0);
if (!KEY || !OUT) { console.error("Thiếu PEXELS_API_KEY hoặc thư mục web"); process.exit(1); }

const Q = {
  m1: "braised pork belly with eggs", m2: "sweet and sour pork ribs", m3: "braised fish clay pot",
  m4: "ginger chicken stew", m5: "caramelized shrimp", m6: "tofu in tomato sauce",
  m7: "beef stir fry onion", m8: "crispy pork belly slices", m9: "fried fish tomato sauce",
  m10: "lemongrass chicken", m11: "omelette plate", m12: "squid stir fry",
  m13: "sliced boiled pork belly", m14: "beef cubes stir fry bell pepper", m15: "steamed fish soy sauce",
  m16: "poached chicken", m17: "steamed shrimp", m18: "grilled meat wrapped leaves",
  m19: "stuffed tofu", m20: "fried chicken wings", m21: "meatballs tomato sauce",
  m22: "steamed egg custard", m23: "braised mackerel", m24: "steamed squid",
  m25: "fried spring rolls", m26: "chicken mushroom stir fry", m27: "beef wrapped in leaves grilled",
  m28: "garlic butter shrimp", m29: "fried tofu scallion", m30: "pan seared salmon",
  m31: "honey glazed chicken thighs",
  v1: "water spinach stir fry", v2: "bok choy mushroom stir fry", v3: "stir fried julienne vegetables",
  v4: "stir fried cabbage", v5: "green beans garlic", v6: "broccoli stir fry garlic",
  v7: "bean sprouts stir fry", v8: "stir fried greens garlic", v9: "sauteed mushrooms",
  v10: "cucumber carrot salad", v11: "green salad bowl", v12: "roasted pumpkin slices",
  v13: "okra", v14: "grilled eggplant", v15: "asparagus garlic",
  v16: "steamed vegetables plate", v17: "stir fried green vegetables", v18: "bok choy oyster sauce",
  v19: "bitter melon", v20: "sauteed spinach",
  c1: "vietnamese sour soup", c2: "pumpkin soup bowl", c3: "vegetable soup with pork",
  c4: "mustard greens soup", c5: "crab soup", c6: "gourd soup",
  c7: "tomato egg drop soup", c8: "bitter melon soup", c9: "pork rib soup vegetables",
  c10: "soft tofu soup", c11: "seaweed soup", c12: "clam soup",
  c13: "winter melon soup", c14: "clear vegetable soup", c15: "mushroom soup clear broth",
  c16: "chicken mushroom soup", c17: "radish pork bone soup", c18: "fish soup dill",
  c19: "beef tomato soup", c20: "kimchi tofu soup", c21: "leafy green soup",
  d1: "watermelon slices", d2: "bananas", d3: "orange slices", d4: "dragon fruit",
  d5: "papaya slices", d6: "yogurt with fruit", d7: "black bean dessert", d8: "mango slices",
  d9: "guava fruit", d10: "grapes bowl"
};

const photosFile = path.join(OUT, "js", "photos.js");
let PHOTOS = {};
if (fs.existsSync(photosFile)) {
  PHOTOS = JSON.parse(fs.readFileSync(photosFile, "utf8").replace(/^[^{]*/, "").replace(/;\s*$/, ""));
}
fs.mkdirSync(path.join(OUT, "images"), { recursive: true });

(async () => {
  for (const [id, q] of Object.entries(Q)) {
    if (ONLY && !ONLY.includes(id)) continue;
    const res = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&per_page=8&orientation=landscape`, { headers: { Authorization: KEY } });
    if (!res.ok) { console.log(id, "lỗi", res.status); continue; }
    const data = await res.json();
    const p = data.photos[Math.min(PICK, data.photos.length - 1)];
    if (!p) { console.log(id, "không có ảnh cho", q); continue; }
    // Cắt sẵn khung 3:2, rộng 720px để trang tải nhanh
    const img = await fetch(`${p.src.original}?auto=compress&cs=tinysrgb&fit=crop&w=720&h=480`);
    fs.writeFileSync(path.join(OUT, "images", id + ".jpg"), Buffer.from(await img.arrayBuffer()));
    PHOTOS[id] = { by: p.photographer, byUrl: p.photographer_url, url: p.url, alt: p.alt || "" };
    console.log(id, "→", p.id, p.alt);
  }
  fs.writeFileSync(photosFile, "// Ảnh món ăn từ Pexels (tải bằng fetch-photos.js)\nconst PHOTOS = " + JSON.stringify(PHOTOS, null, 1) + ";\n");
})();
