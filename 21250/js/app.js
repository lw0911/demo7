(function($, document, window){
	
	$(document).ready(function(){

		$(".menu-toggle").click(function(){
			$(".menu").toggleClass("active");
		});

		// Changing background image using data-attribute
		$("[data-bg-image]").each(function(){
			var image = $(this).data("bg-image");
			$(this).css("background-image", "url("+image+")");
		});

		// Changing background color using data-attribute
		$("[data-bg-color]").each(function(){
			var color = $(this).data("bg-color");
			$(this).css("background-color", color );
		});

		var $container = $('.filterable-items');

		$container.imagesLoaded(function(){
		    $container.isotope({
		        filter: '*',
		        layoutMode: 'fitRows',
		        animationOptions: {
		            duration: 750,
		            easing: 'linear',
		            queue: false
		        }
		    });

		});
	    $('.filterable-nav a').click(function(e){
	    	e.preventDefault();
	        $('.filterable-nav .current').removeClass('current');
	        $(this).addClass('current');

	        var selector = $(this).attr('data-filter');
	        $container.isotope({
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
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });

	    if( $(".map").length ) {
			$('.map').gmap3({
				map: {
					options: {
						maxZoom: 14 
					}  
				},
				marker:{
					address: "40 Sibley St, Detroit",
					options: {
						disableDefaultUI: true,
						mapTypeControl: false,
						panControl: false,
						zoomControl: false,
						scaleControl: false,
						streetViewControl: false,
						rotateControl: false,
						rotateControlOptions: false,
						overviewMapControl: false,
						OverviewMapControlOptions: false
					}
				}
			},
			"autofit" );
	    	
	    }
	    if( $('.covervid-video').length ){
	    	$('.covervid-video').coverVid(716, 404);
	    }

	});

	$(window).load(function(){

	});

})(jQuery, document, window);