document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('audio');
    var playButton = document.getElementById('play-btn');
    var stopButton = document.getElementById('stop-btn');

    playButton.addEventListener('click', function () {
        audio.play();
    });

    stopButton.addEventListener('click', function () {
        audio.pause();
        audio.currentTime = 0;
    });
});
