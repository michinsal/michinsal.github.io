$(document).ready(function() {

	var source = "https://michinsal.github.io/bgm.mp3"
	var audio = document.createElement("audio");
	audio.src = source;
	audio.play();    
	audio.volume = 0.2;

	    
	

	$('body').on('click','.audio a',function() {

	  if (audio.paused == false) {
	      audio.pause();

	  } else {
	      audio.play();
	  }
	  $('.audio i').toggleClass('xi-volume-off xi-volume-up');

	});



	var pts = $(".last p").get().sort(function(){ 
      return Math.round(Math.random())-0.5; //random so we get the right +/- combo
    }).slice(3,20)
    $(pts).appendTo(pts[0].parentNode).show();


});






