var port = chrome.runtime.connect({name:"script"});
port.onMessage.addListener(function(){
    waitAndCreateButton();
});

var getSongTitle = function() {
    var title = $.trim($('#eow-title[title]').text().replace(/'/g, ""));
    title = title.replace(/(\[.*?\]|\(.*?\)) */g, "").trim(); 
    title = title.replace("-", "OR");
    title = title.replace(":", '');
    title = title.replace(/DVD|HD|CD|full performance|full album|album|lyric video|with lyrics|w\/lyrics|lyrics|lyric|official video|"|'/ig, '');
    title = title.split('OR');
    if(title[0] == "") {
            title = title[1] + " OR " + title[2];
    } else {
            title = title[0] + " OR " + title[1];
    }
    return title;
}

var createSpotifyButton = function() {
    
    if (!document.getElementById('spotify')) {

        var songTitle = getSongTitle();
        var button = $("<span id='spotify' style='display : none;'>Search in spotify</span>");
        button.css({"background-image": "url(" + chrome.extension.getURL("src/images/spotify.png") + ")"});
        $("#watch7-user-header").append(button);
        button.show('slow');

        $('#spotify').click(function() {
            popup = window.open("https://play.spotify.com/search/" + songTitle, "myWindow");  
    });
    }
}

var waitAndCreateButton = function() {
    setTimeout(createSpotifyButton, 6000);
}
