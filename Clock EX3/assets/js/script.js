$(document).ready(function(){

  const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
    //
    // // add a zero to times below 10
    // function addZero(i) {
    //     if (i < 10) {
    //         i = "0" + i;
    //     }
    //     return i;
    // }
    //
    // // set up time getting function
    // function getTime(){
    //     // get the date
    // 	var d = new Date();
    //
    //     // get hours, minutes, and seconds
    //     var h = addZero(d.getHours());
    //     var m = addZero(d.getMinutes());
    //     var s = addZero(d.getSeconds());
    //
    //     // update the clock's text
    //     $('#clock').html(h + ":" + m + ":" + s);
    //
    //     // rotate clock based on the minute
    //     // $('#clock').css('transform', 'rotate('+ s * 6 +'deg');
    //
    //     // detect a specific time
    //     // if(m == 00){
    //     // 	$('body').addClass('noon');
    //     // } else {
    //     // 	$('body').removeClass('noon');
    //     // }
    // }
    //
    // // call getTime every 1 second
    // setInterval(function() {
    //   getTime();
    // }, 1000);
    //
    //
    // // seconds
    //   var n = 1;
    //
    //     setInterval(function() {
    //       getTime();
    //         if(n == 5){
    //             $('body').html(' ');
    //         }else {
    //             $('body').append("sec");
    //         }
    //         n = n+1;
    //     }, 1000);
});
