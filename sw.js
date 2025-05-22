self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("qr-cache").then((cache) => {
      return cache.addAll(["/", "index.html", "app.js", "qr-scanner.min.js"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((resp) => {
      return resp || fetch(e.request);
    })
  );
});
