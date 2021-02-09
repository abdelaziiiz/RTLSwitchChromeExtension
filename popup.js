document.addEventListener('DOMContentLoaded', function(){

    document.querySelector("Button").addEventListener("click", onSwitch, false);

    function onSwitch(){
        chrome.tabs.query({currentWindow : true,  active : true }, function(tabs){
           chrome.tabs.sendMessage(tabs[0].id, 'hi abdelaziz');
        });
    }

}, false);
