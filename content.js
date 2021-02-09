window.addEventListener('load', (event) => {
       var lang = document.documentElement.lang;

       //this is used when translate pages from any languages to Arabic
       if(lang == 'ar'){
        document.documentElement.dir = 'rtl';
       }

       
  });