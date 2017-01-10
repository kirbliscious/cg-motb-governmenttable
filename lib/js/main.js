jQuery(function($){

	/*----------------- Window Center */
	var center_x = $(window).width()/2,
		center_y = $(window).height()/2;

	/*----------------- Distribute Flags
	  ----------------- http://stackoverflow.com/questions/10152390/dynamically-arrange-some-elements-around-a-circle
	*/
	function distributeflags() {
	    var $Flags = $('#Flags'),
	   	 	$flag = $('.flag'),
	    	radius = ($(window).height()-200)/ 2, 
	        angle = 0, 
	        step = (2*Math.PI) / $flag.length;
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

	/*----------------- Position and Open Cards 
	  ----------------- http://stackoverflow.com/questions/9614109/how-to-calculate-an-angle-from-points
	*/
	/* Rotate Flags onLoad */
	$('.flag').each(function(){
		rotateFlag($(this));
	});

	function rotateFlag(_flag){
		$flag = _flag,
		flag_pos = $flag.position(),
		flag_pos_x = flag_pos.left + $flag.width()/2, /*hard coded in flag width and height */
		flag_pos_y = flag_pos.top + $flag.height()/2,
		dy = flag_pos_x - center_x,
		dx = flag_pos_y - center_y,
		theta = Math.atan2(dy,dx);
		theta *= 180 / Math.PI;
		theta *= -1;
		$flag.css({'transform': 'rotate('+theta+'deg'});
	};

	function positionCards(_flag){
		/* Get Flag Position */
		var $flag = _flag,
			$flagcards = $($flag.data("targetcards")),
			flag_pos = $flag.position(),
			flag_pos_x = Math.round(flag_pos.left,1),
			flag_pos_y = Math.round(flag_pos.top,1),
			dy = flag_pos_x - center_x,
			dx = flag_pos_y - center_y,
			theta = Math.atan2(dy,dx);
			theta *= 180 / Math.PI;
			theta *= -1;

			console.log("flag x="+flag_pos_x+", flag y="+flag_pos_y);
			console.log("center x="+center_x+"center y="+center_y);
			console.log(theta);

	


		/* Position Cards */
		var $cards = $('.cards'),
			cards_pos_x = flag_pos_x + $flag.width()/2,
			cards_pos_y = flag_pos_y + $flag.height()/2,
			cardswidth = $cards.width(),
			cardsheight = $cards.height();

		$cards.css({
			left: cards_pos_x + "px",
			top: cards_pos_y + "px"
		});


		/*----------------- Calculate four corners of rotated rectangle 
		  ----------------- http://stackoverflow.com/questions/22261388/find-vertices-of-rectangle-after-rotating-it
		*/
		var thetarad = theta * Math.PI / 180;

		function rotatedCardCorners(pivotx, pivoty, pointx, pointy, theta) {
		  var x = cards_pos_x + Math.round((Math.cos(theta) * (pointx - pivotx)) -
		                     (Math.sin(theta) * (pointy - pivoty)) +
		                     pivotx),
		      y = cards_pos_y + Math.round((Math.sin(theta) * (pointx - pivotx)) +
		                     (Math.cos(theta) * (pointy - pivoty)) +
		                     pivoty);

		  return [x,y];
		};

		var cardsW = $cards.outerWidth(),
			cardsH = $cards.outerHeight(),
			cardsT = $cards.offset().top,
			cardsL = $cards.offset().left,
			screenH = $(window).height(),
			screenW = $(window).width();

		var rotatedcardsBL = rotatedCardCorners(cardsL, cardsT, cardsL, cardsH, thetarad);
		var rotatedcardsBR = rotatedCardCorners(cardsL, cardsT, cardsW, cardsH, thetarad);
		var rotatedcardsTR = rotatedCardCorners(cardsL, cardsT, cardsW, cardsT, thetarad);
		var rotatedcardsTL = [cards_pos_x, cards_pos_y];
		

		/*----------------- Is visible ? 
		  ----------------- http://stackoverflow.com/questions/1725508/how-can-i-determine-if-an-html-element-is-offscreen
		*/
		var isEntirelyVisible =(rotatedcardsBL[1] < screenH && rotatedcardsBL[1] > 0 && rotatedcardsBL[0] < screenW && rotatedcardsBL[0] > 0 &&
								rotatedcardsBR[1] < screenH && rotatedcardsBR[1] > 0 && rotatedcardsBR[0] < screenW && rotatedcardsBR[0] > 0 &&
								rotatedcardsTR[1] < screenH && rotatedcardsTR[1] > 0 && rotatedcardsTR[0] < screenW && rotatedcardsTR[0] > 0 &&
								rotatedcardsTL[1] < screenH && rotatedcardsTL[1] > 0 && rotatedcardsTL[0] < screenW && rotatedcardsTL[0] > 0  );

		if( isEntirelyVisible == false){

		};

		/* Rotate cards to polar angle*/
		$flagcards.css({'transform': 'rotate('+theta+'deg'});
		$flagcards.fadeIn();

		/* Hide Flag in Circle */
		$flag.find('img').fadeOut();

		/* Clone flag to Card Deck */
		$flag.clone().css({
			'transform': 'rotate(0deg)',
			top: 30 * -1 + "px",
			left: 30 * -1 + "px",
			'z-index': 1000
		}).prependTo($cards);

		/* Connect Cards to Flag */
		var flagid = "#" + $flag.attr('id');
		$cards.attr('data-targetflag',flagid);
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