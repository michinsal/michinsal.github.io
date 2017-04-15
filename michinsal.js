var source = "bgm.mp3"
var audio = document.createElement("audio");
audio.src = source;
audio.play();    
audio.volume = 0.2;

    
$('.xi-volume-off').click(function() {
  if (audio.paused == false) {
      audio.pause();

  } else {
      audio.play();
  }
  $('.audio i').toggleClass('xi-volume-off xi-volume-up');
});