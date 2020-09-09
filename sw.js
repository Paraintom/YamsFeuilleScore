self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       './',
       './index.html',
       './bulma.0.9.0.css',
       './score-input-setter-component.js',
       './vue.3.0.0-rc.10.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});