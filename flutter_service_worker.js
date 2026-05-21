// Self-unregistering service worker.
//
// We disabled PWA caching for the preview site (--pwa-strategy=none).
// Any browser that previously installed the aggressive caching SW
// will pick this stub up on its next SW update check, wipe its caches,
// and unregister — after which future visits use no SW at all and
// always see the latest deployed build.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    } catch (_) {
      // best-effort
    }
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    for (const client of clients) {
      try { client.navigate(client.url); } catch (_) {}
    }
  })());
});
