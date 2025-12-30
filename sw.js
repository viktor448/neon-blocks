const CACHE_NAME = 'neon-blocks-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Установка: кешируем файлы
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Работа в офлайне: отдаем файлы из кеша
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});