/*  ---------------------------------------------------
    Theme Name: Flyplane
    Description: Flyplane - Template
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

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*---------------------------------
        Testimonial Slider
    ----------------------------------*/
    $('.testimonial__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.testimonial__client',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"><i></i></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"><i></i></i></button>',
        autoplay: true
    });

    $('.testimonial__client').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial__slider',
        arrows: false,
        variableWidth: true,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true
    });

    /*---------------------------------
        Gallery Slider
    ----------------------------------*/
    $('.gallery__pic__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gallery__controls',
        autoplay: true
    });

    $('.gallery__controls').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.gallery__pic__slider',
        arrows: false,
        variableWidth: true,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        responsive: [{
                breakpoint: 1450,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /*---------------------------------
        Feature Slider
    ----------------------------------*/
    $(".feature__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: true,
        nav: false,
        smartSpeed: 1200,
        autoHeight: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });

    /*---------------------------------
        About Pic Slider
    ----------------------------------*/
    $(".about__pic__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*---------------------------------
        Select
    ----------------------------------*/
    $("select").niceSelect();

    /*---------------------------------
        Magnific Popup
    ----------------------------------*/
    $(".video_popup").magnificPopup({
        type: "iframe"
    });

    /*------------------
        Barfiller
    --------------------*/
    $('#bar1').barfiller({
        barColor: '#4657F0',
        duration: 2000
    });
    $('#bar2').barfiller({
        barColor: '#4657F0',
        duration: 2000
    });
    $('#bar3').barfiller({
        barColor: '#4657F0',
        duration: 2000
    });
    $('#bar4').barfiller({
        barColor: '#4657F0',
        duration: 2000
    });
    $('#bar5').barfiller({
        barColor: '#4657F0',
        duration: 2000
    });

    /*-----------------------
        Achieve Counter
    -------------------------*/
    $('.c_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    $('[data-toggle="datepicker"]').datepicker('getDayName');

})(jQuery);