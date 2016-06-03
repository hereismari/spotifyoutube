var port;
chrome.runtime.onConnect.addListener(function(p){
      port = p;
});

chrome.tabs.onUpdated.addListener(function(tabid, changeInfo, tab) {
    if (changeInfo && changeInfo.status == 'complete') {
        port.postMessage();
    }
});

chrome.tabs.onCreated.addListener(function(tab) {
        port.postMessage();
});

chrome.tabs.onActivated.addListener(function(obj) {
        port.postMessage();
});

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.windows.create({ url: 'https://github.com/mari-linhares/spotifyoutube', 'type' : 'normal'}, function() {
        });
});
