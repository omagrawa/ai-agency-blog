(function(){
  function apply(t){document.documentElement.setAttribute('data-theme', t);localStorage.setItem('theme', t);}
  function init(){
    var saved=localStorage.getItem('theme');
    if(saved){apply(saved);} else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){apply('dark');}
    var btn=document.querySelector('.theme-toggle');
    if(btn){btn.addEventListener('click',function(){apply(document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark');});}
  }
  if(document.readyState!=='loading') init(); else document.addEventListener('DOMContentLoaded', init);
})();
