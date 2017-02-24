var Lock = require('lock')
var lock = Lock()
console.log('inicio: ' + lock.isLocked('key'));
lock('key', function (release) { //called when resource is available.
    console.log('method 1 execution waiting 2 segundos');
    setTimeout(function() {
        console.log('method 1 releasing');
        release()();
    }, 2000);
})

lock('key', function(release) {
    console.log('method 2 execution waiting 1 segundos');
    setTimeout(function() {
        console.log('method 2 releasing');
        release()();
    }, 1000);
});

setInterval(function() {
    console.log('interval');
}, 1000);
