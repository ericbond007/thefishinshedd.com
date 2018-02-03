const doCache = true;

const CACHE_NAME = 'thefishinshedd';

const urlsToCache = [
  '/',
  '/products',
  '/deli',
  '/fishing',
  '/boats',
  '/story'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  }
});
