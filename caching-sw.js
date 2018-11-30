
navigator.serviceWorker.register('/OneSignalSDKWorker.js')

console.log('bbb')
// self.addEventListener('activate', function () {
//     console.log('[Service worker] activated.') 
// });

    window.addEventListener('load', function () {
        console.log('daaa')
        navigator.serviceWorker.register('/OneSignalSDKWorker.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });