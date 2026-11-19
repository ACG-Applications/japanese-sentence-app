// ============================================================
// SERVICE WORKER - Japanese Sentence Structure App
// ============================================================

var CACHE_NAME = 'japanese-sentence-app-v5';
var urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  
  // CSS Files
  './css/main.css',
  './css/layout.css',
  './css/components.css',
  './css/cards.css',
  './css/quiz.css',
  './css/vocabulary.css',
  './css/print.css',

  // JS Core Files
  './js/app.js',

  // JS Data & Tabs
  './js/data/MasterDictionary.js',
  './js/core/highlight.js',
  './js/tabs/learn.js',
  './js/tabs/cards.js',
  './js/tabs/quiz.js',
  './js/tabs/vocabulary.js',
  './js/tabs/grammar.js',

  // Icons
  './icons/antonio-mark.png',
  './icons/antonio-mark-64.png',
  './icons/icon-48x48.png',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-144x144.png',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  './icons/favicon-192x192.png',
  './icons/favicon-512x512.png'
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
  self.skipWaiting(); // Force the waiting service worker to become the active service worker.
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
  self.clients.claim(); // Take control of all open pages immediately
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
      })
  );
});