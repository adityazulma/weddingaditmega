(function ($) {
// Set the date we're counting down to
        var countDownDate = new Date("Dec 13, 2020 09:00:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

          // Get today's date and time
          var now = new Date().getTime();
            
          // Find the distance between now and the count down date
          var distance = countDownDate - now;
            
          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
          // Output the result in an element with id="demo"

          document.getElementById("waktu").innerHTML = "<div class='countdown__item'><span>"+ days + "</span> <p>Day</p> </div>" + "<div class='countdown__item'><span>"+ hours + "</span> <p>Hour</p> </div>" + "<div class='countdown__item'><span>"+ minutes + "</span> <p>Min</p> </div>" + "<div class='countdown__item'><span>"+ seconds + "</span> <p>Sec</p> </div>";
            
          // If the count down is over, write some text 
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("waktu").innerHTML = "EXPIRED";
          }
        }, 1000);


        //MAPS//

})(jQuery);