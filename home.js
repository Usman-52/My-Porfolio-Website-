function togglePlayPause() {
    var myAudio = document.getElementById("myAudio");
    if (myAudio.paused) {
        myAudio.play();
    } else {
        myAudio.pause();
    }
}
