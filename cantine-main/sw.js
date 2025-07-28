self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('cantine-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/lundi.html',
        '/mardi.html',
        '/mercredi.html',
        '/jeudi.html',
        '/vendredi.html',
        '/icon.png',
        // ajoute les autres fichiers nécessaires
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});