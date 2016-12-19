$(document).ready(function(){
	var $card = $('.card');
	var $activecard = $('.card.active');
	var $nextcard = $('.card.next');
	var $swapback, $swapforward;
	var $cardsclose = $('.cards-close');

	var numberofcards = $card.length;

	$(document).on('click', $cardsclose, function(){
            $(this).parent().hide();
	});

	$nextcard.rotate({
		center: ['0%','0%'],
		angle:-15
	});
      
	$(".cards").on("click", $nextcard, function(){
        var index = $('.cards').children().index($nextcard);
        console.log(index);
		$cardsclose.fadeOut();

		$swapforward = $nextcard.addClass('swapforward').removeClass('next');
		$swapback = $activecard.addClass('swapback').removeClass('active');

		
		$swapforward.rotate({ /* rotate up */
      		center: ['0%', '0%'],
      		angle:-15,
      		animateTo:-90,
      		callback: function(){ 
      			$swapforward.addClass('active');
      			$swapforward.rotate({ /* rotate back into position */
      				center: ['0%', '0%'],
      				angle:-90,
      				animateTo:0,
      				callback: function(){
      					if(index == numberofcards){
      						$('.card').eq(0).addClass('next');
      					} else{
      						$swapforward.next('.card').addClass('next');
      					}
      					
      					$nextcard = $('.card.next');
      					$swapforward.removeClass('swapforward');
      					$swapback.removeClass('swapback');
      					$activecard = $('.card.active');
      					$cardsclose.fadeIn();
      					$nextcard.rotate({
      						center: ['0%','0%'],
							animateTo:-15
      					});
      				}
      			});	
      		}
      	});
	});
});