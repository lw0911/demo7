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

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slide');
		if ( el.length > 0 ) {
			var slider = tns({
				container: ".testimonial-slide",
				items: 1,
				axis: "horizontal",
				controlsContainer: '#testimonial-slide-nav',
				swipeAngle: false,
				speed: 700,
				nav: true,
				gutter: 10,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false,
				responsive: {
					350: {
						items: 1
					},
					500: {
						items: 2
					},
					900: {
						items: 3
					}
				},
			});
		}
	}
	tinyslider();

	var lightbox = function() {
		var lightboxVideo = GLightbox({
			selector: '.glightbox'
		});
	};
	lightbox();



})()