jQuery(function($){
	/*------------------------
		TEXT ROTATE 
	------------------------*/
	 /* Slider */
	var handle = $( "#custom-handle" );
	var angle;
    $( "#slider" ).slider({
    	orientation: "vertical",
    	min:0,
    	max:360,
    	value:0,
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
        angle = $(this).slider("value");
        rotate();
      }
    });

    $('.btn-rotate').click(function() {
	     // $('.card').addClass('rotate');
	     rotate();
	 });

	function rotate(){
	    // var angle = ($('.card').data('angle') + 5) || 5;

	    $('.card').css({'transform': 'rotate(' + angle + 'deg)'});
	    $('.card').data('angle', angle);
	}
});