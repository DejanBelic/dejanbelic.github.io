if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('caching-sw.js')
    .then(function () {
        console.log('[Service worker registered]');
    })
    .catch(function (err) {
        console.log(err)
    })
} 