var myvideo = document.getElementById('myvideo'),
    playbutton = document.getElementById('playme'),
    jumplink = document.getElementById('jump');

jumplink.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.play();
    myvideo.pause();
    myvideo.currentTime = 7;
    myvideo.play();
}, false);

// only in to demonstrate video
playbutton.addEventListener("click", function () {
    if (myvideo.paused) {
        myvideo.play();
    } else {
        myvideo.pause();
    }
}, false);