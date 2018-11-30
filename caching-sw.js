

    OneSignal.init({
        appId: 'aff45c2b-b8cc-4b01-8bed-e2eb8c203dd6'
    })

    navigator.serviceWorker.register(
        "https://dejanbelic.github.io/caching-sw.js", { scope: "/" } //root scope for the whole site
    );

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

