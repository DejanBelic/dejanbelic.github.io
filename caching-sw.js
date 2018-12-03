var CACHE_STATIC_NAME = 'static-v01';
var STATIC_FILES = [
    '/',
    '/index.html',
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