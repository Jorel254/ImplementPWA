const CACHE_NAME = "v1_cache_gradient_generator";
const urlsToCache = [
    "./",
    "./?umt_source=web_app_manifest",
    "./pages/fallback.html",
    "./pages/css/style.css",
    "./resources/favicon.png",
    "./resources/icon32.png",
    "./resources/icon64.png",
    "./resources/icon128.png",
    "./resources/icon256.png",
    "./resources/icon512.png",
    "./resources/icon1024.png",
    "./resources/maskable.png",
    "./js/main.js",
    "https://unpkg.com/vue@next",
    "./js/mountApp.js",
    "./css/style.css",
    "./manifest.json",
    "https://fonts.googleapis.com/css2?family=Radio+Canada:wght@300&display=swap",
    
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
        ).catch(
            () => caches.match("./pages/fallback.html")
        )
    );
});