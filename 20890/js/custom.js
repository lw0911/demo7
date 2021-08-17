(function () {

	'use strict'


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});

	var preloader = function() {

		var loader = document.querySelector('.loader');
		var overlay = document.getElementById('overlayer');

		function fadeOut(el) {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= .1) < 0) {
					el.style.display = "none";
				} else {
					requestAnimationFrame(fade);
				}
			})();
		};

		setTimeout(function() {
			fadeOut(loader);
			fadeOut(overlay);
		}, 200);
	};
	preloader();
	
	var tinySlider = function() {
		
		var el = document.querySelectorAll('.gallery-slider');

		if ( el.length > 0 ) {
			var tnsServiceSlider = tns({
				container: '#gallery-slider',
				mode: 'carousel',
				speed: 700,
				items: 1,
				autoplay: true,
				controls: false,
				nav: true,
				navPosition: 'bottom',
				autoplayButtonOutput: false,
				// controlsContainer: '#service-slider-nav'
			});
		}

	}
	tinySlider();

})()