$(document).ready(function(){

	var xPos;
	var yPos;
	var winWidth;
	var winHeight;

	winWidth = $(window).width();
	winHeight = $(window).height();

	// check when the mouse moves
	$(document).mousemove(function(e){

		// update mouse x and y position
		xPos = e.pageX;
		yPos = e.pageY;
		$('#mouse-pos').html('x-pos: ' + xPos + '<br />y-pos: ' + yPos);

		// change div with the id "element"s CSS when you move your mouse
		$('.leftStem').css({
			// 'transform' : 'scaleY(' + xPos/winWidth +')',
			'background-color' : 'rgb('+ yPos/5 + ', ' + xPos/3 + ', ' + (xPos*yPos)	/10 + ')'
		});

		$('.rightStem').css({
			'height' : 'scale(' + xPos + '1px) scale(' + xPos/100 + ')',
			'background-color' : 'rgb('+ yPos/5 + ', ' + xPos/3 + ', ' + (xPos*yPos)	/10 + ')',
		});

		$('.misfits').css({
			'height' : 'scale(' + xPos + '1px)',
			'background-color' : 'rgb('+ yPos/5 + ', ' + xPos/3 + ', ' + (xPos*yPos)	/10 + ')',
		});

			console.log('x: '+xPos);
			console.log('width: '+winWidth);
			console.log('30/: '+30/winWidth);
			console.log('width/:'+winWidth/30);
		});



});
