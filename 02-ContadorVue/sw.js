const CACHE_NAME = "v1_cache_contador_app_vue";
const urlsToCache = [
    "./",
    "./resources/favicon.png",
    "./resources/icon32.png",
    "./resources/icon64.png",
    "./resources/icon128.png",
    "./resources/icon256.png",
    "./resources/icon512.png",
    "./resources/icon1024.png",
    "./resources/icon2048.png",
    "./resources/icon4096.png",
    "./js/main.js",
    "https://unpkg.com/vue@next",
    "./js/mountApp.js",
    "./css/style.css",
    "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
];
self.addEventListener("install",(e) => { 
    e.waitUntil(
    caches.open(CACHE_NAME).then(
        (cache) => cache.addAll(urlsToCache).then(
            () => self.skipWaiting()
        ).catch(
            err => console.log(err)
        )
    )
)
})

self.addEventListener("activate", e => {
    const cacheWhitetList = [CACHE_NAME];
    e.waitUntil(
        caches.keys().then(
            cacheNames => {
                return Promise.all(
                    cacheNames.map(
                        cacheName => {
                            if(cacheWhitetList.indexOf(cacheName) == -1)
                            {
                                return caches.delete(cacheName)
                            }
                        }
                    )
                );
            }
        ).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", e =>{
    e.respondWith(
        caches.match(e.request).then(
            (res) => {
                        if(res)
                        {
                            return res;
                        }
                        return fetch(e.request);
            }
        )
    );
});