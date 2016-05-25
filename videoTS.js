var myvideo = document.getElementById('myvideo'),
    playbutton = document.getElementById('playme'),
    jumplink = document.getElementById('probeerknop');

jumplink.addEventListener("click", function (event) {
    var startpunt = document.getElementById('TS1start').value();
    event.preventDefault();
    myvideo.play();
    myvideo.pause();
    
    
     myvideo.currentTime = startpunt;
    myvideo.play();
}, false);

playbutton.addEventListener("click", function () {
    if (myvideo.paused) {
        myvideo.play();
    } else {
        myvideo.pause();
    }
}, false);



playbutton.addEventListener("click", function () {
    var urlvanpagina =window.location.href.toString();
document.getElementsByClassName('twitter-share-button').data-url = urlvanpagina ;
}, false);
