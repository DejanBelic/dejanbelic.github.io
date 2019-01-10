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

var doc = document;

var initTar = doc.querySelector("#init");
var resTar = doc.querySelector("#result");
var imgTester = doc.querySelector("#tester");

initTar.onchange = function () {
  resTar.value = "background-image: url(data:image/svg+xml," + escape(initTar.value) + ");";
  imgTester.innerHTML = "<div style='" + resTar.value + "'>&nbsp;</div>";

}
initTar.onkeyup = initTar.onchange;