window.addEventListener('load', function() {
    registerSW(); 
});

async function registerSW() { 
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }
}