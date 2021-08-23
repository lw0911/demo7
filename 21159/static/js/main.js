/*
-----------------------------------------------
Theme: ConfCentre - Landing Page HTML Template
Version 1.0
Author: EXSYthemes
-----------------------------------------------
// ========== TABLE OF CONTENTS ============ //
	1. Modal
	2. Hamburger
	3. Counter
-----------------------------------------------*/
'use strict';

$(document).ready(function() {

	AOS.init();
	
    /*  1. Modal */
    function showModal() {
        $('html').toggleClass('no-scroll');
        $('.overlay').toggleClass('s-show');
        $('.modal').toggleClass('s-show');
    }
    /*  1. END Modal */


    /*  2. Hamburger */
    $('.hamburger').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        $('.h-nav').toggleClass('h-nav--active');
    });
    /*  2. END  Hamburger */

    $('.h-nav li a').on('click', function() {
        $('.hamburger').removeClass('is-active');
        $('.h-nav').removeClass('h-nav--active');
    });

    $('.h-nav ul li a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        );

        $(this).addClass('hl--active');
        $('.h-nav ul li a').not(this).removeClass('hl--active');

    });

    $('.sh-modal').on('click', function(e) {
        e.preventDefault();
        showModal();
    });

    $('.m-close').on('click', function(e) {
        e.preventDefault();
        showModal();
    });

    $('.overlay').on('click', function(e) {
        e.preventDefault();
        showModal();
    });

    /*  3. Counter */
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    /* END 3. Counter */


    $('.cities-list li button[data-select="DB"]').addClass('active-city');
    $('.events-block .DB').addClass('events-list--active');


    $('.cities-list li button').on('click', function(e) {
        e.preventDefault();

        let dataSelected = $(this).attr('data-select');

        $('.cities-list li button').not(this).removeClass('active-city');
        $(this).addClass('active-city');
        $('.events-list').removeClass('events-list--active');
        $('.events-block ' + '.' + dataSelected).addClass('events-list--active');
    });

    $('.wpcf7-submit').on('click', function(e) {
        if ($('input[type="checkbox"]').prop('checked')) {
            true;
        } else {
            e.preventDefault();

            $('input').addClass('brd');
            $('.i-mask').addClass('brd');
            setTimeout(function() {
                $('input').removeClass('brd');
                $('.i-mask').removeClass('brd');
            }, 2000)
        }
    });

});