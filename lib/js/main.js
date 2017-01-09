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
	function positionCards(_flag){
		var $flag = _flag,
			$flagcards = $($flag.data("targetcards")),
			$cards = $('.cards'),
			flag_pos = $flag.position(),
			flag_pos_x = Math.round(flag_pos.left,1),
			flag_pos_y = Math.round(flag_pos.top,1),
			cards_pos_x = flag_pos_x + $flag.width()/2,
			cards_pos_y = flag_pos_y + $flag.height()/2,
			dy = flag_pos_x - center_x,
			dx = flag_pos_y - center_y,
			theta = Math.atan2(dy,dx);
			theta *= 180 / Math.PI;

		$cards.css({
			left: cards_pos_x + "px",
			top: cards_pos_y + "px"
		});

		/* Rotate cards to polar angle*/
		theta *= -1;
		$flagcards.css({'transform': 'rotate('+theta+'deg'});
		$flagcards.fadeIn();

		/* Hide Flag in Circle */
		$flag.find('img').fadeOut();

		/* Clone flag */
		$flag.clone().css({
			top: $flag.height()/2 * -1 + "px",
			left: $flag.width()/2 * -1 + "px",
			'z-index': 1000
		}).prependTo($cards);

		/* Set Cards Data Attribute */
		var flagid = "#" + $flag.attr('id');
		$cards.attr('data-targetflag',flagid);
	}

	$('.flag').on('click', function(){
		positionCards($(this));
	});


	/*----------------- Close card deck */
	$('.cards-close').click(function(){
		$('.cards').find('.flag').remove();
		$cardsclose = $(this);
        var $cards = $cardsclose.parent().parent();
        $cards.fadeOut();

        var $cardflag = $($cards.data("targetflag"));
        $cardflag = $cardflag.find('img');
        $cardflag.fadeIn();

            event.stopPropagation();
	});

	/*----------------- Interact JS */

		// target elements with the "draggable" class
	interact('.draggable')
	  .draggable({
	    // enable inertial throwing
	    inertia: true,
	    // keep the element within the area of it's parent
	    restrict: {
	      restriction: "parent",
	      endOnly: true,
	      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
	    },
	    // enable autoScroll
	    autoScroll: true,

	    // call this function on every dragmove event
	    onmove: function(event) {
	    	dragMoveListener(event);
	    	
	    },

	    // call this function on every dragend event
	    onend: function (event) {
	      var textEl = event.target.querySelector('p');
	      textEl && (textEl.textContent = 'Moved a distance of ' + (Math.sqrt(event.dx * event.dx + event.dy * event.dy)|0) + 'px');

	    }


	  });

	  function dragMoveListener (event) {
	    var target = event.target,
	        // keep the dragged position in the data-x/data-y attributes
	        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
	        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

	    // translate the element
	    target.style.webkitTransform =
	    target.style.transform =
	      'translate(' + x + 'px, ' + y + 'px)';

	    // update the posiion attributes
	    target.setAttribute('data-x', x);
	    target.setAttribute('data-y', y);
	  }

	  // this is used later in the resizing and gesture demos
	  window.dragMoveListener = dragMoveListener;


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