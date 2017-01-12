jQuery(function($){
      var $cards = $('.cards');
	var $card = $('.card');
	var $cardsclose = $('.cards-close');
	var numberofcards = $card.length;
	var nextcard = 1;
	var $nextcard = $card.eq(nextcard);
	var $formercard = $card.eq(nextcard-1);
      var isanimated = false;

	$nextcard.addClass('bottom');
	$formercard.addClass('top');

	/* Rotate second card on page load */
	$nextcard.rotate({
		center: ['0%','0%'],
		angle:-15
	});

      /* Access next card in deck */
      $cards.on("click", $nextcard, function(){ 
            if( isanimated == false){
                  rotatecard();
            }
      });

      function rotatecard(){
            isanimated = true; 
            $cardsclose.fadeOut();
            nextcard ++;  

            $nextcard.rotate({ /* rotate second card up */
                  duration:1000,
                  center: ['0%', '0%'],
                  angle:-15,
                  animateTo:-90,
                  callback: function(){ 
                        $nextcard.addClass('top').removeClass('bottom');
                        $formercard.addClass('bottom').removeClass('top');

                        $nextcard.rotate({ /* rotate second card above the first and back into position */
                              center: ['0%', '0%'],
                              duration:1000,
                              angle:-90,
                              animateTo:0,
                              callback: function(){
                                    if(nextcard == numberofcards){
                                          $nextcard = $card.eq(0);
                                          nextcard = 0;
                                          $formercard.removeClass('bottom');
                                          $formercard = $card.eq(numberofcards - 1);
                                    } else{
                                          $nextcard = $card.eq(nextcard);
                                          $formercard.removeClass('bottom');
                                          $formercard = $card.eq(nextcard-1);
                                    }
                                    $cardsclose.fadeIn();
                                    $nextcard.rotate({
                                          center: ['0%','0%'],
                                          animateTo:-15,
                                          callback: function(){
                                                isanimated = false; 
                                          }
                                    });
                              }
                        });   
                  }
            });
      }

});