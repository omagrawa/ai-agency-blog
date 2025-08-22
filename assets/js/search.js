(function(){
  if(!window.__ENABLE_SEARCH__) return;
  function ready(fn){if(document.readyState!=='loading')fn();else document.addEventListener('DOMContentLoaded',fn)}
  ready(function(){
    var box=document.querySelector('#search-box');
    var out=document.querySelector('#search-results');
    if(!box||!out) return;
    function buildIndex(data){
      var idx=lunr(function(){
        this.ref('url');
        this.field('title');
        this.field('tags');
        this.field('excerpt');
        data.forEach(function(d){this.add(d)}, this);
      });
      return idx;
    }
    fetch('/assets/search.json').then(r=>r.json()).then(function(data){
      var idx=buildIndex(data);
      box.addEventListener('input', function(){
        var q=this.value.trim();
        if(!q){out.innerHTML='';return;}
        var results=idx.search(q).slice(0,10).map(function(r){
          return data.find(function(d){return d.url===r.ref});
        });
        out.innerHTML=results.map(function(item){
          return '<li><a href="'+item.url+'">'+item.title+'</a><p>'+item.excerpt+'</p></li>';
        }).join('');
      });
    }).catch(function(){ out.innerHTML='<li>Search unavailable.</li>'; });
  });
})();
