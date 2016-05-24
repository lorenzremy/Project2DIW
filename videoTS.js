var myvideo = document.getElementById('myvideo'),
    playbutton = document.getElementById('playme'),
    jumplink = document.getElementById('testtimestamp1');

jumplink.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.play();
    myvideo.pause();
    myvideo.currentTime = 7;
    myvideo.play();
}, false);

playbutton.addEventListener("click", function () {
    if (myvideo.paused) {
        myvideo.play();
    } else {
        myvideo.pause();
    }
}, false);