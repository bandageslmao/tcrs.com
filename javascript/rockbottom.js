 $(window).scroll(function() {   
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       alert("woah! you hit the bottom of this page! great job!");
   }
});
