// Lưu sẵn toàn bộ app để mở được khi không có mạng. Sửa file nào thì tăng VERSION.
const VERSION = "com-toi-v1";
const FILES = [
  "./", "index.html", "manifest.webmanifest", "css/style.css", "js/data.js", "js/photos.js", "js/app.js",
  "icons/logo.svg", "icons/favicon-32.png", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png",
  "images/c1.jpg",  "images/c10.jpg",  "images/c11.jpg",  "images/c12.jpg",  "images/c13.jpg",  "images/c14.jpg",  "images/c15.jpg",  "images/c16.jpg",  "images/c17.jpg",  "images/c18.jpg",  "images/c19.jpg",  "images/c2.jpg",  "images/c20.jpg",  "images/c21.jpg",  "images/c3.jpg",  "images/c4.jpg",  "images/c5.jpg",  "images/c6.jpg",  "images/c7.jpg",  "images/c8.jpg",  "images/c9.jpg",  "images/d1.jpg",  "images/d10.jpg",  "images/d2.jpg",  "images/d3.jpg",  "images/d4.jpg",  "images/d5.jpg",  "images/d6.jpg",  "images/d7.jpg",  "images/d8.jpg",  "images/d9.jpg",  "images/m1.jpg",  "images/m10.jpg",  "images/m11.jpg",  "images/m12.jpg",  "images/m13.jpg",  "images/m14.jpg",  "images/m15.jpg",  "images/m16.jpg",  "images/m17.jpg",  "images/m18.jpg",  "images/m19.jpg",  "images/m2.jpg",  "images/m20.jpg",  "images/m21.jpg",  "images/m22.jpg",  "images/m23.jpg",  "images/m24.jpg",  "images/m25.jpg",  "images/m26.jpg",  "images/m27.jpg",  "images/m28.jpg",  "images/m29.jpg",  "images/m3.jpg",  "images/m30.jpg",  "images/m31.jpg",  "images/m4.jpg",  "images/m5.jpg",  "images/m6.jpg",  "images/m7.jpg",  "images/m8.jpg",  "images/m9.jpg",  "images/v1.jpg",  "images/v10.jpg",  "images/v11.jpg",  "images/v12.jpg",  "images/v13.jpg",  "images/v14.jpg",  "images/v15.jpg",  "images/v16.jpg",  "images/v17.jpg",  "images/v18.jpg",  "images/v19.jpg",  "images/v2.jpg",  "images/v20.jpg",  "images/v3.jpg",  "images/v4.jpg",  "images/v5.jpg",  "images/v6.jpg",  "images/v7.jpg",  "images/v8.jpg",  "images/v9.jpg",
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // Phông chữ Google: dùng bản đã lưu, đồng thời cập nhật ngầm
  if (url.hostname.endsWith("googleapis.com") || url.hostname.endsWith("gstatic.com")) {
    e.respondWith(caches.open(VERSION).then(async c => {
      const hit = await c.match(e.request);
      const net = fetch(e.request).then(r => { c.put(e.request, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request)));
});
