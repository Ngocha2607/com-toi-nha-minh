// Tải ảnh Pexels theo mã ảnh: node pick.js <thư mục web> món=mãẢnh ...
const fs = require("fs"), path = require("path");
const OUT = process.argv[2], file = path.join(OUT, "js", "photos.js");
const PHOTOS = JSON.parse(fs.readFileSync(file, "utf8").replace(/^[^{]*/, "").replace(/;\s*$/, ""));
(async () => {
  for (const a of process.argv.slice(3)) {
    const [id, pid] = a.split("=");
    const r = await fetch(`https://api.pexels.com/v1/photos/${pid}`, { headers: { Authorization: process.env.PEXELS_API_KEY } });
    if (!r.ok) { console.log(id, "lỗi", r.status); continue; }
    const p = await r.json();
    const img = await fetch(`${p.src.original}?auto=compress&cs=tinysrgb&fit=crop&w=720&h=480`);
    fs.writeFileSync(path.join(OUT, "images", id + ".jpg"), Buffer.from(await img.arrayBuffer()));
    PHOTOS[id] = { by: p.photographer, byUrl: p.photographer_url, url: p.url, alt: p.alt || "" };
    console.log(id, "→", p.alt.slice(0, 80));
  }
  fs.writeFileSync(file, "// Ảnh món ăn từ Pexels (tải bằng fetch-photos.js)\nconst PHOTOS = " + JSON.stringify(PHOTOS, null, 1) + ";\n");
})();
