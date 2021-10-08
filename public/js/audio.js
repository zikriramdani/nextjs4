var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    $('#iframeAudio').remove()
}
else {
    $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
}

$(document).ready(function() {
    var btn = $(".btn-musik");
    var myAudio = document.getElementById("myAudio");
    btn.click(function() {
        if (myAudio.paused) {
            // console.log('a')
            myAudio.play();
            // myAudio.pause();
        } else { 
            // console.log('b')
            // myAudio.play();
            myAudio.pause();
        }
        btn.toggleClass("paused");
        return false;
    });
});