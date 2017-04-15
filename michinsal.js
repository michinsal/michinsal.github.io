

$(document).ready(function() {
	var source = "http://www.brosu.com/music/brosu.mp3"
    var audio = document.createElement("audio");
    audio.src = source;
    audio.loop = true;
    
    
	
	$('body').on('click','.audio',function() {
  	
  	  if (audio.paused == false) {
        audio.pause();
  	  } else {
        audio.play();
  	  }
  	  
	});
	
    
    

    
});





