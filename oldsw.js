this.addEventListner('install',function(event){
event.waitUntil(
  caches.open(mycache)
  .then(function(cache){
    cache.addAll([

    ])
  })
)
})
//fetch
this.addEventListener('fetch',function(event){
  event.respondwith(
    caches.open('mycache')
    .then(function('cac'))
    {
      return result || fetch(event.request)
      .then(function(result)
    cache)

    })
  )
})
