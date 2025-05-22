self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('att-app-v1').then(cache => {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'https://unpkg.com/html5-qrcode'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
