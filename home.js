document.addEventListener("DOMContentLoaded",function(){
    var audio = new Audio("./Audio/untitled.mp3");
    function playAudio(){
        audio.play();
    }

    document.getElementById("PlaySound").addEventListener("click",playAudio)
});