$(document).ready(function() {

	var source = "https://michinsal.github.io/bgm.mp3"
	var audio = document.createElement("audio");
	audio.src = source;
	

	    
	$('body').on('click','.audio',function() {

	  if (audio.paused == false) {
	      audio.pause();

	  } else {
	      audio.play();
	  }


	});



});




