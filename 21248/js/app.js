(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		$(".home-slider, .quote-slider").flexslider({
			directionNav: false,
			controlNav: true,
			start: function(){ $(".flex-active").parents("li").addClass("flex-active"); },
			after: function(){
				$(".flex-active").parents("li").addClass("flex-active"); 
				$(".flex-active").parents("li").siblings().removeClass("flex-active"); 
			}
		});


		$('.map').gmap3({
			map: {
				options: {
					maxZoom: 14 
				}  
			},
			marker:{
				address: "40 Sibley St, Detroit",
			}
		},
		"autofit" );

	});

	$(window).load(function(){
		var $container = $(".masonry-layout");
		$container.isotope({
			layoutMode: 'masonry',
	        animationOptions: {
	            duration: 750,
	            easing: 'linear',
	            queue: false
	        }
		});

		var $gallery = $('.filterable-items');

	    $gallery.isotope({
	        filter: '*',
	        layoutMode: 'masonry',
	        animationOptions: {
	            duration: 750,
	            easing: 'linear',
	            queue: false
	        }
	    });

	    $('.filterable-nav a').click(function(e){
	    	e.preventDefault();
	        $('.filterable-nav .current').removeClass('current');
	        $(this).addClass('current');

	        var selector = $(this).attr('data-filter');
	        $gallery.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });
	    $('.mobile-filter').change(function(){

	        var selector = $(this).val();
	        $gallery.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });

	    initLightbox({
	    	selector : '.filterable-item a',
	    	overlay: true,
	    	closeButton: true,
	    	arrow: true
	    });

	});

})(jQuery, document, window);