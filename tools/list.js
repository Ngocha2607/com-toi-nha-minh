// In ra các ảnh ứng viên: node list.js "id=truy vấn" ...
(async () => {
  for (const arg of process.argv.slice(2)) {
    const [id, q] = arg.split("=");
    const r = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&per_page=12&orientation=landscape`, { headers: { Authorization: process.env.PEXELS_API_KEY } });
    const d = await r.json();
    console.log(`\n## ${id} [${q}]`);
    d.photos.forEach((p, i) => console.log(`${p.id} ${(p.alt || "").slice(0, 110)}`));
  }
})();
