// ============================================================
// SERVICE WORKER - Japanese Sentence Structure App
// ============================================================

var CACHE_NAME = 'japanese-sentence-app-v1';
var urlsToCache = [
  './',
  './index.html',
  './js/data/MasterDictionary.js',
  './js/tabs/learn.js',
  './js/tabs/cards.js',
  './js/tabs/quiz.js',
  './js/tabs/vocabulary.js',
  './js/tabs/grammar.js',
  './icons/favicon-16x16.png',
  './icons/favicon-32x32.png',
  './icons/favicon-192x192.png',
  './icons/favicon-512x512.png',
  './icons/icon-48x48.png',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-144x144.png',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

// Install event - cache all files
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});