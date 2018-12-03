self.addEventListener('install', function (event) {
    console.log('[Service worker installed]', event)
    event.
})

self.addEventListener('activate', function (event) {
    console.log('[Service worker activation', event)
})