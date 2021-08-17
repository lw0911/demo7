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

		var testimonialSlider = document.querySelectorAll('.testimonial-slider');
		var propertySlider = document.querySelectorAll('.property-slider');
		var imgPropertySlider = document.querySelectorAll('.img-property-slide');


		if ( testimonialSlider.length > 0 ) {
			var tnstestimonialSlider = tns({
				container: '#testimonial-slider',
				mode: 'carousel',
				speed: 700,
				items: 1,
				autoplay: true,
				controls: false,
				nav: true,
				autoplayButtonOutput: false,
				controlsContainer: '#hero-nav',
			});
		}
	}

	tinySlider();

	var lightbox = function() {
		var lightboxVideo = GLightbox({
			selector: '.glightbox'
		});
	};
	lightbox();

})()