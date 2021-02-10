/*window.addEventListener('load', function(){

    document.querySelector('button').addEventListener('click', onSwitch, false);

    function onSwitch(){
        chrome.tabs.query({currentWindow : true,  active : true }, function(tabs){
           chrome.tabs.sendMessage(tabs[0].id, 'hi abdelaziz');
        });
    }

}, false);*/


document.querySelector('button').addEventListener('click', function(){

    chrome.tabs.query({currentWindow : true,  active : true }, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, 'hi abdelaziz');
     });

},false);
