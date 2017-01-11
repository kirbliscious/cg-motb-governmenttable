jQuery(function($){

	/*----------------- Window */
	var center_x = $(window).width()/2,
		center_y = $(window).height()/2,
		screenH = $(window).height(),
		screenW = $(window).width();


	/*----------------- Cards */
	var $cards = $('.cards'),
		cardW = $cards.outerWidth(),
		cardH = $cards.outerHeight(),
		cardT = $cards.offset().top,
		cardL = $cards.offset().left,
		cardBL = [cardL, cardH],
		cardBR = [cardW, cardH],
		cardTR = [cardW, cardT],
		cardTL = [cardL, cardT];

	/*----------------- Flags */
	var $flag = $('.flag'),
		flagW = $flag.width(),
		flagH = $flag.height();


	/*----------------- Distribute Flags
	  ----------------- http://stackoverflow.com/questions/10152390/dynamically-arrange-some-elements-around-a-circle
	*/
	function distributeflags() {
	    var $flag = $('.flag'),
	    	radius = (screenH - 200) / 2, 
	        angle = 0, 
	        step = (2 * Math.PI) / $flag.length;
	    $flag.each(function() {
	        var x = Math.round(center_x + radius * Math.cos(angle) - $(this).width()/2);
	        var y = Math.round(center_y + radius * Math.sin(angle) - $(this).height()/2);
	        $(this).css({
	            left: x + 'px',
	            top: y + 'px'
	        });
	        angle += step;
	    });
	}
	distributeflags();


	/*----------------- Rotate Flags */
	function rotateFlag(_flag){
		$flag = _flag,
		flagPos = $flag.position(),
		dy = (flagPos.top + $flag.height()/2) - center_x,
		dx = (flagPos.left + $flag.width()/2) - center_y,
		theta = Math.atan2(dx,dy);
		theta *= 180 / Math.PI;
		theta *= -1;
		$flag.css({'transform': 'rotate('+theta+'deg'});
	};
	$('.flag').each(function(){
		rotateFlag($(this));
	});


	/*----------------- Position and Open Cards 
	  ----------------- http://stackoverflow.com/questions/9614109/how-to-calculate-an-angle-from-points
	*/
	function positionCards(_flag){
		// Position cards based on flag location
		var $flag = _flag,
			flagPos = $flag.position(),
			$cards = $($flag.data("targetcards")),
			rotatedCardTL = [(flagPos.left + $flag.width()/2), (flagPos.top + $flag.height()/2)];

		$cards.css({
			left: rotatedCardTL[0] + "px",
			top: rotatedCardTL[1] + "px"
		});

		// Rotate cards to polar angle
		var dx = rotatedCardTL[0] - center_x,
			dy = rotatedCardTL[1] - center_y,
			thetarad = (Math.atan2(dx,dy)) * -1;
			theta = thetarad * (180 / Math.PI); // convert radians to degrees
		$cards.css({'transform': 'rotate('+theta+'deg'});
		$cards.fadeIn();

		// Hide Flag in Circle
		$flag.find('img').fadeOut();

		// Clone flag to Card Deck
		$flag.clone().css({
			'transform': 'rotate(0deg)',
			top: flagH/2 * -1 + "px",
			left: flagW/2 * -1 + "px",
			'z-index': 1000
		}).prependTo($cards);

		// Connect Cards to Flag
		var flagId = "#" + $flag.attr('id');
		$cards.attr('data-targetflag',flagId);


		/*----------------- Calculate four corners of rotated rectangle 
		  ----------------- http://stackoverflow.com/questions/22261388/find-vertices-of-rectangle-after-rotating-it
		*/
		function rotatedCardCorners(pivot, point, theta) {
		  var x = rotatedCardTL[0] + Math.round((Math.cos(theta) * (point[0] - pivot[0])) - (Math.sin(theta) * (point[1] - pivot[1])) + pivot[0]),
		      y = rotatedCardTL[1] + Math.round((Math.sin(theta) * (point[0] - pivot[0])) + (Math.cos(theta) * (point[1] - pivot[1])) + pivot[1]);
		  return [x,y];
		};

		var rotatedCardBL = rotatedCardCorners(cardTL, cardBL, thetarad),
			rotatedCardBR = rotatedCardCorners(cardTL, cardBR, thetarad),
			rotatedCardTR = rotatedCardCorners(cardTL, cardTR, thetarad);

			console.log("bl="+rotatedCardBL);
			console.log("br="+rotatedCardBR);
			console.log("tr="+rotatedCardTR);

		/*----------------- Is the card deck 100% visible ? 
		/*----------------- Top Left corner always on screen
		  ----------------- http://stackoverflow.com/questions/1725508/how-can-i-determine-if-an-html-element-is-offscreen
		  ----------------- https://codepen.io/ma77os/pen/KGIEh?editors=0010
		*/
		function isVisible(){
			isEntirelyVisible =(rotatedCardBL[1] < screenH && rotatedCardBL[1] > 0 && rotatedCardBL[0] < screenW && rotatedCardBL[0] > 0 &&
								rotatedCardBR[1] < screenH && rotatedCardBR[1] > 0 && rotatedCardBR[0] < screenW && rotatedCardBR[0] > 0 &&
								rotatedCardTR[1] < screenH && rotatedCardTR[1] > 0 && rotatedCardTR[0] < screenW && rotatedCardTR[0] > 0  );

			if( isEntirelyVisible == false){
				console.log("false");
				interpolateCards();
			} else{
				$cards.attr('data-x', 0);
				$cards.attr('data-y', 0);
			};
		};

		function interpolateCards(){
			var startX = rotatedCardTL[0],
				startY = rotatedCardTL[1],
				endX = center_x,
				endY = center_y;

			var rotatedCardTL_temp = [];
			rotatedCardTL_temp[0] = lerp(startX, endX, 0.05);
			rotatedCardTL_temp[1] = lerp(startY, endY, 0.05);

			var move = [rotatedCardTL_temp[0] - rotatedCardTL[0], rotatedCardTL_temp[1]-rotatedCardTL[1]];
			
			var	x = parseInt($cards.attr('data-x')) + move[0],
				y = parseInt($cards.attr('data-y')) + move[1];


			$cards.css({
				'-webkit-transform':'rotate('+theta+'deg)'
			});

			$cards.transition({x:x+"px", y:y+"px", rotate:theta+'deg'}, 'linear');

			rotatedCardBL = rotatedCardCorners(cardTL, cardBL, thetarad),
			rotatedCardBR = rotatedCardCorners(cardTL, cardBR, thetarad),
			rotatedCardTR = rotatedCardCorners(cardTL, cardTR, thetarad);

			console.log("tl="+rotatedCardTL);
			console.log("bl="+rotatedCardBL);
			console.log("br="+rotatedCardBR);
			console.log("tr="+rotatedCardTR);

			$cards.attr('data-x', x);
			$cards.attr('data-y', y);
			rotatedCardTL = rotatedCardTL_temp;

			 isVisible();

			// console.log("rotatedcardTL="+rotatedCardTL);
			// console.log("rotatedcardTL temp="+rotatedCardTL_temp);
			// console.log("slope="+move);
		}
		function lerp (start, end, amt){
		  return (1-amt)*start+amt*end
		}
		isVisible();
	}

	$('.flag').on('click', function(){
		positionCards($(this));
	});


	/*----------------- Close card deck */
	$('.cards').on('click', '.cards-close', function(e){
		var $cards = $(this).parent().parent(),
			$cardsclose = $(this),
			$cardsflag = $cards.find('.flag'),
			$flagid = $($cards.attr("data-targetflag"));
		$cardsflag.remove(); /* Remove the flag pin from cards */
        $cards.fadeOut(); /* Hide Cards */
        $flagid.find('img').fadeIn(); /* Reveal flag */
        e.stopPropagation(); /* Prevent card flip */

	});
	  

	/*--------------------------- 
		Center map image
	----------------------------*/
	var $map, mapHeight, $mapWidth, $mapFlags, mapFlagsHeight, mapFlagsWidth, overlapHeight, overlapWidth;
    function centerImage() {
		$map = $('.map_image');
		$mapFlags = $('#Map');
		mapHeight = $map.height();
		mapWidth = $map.width();
        mapFlagsHeight = $mapFlags.height();
		mapFlagsWidth = $mapFlags.width();
        overlapHeight = (mapFlagsHeight - mapHeight) / 2;
		overlapWidth = ((mapFlagsWidth - mapWidth) / 2);
        $map.css('margin-top', overlapHeight);
		$map.css('margin-left', overlapWidth);
    }
	    
	centerImage(); 
     

	
});