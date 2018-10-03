$(document).ready(function(){

	var xPos;
	var yPos;
	var winWidth;
	var winHeight;

	winWidth = $(window).width();
	winHeight = $(window).height();

	var n = 0;

// (Function() {
// 			var introEL = $('div.intro'),
// 			introHeadingH = introEl.find('h1').height(),
// 			windowH = $(window).height();
//
// 			introEl.css('padding',(windowH - introHeadingH)/2 + 'px 0');
//
// 			$(document).on('scroll', function() {
// 				introEL.slideUp(1000, function() { $(document).off('scroll');});
// 			});
//
// 	})();

	$(document).click(function(){
		n = n+1;

		if(n == 5 ){
			n = 0;
		}
		console.log(n);
	});

	// check when the mouse moves
	$(document).mousemove(function(e){

		// update mouse x and y position
		xPos = e.pageX;
		yPos = e.pageY;
		$('#mouse-pos').html('x-pos: ' + xPos + '<br />y-pos: ' + yPos);

		/* getting the increment of scale */
		increment = 10/winWidth;

		/* add/multiply the scale based on your xPos */
		posInc = xPos*increment;

		/* based on xPos, subtract from 30 */
		negInc = 10-posInc;

		if(n == 0 ){

			$('.leftStem, .rightStem').css({
				'background-color' : 'rgb('+ xPos/10 + ', ' + xPos/10 + ', ' + xPos/10 + ')',
				// 'transform':'scaleX(1) scaleY(1)'
			});

		}

		if(n == 1 ){

			// change div with the id "element"s CSS when you move your mouse
			$('.leftStem').css({
				'transform' : 'scaleY(' + posInc +')',
				'background-color' : 'rgb('+ xPos/10 + ', ' + xPos/10 + ', ' + xPos/10 + ')'
			});

			$('#stemLeftA').css({
				'transform' : 'scaleY(' + posInc +') rotate(28deg)',
				'background-color' : 'rgb('+ xPos/10 + ', ' + xPos/10 + ', ' + xPos/10 + ')'
			});

		}

		if(n == 2 ){

			$('.leftStem').css({
				'transform' : 'scaleX(' + posInc +')',
				'background-color' : 'rgb('+ xPos/10 + ', ' + xPos/10 + ', ' + xPos/10 + ')'
			});

		}

		if(n == 3 ){

			$('.rightStem').css({
				'transform' : 'scaleY(' + posInc +')',
				'background-color' : 'rgb('+ xPos/10 + ', ' + xPos/10 + ', ' + xPos/10 + ')'
			});

		}

		if(n == 4 ){

			$('.rightStem').css({
				'transform' : 'scaleX(' + posInc +')',
				'background-color' : 'rgb('+ xPos/10 + ', ' + xPos/10 + ', ' + xPos/10 + ')'
			});

		}

		// $('.rightStem').css({
		// 	// 'height' : 'scale(' + xPos + '1px) scale(' + xPos/100 + ')',
		// 	'transform' : 'scaleY(' + posInc +')',
		// 	'background-color' : 'rgb('+ yPos/5 + ', ' + xPos/3 + ', ' + (xPos*yPos)	/10 + ')',
		// })

			// console.log('x: '+xPos);
			// console.log('width: '+winWidth);
			// console.log('30/: '+30/winWidth);
			// console.log('width/:'+winWidth/30);
		});



});
