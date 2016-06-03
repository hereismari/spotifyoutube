 
/*
 * Getting song title 
 */
var getSongTitle = function() {
    var title = $.trim($('#eow-title[title]').text().replace(/'/g, ""));
    title = title.replace(/(\[.*?\]|\(.*?\)) */g, "").trim(); 
    title = title.replace("-", "OR");
    title = title.replace("|", "OR");
    title = title.replace(/[0-9]/g, '');
    return title;
};

/*
 *  Creating Spotify button
 */
if (!document.getElementById('spotify')) {

    var songTitle = getSongTitle();
    var button = $("<span id='spotify'>Search in spotify</span>");
    button.css({"background-image": "url(" + chrome.extension.getURL("src/images/spotify.png") + ")"});
    $("#watch7-user-header").append(button);
}

/*
 *  Opening new tab 
 */
$('#spotify').click(function() {
    popup = window.open("https://play.spotify.com/search/" + songTitle, "myWindow");  
});
   
