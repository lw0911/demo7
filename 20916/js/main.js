/*  ---------------------------------------------------
    Theme Name: Cleaning Company
    Description: Cleaning Company Html - Template
    Author: Colorib
    Author URI: https://www.colorib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*-----------------------
        Services Slider
    ------------------------*/
    $(".services__slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 3,
        dots: true,
        nav: false,
        stagePadding: 125,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 1,
                stagePadding: 0
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    /*-----------------------
        Testimonial Slider
    ------------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 2,
        dots: false,
        nav: true,
        navText: ["Prev", "Next"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

})(jQuery);