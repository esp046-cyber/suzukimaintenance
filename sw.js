const V='suzuki-care-v6',SHELL=['./','index.html','css/styles.css','js/app.js','js/data.js','js/catalog.js','manifest.json','assets/icon.svg','assets/icon-192.png','assets/icon-512.png','assets/icon-maskable-512.png','assets/og-image.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
 e.respondWith(caches.match(e.request).then(h=>{const n=fetch(e.request).then(r=>{caches.open(V).then(c=>c.put(e.request,r.clone()));return r}).catch(()=>h);return h||n}))});
self.addEventListener('push',e=>{const d=e.data?.json?.()||{title:'Suzuki Care',body:'A service is due.'};e.waitUntil(self.registration.showNotification(d.title,{body:d.body,icon:'assets/icon.svg'}))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.openWindow('./'))});
