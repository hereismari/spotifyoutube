chrome.webNavigation.onCompleted.addListener(function(details) {
        chrome.tabs.executeScript(null, { file: "src/libs/jquery.js" } );
        chrome.tabs.executeScript(null, { file: "src/script/script.js" } );
});

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.windows.create({ url: 'https://github.com/mari-linhares/spotifyoutube', 'type' : 'normal'}, function() {
        });
});
