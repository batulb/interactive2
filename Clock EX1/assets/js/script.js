$(document).ready(function(){

    // add a zero to times below 10
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    // set up time getting function
    function getTime(){
        // get the date
    	var d = new Date();

        // get hours, minutes, and seconds
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
    }

// hours
  var n = 1;

      setInterval(function() {
        getTime();
          if(n == 60){
              $('body').html(' ');
          }else {
              $('body').append("min");
          }
          n = n+1;
  }, 1000);

// mins
    var n = 1;

        setInterval(function() {
          getTime();
            if(n == 10){
                $('body').html(' ');
            }else {
                $('body').append("hr");
            }
            n = n+1;
    }, 1000);

// seconds
  var n = 1;

    setInterval(function() {
      getTime();
        if(n == 2){
            $('body').html(' ');
        }else {
            $('body').append("sec");
        }
        n = n+1;
    }, 1000);

});

// call getTime every 1 second
// setInterval(function() {
//   getTime();
// }, 1000);

// setInterval(function() {
//   $('body').append('hi');
// }, 500);

// update the clock's text
// $('#clock').html(h + ":" + m + ":" + s);

// rotate clock based on the minute
// $('#clock').css('transform', 'rotate('+ s * 6 +'deg');

// detect a specific time
// if(m == 00){
// 	$('body').addClass('noon');
// } else {
// 	$('body').removeClass('noon');
// }
