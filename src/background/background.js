chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo && changeInfo.status == 'complete') {
        chrome.tabs.sendMessage(tabId, {data : tab}, function(response) {
        });
    }
});

chrome.tabs.onCreated.addListener(function(tab) {
        chrome.tabs.sendMessage('', {data : ''}, function(response) {
        });
});

chrome.tabs.onActivated.addListener(function(obj) {
        chrome.tabs.sendMessage('', {data : ''}, function(response) {
        });
});

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.windows.create({ url: 'https://github.com/mari-linhares/spotifyoutube', 'type' : 'normal'}, function() {
        });
});
