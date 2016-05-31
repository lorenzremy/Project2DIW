var myvideo = document.getElementById('myvideo'),
    playbutton = document.getElementById('playme'),
    jumplink = document.getElementById('probeerknop'),
    addstart = document.getElementById('addstart'),
    addend = document.getElementById('addend');

jumplink.addEventListener("click", function (event) {
    var startpunt = document.getElementById('TS1start').value;
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

addstart.addEventListener("click", function() {
    document.getElementById('TS1start').value = myvideo.currentTime;
},false);

addend.addEventListener("click", function() {
    document.getElementById('TS1end').value = myvideo.currentTime;
},false);

/*playbutton.addEventListener("click", function () {
    var urlvanpagina =window.location.href.toString();
document.getElementsByClassName('twitter-share-button').data-url = urlvanpagina ;
}, false);*/


/*video.addEventListener("timeupdate", function(){
    var eindpunt = document.getElementById('TS1end').value;
    if(this.currentTime >= eindpunt) {
        this.pause();
    }
});*/