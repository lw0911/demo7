(function($){

	$(document).ready(function(){
		// Quote Slider
		$(".quote-slider").flexslider({
			directionNav: false
		});

		// Menu Toggle
		$(".menu-toggle").click(function(){
			$(this).toggleClass("active");
			$(".main-navigation ul").toggleClass("active");
		});

		//  Replacing SVG icon with image
		if (!Modernizr.svg) {
			$(".svg-icon").each(function(){
				var iconNum = $(this).find("use").attr("xlink:href");
				var icon = iconNum.replace("#","");

				$(this).replaceWith("<img src=images/lineo-icon-pngs/"+icon+".png class=icon >");
			});
		  
		}

		// WOW initiation
		new WOW().init();
	});

})(jQuery);