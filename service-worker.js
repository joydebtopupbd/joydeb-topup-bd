self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
const CACHE_NAME = "joydeb-topup-v1";

const urlsToCache = [
  "/joydeb-topup-bd/",
  "/joydeb-topup-bd/index.html",
  "/joydeb-topup-bd/style.css",
  "/joydeb-topup-bd/script.js",
  "/joydeb-topup-bd/manifest.json",
  "/joydeb-topup-bd/icon-192.png",
  "/joydeb-topup-bd/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
