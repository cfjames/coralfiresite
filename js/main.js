jQuery(document).ready(function($){
	$(".nav-toggle").click(function(a) {
		if($("body").hasClass("nav-is-active")){
			$("html, body").unbind("touchmove");
			$("body").removeClass("nav-is-active");
		}
		else{
			$('html, body').bind('touchmove', function(e){
				 //prevent native touch activity like scrolling
				 e.preventDefault();
			});
			$("body").addClass("nav-is-active");
		}
	});

	$('.nav-main a[href^="/#"]').on('click', function(){
		$('html, body').unbind('touchmove');
		$("body").removeClass("nav-is-active");
	});
});



smoothScroll.init({
	speed: 500, // Integer. How fast to complete the scroll in milliseconds
	easing: 'easeOutQuad', // Easing pattern to use
	updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
	offset: 0 // Integer. How far to offset the scrolling anchor location in pixels
});

$(function() {
    $(window).scroll( function(){


        $('.fader').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 400;

            if( bottom_of_window > bottom_of_object ){

                $(this).addClass( "fadeIn" );

            }
        });

    });
});

