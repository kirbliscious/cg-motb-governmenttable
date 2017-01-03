jQuery(function($){

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
	var $map, mapHeight, $mapWidth, $mapContainer, mapContainerHeight, mapContainerWidth, overlapHeight, overlapWidth;
    function centerImage() {
		$map = $('.map_image');
		$mapContainer = $('#Map');
		mapHeight = $map.height();
		mapWidth = $map.width();
        mapContainerHeight = $mapContainer.height();
		mapContainerWidth = $mapContainer.width();
        overlapHeight = (mapContainerHeight - mapHeight) / 2;
		overlapWidth = ((mapContainerWidth - mapWidth) / 2);
        $map.css('margin-top', overlapHeight);
		$map.css('margin-left', overlapWidth);
    }
	    
	centerImage(); 
     

	/*--------------------------- 
		Reveal flag content
	----------------------------*/

	/* Window center */
	var windowcenter, windowcenter_x, windowcenter_y;
	windowcenter = centerofscreen();
	windowcenter_x = windowcenter.windowcenter_x;
	windowcenter_y = windowcenter.windowcenter_y;

	var flagtarget_pos, flagtarget, flagtarget_x, flagtarget_y, flagtarget_angle;
	$('.flag').on('click', function(){
		/* Variables */
		$flag = $(this);
		$flagtarget = $($flag.data("target"));

		/* Cartesian coordinates */
		flagtarget_pos = $flag.position();
		flagtarget_x = roundUp(flagtarget_pos.left, 1); /* x coordinate */
		flagtarget_y = roundUp(flagtarget_pos.top, 1); /* y coordinate */
		console.log("Flag Position (" + flagtarget_x + "," + flagtarget_y +")");
		
		/* Position cards */
		$flagtarget.offset({top:flagtarget_y, left:flagtarget_x});

		/* Cartesian coordinates relative to center */
		flagtarget_x = flagtarget_x - windowcenter_x;
		flagtarget_y = windowcenter_y - flagtarget_y;
		console.log(flagtarget_x);
		console.log(flagtarget_y);

		/* Polar coordinates */
		flagtarget_angle = cartesian2Polar(flagtarget_x, flagtarget_y).radians; /* radians */
		flagtarget_angle = flagtarget_angle * (180/Math.PI) -0; /* degrees */
		console.log(flagtarget_angle);

		/* Rotate cards */
		rotate($flagtarget, flagtarget_angle)
		
		$flagtarget.fadeIn();
	});

	/* Close flag content */
	$('.flagcontent-close').on('click',function(){
		$(this).closest('.flagcontent').fadeOut();
	});

	/*-------------------
		FUNCTIONS 
	--------------------*/
	/* round up */
	function roundUp(num, precision) {
	  return Math.ceil(num * precision) / precision
	}
	/* Cartesian to Polar */
	function cartesian2Polar(x, y){
	    distance = Math.sqrt(x*x + y*y)
	    radians = Math.atan2(y,x) //This takes y first
	    polarCoor = { distance:distance, radians:radians }
	    return polarCoor
	}

	/* Center of screen */
	function centerofscreen(){
		var _center_x, _center_y;
		_center_y = $(window).height()/2;
		_center_x = $(window).width()/2;
		return {windowcenter_x: _center_x, windowcenter_y: _center_y}
	};

	/* Rotate */
	function rotate(element, degrees){
		element.css({'transform':'rotate('+degrees+'deg)'});
		return element;
	}
});