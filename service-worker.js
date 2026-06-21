const arquivos=[
    "index.html",
    "css/style.css",
    "js/script.js"
];

self.addEventListener("install",evento=>{

    evento.waitUntil(

        caches.open("christ-cache")
        .then(cache=>{

            return cache.addAll(arquivos);

        })

    );

});


self.addEventListener("fetch",evento=>{

    evento.respondWith(

        caches.match(evento.request)
        .then(resposta=>{

            return resposta || fetch(evento.request);

        })

    );

});