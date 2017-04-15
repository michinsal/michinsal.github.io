$(document).ready(function() {

	var source = "https://michinsal.github.io/bgm.mp3"
	var audio = document.createElement("audio");
	audio.src = source;
	audio.play();    
	audio.volume = 0.2;

	    
	$('body').on('click','.audio',function() {

	  if (audio.paused == false) {
	      audio.pause();

	  } else {
	      audio.play();
	  }

	  $('.audio i').toggleClass('xi-volume-off xi-volume-up');

	});
	$('body').on('click','.player',function() {

	  if (audio.paused == false) {
	      audio.pause();

	  } else {
	      audio.play();
	  }


	});



});




