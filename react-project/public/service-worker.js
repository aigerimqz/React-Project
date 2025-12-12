const CACHE_NAME = "app-shell-v1";
const API_CACHE = "api-cache-v1";

const APP_SHELL = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  console.log("[SW] Install event");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
});

self.addEventListener("activate", (event) => {
  console.log("[SW] Activate event");
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== API_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  return cached || fetch(request);
}

async function networkFirst(request) {
  const cache = await caches.open(API_CACHE);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (e) {
    const cached = await cache.match(request);
    return (
      cached ||
      new Response(JSON.stringify({ error: "Offline" }), {
        headers: { "Content-Type": "application/json" },
      })
    );
  }
}

self.addEventListener("fetch", (event) => {
  const req = event.request;

  if (req.mode === "navigate") {
    event.respondWith(fetch(req).catch(() => caches.match("/index.html")));
    return;
  }

  const url = new URL(req.url);

  if (
    url.pathname.startsWith("/icons") ||
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".js")
  ) {
    event.respondWith(cacheFirst(req));
    return;
  }

  if (url.pathname.startsWith("/api")) {
    event.respondWith(networkFirst(req));
    return;
  }

  event.respondWith(networkFirst(req));
});
