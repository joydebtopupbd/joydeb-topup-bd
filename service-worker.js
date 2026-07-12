const CACHE_NAME = "joydeb-topup-v1";

const filesToCache = [
  "index.html",
  "style.css",
  "responsive.css",
  "script.js",
  "login.html",
  "register.html",
  "profile.html",
  "wallet.html",
  "add-money.html",
  "payment.html",
  "orders.html",
  "product.html",
  "checkout.html",
  "notice.html",
  "offer.html",
  "about.html",
  "contact.html"
];


// Install Service Worker
self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(filesToCache);
    })

  );

});


// Fetch Cached Files
self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)
    .then(response => {

      return response || fetch(event.request);

    })

  );

});


// Activate New Version
self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(keys => {

      return Promise.all(

        keys.map(key => {

          if(key !== CACHE_NAME){

            return caches.delete(key);

          }

        })

      );

    })

  );

});
