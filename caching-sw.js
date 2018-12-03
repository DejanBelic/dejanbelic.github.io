var CACHE_STATIC_NAME = 'static-v01';
var CACHE_DYNAMIC_NAME = 'dynamic_cache-v01'
var STATIC_FILES = [
    '/',
    '/index.html',
    '/offline.html',
    '/js/app.js',
    'css/main.css',
    'images/mici.jpg',
    'https://fonts.googleapis.com/css?family=Roboto:300,400'
] 


self.addEventListener('install', function (event) {
    console.log('[Service worker installed]', event)
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME).then(function (cache) {
            console.log('[Service Worker] Precaching App Shell...', event);
            cache.addAll(STATIC_FILES);
        })
    )
})

self.addEventListener('activate', function (event) {
    console.log('[Service worker activation', event)
})

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
         .then(function (response) {
             if (response) {
                 console.log(response)
                 return response;
             }
             else {
                 return fetch(event.request)
                  .then(function (respo) {
                      return caches(CACHE_DYNAMIC_NAME)
                       .then(function (cache) {
                           return respo;
                       })
                  })
             }
         })
         .catch(function () {
             // Return fallback page.
             return caches.open(CACHE_STATIC_NAME)
              .then(function (cache) {
                  return cache.match('/offline.html') // Command for getting something from cache.
              })
         })
    )
});