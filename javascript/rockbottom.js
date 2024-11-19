 $(window).scroll(function() {   
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       alert("woah! you hit the bottom of this page! great job!");
    var x = document.getElementById("rockbottom"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
   }
});
