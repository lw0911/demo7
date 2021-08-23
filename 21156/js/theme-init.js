/*!
 * Everesttheme
 *
 * (c) Copyright everesttheme.com
 *
 * @version 1.0.0
 * @author  everesttheme
 */



(function ($) {

    /*========================================================
     * UTILITIES
     ========================================================*/
    //Check if function exists
    $.fn.exists = function () {
        return this.length > 0;
    };


    /*========================================================
     * Preload
     ========================================================*/
    $(document).ready(function () {
        $(window).on('load', function () {
            $('#pageLoad').remove();
        });
    });


    /*========================================================
     * Key Search Scrict
     ========================================================*/
    $('#search_toggle').on('click', function () {
        $('#header').toggleClass('search-active');
        $(this).addClass('in');
        $('.search-input').focus();
    });
    $(document).on('mouseup', function (e) {
        var container = $("#header");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('search-active');
        }
    });


    /*========================================================
     * data attribute
     ========================================================*/
    //applied element height by data attribute
    $('[data-height]').each(function () {
        var el_height = $(this).data('height');
        $(this).css('height', el_height + 'px');
        $(this).removeAttr('data-height');
    });

    //applied element background image by data attribute
    $('[data-background-image]').each(function () {
        var background_imgae = $(this).data('background-image');
        $(this).css('background-image', "url('" + background_imgae + "')");
        $(this).removeAttr('data-background-image');
    });


    //applied element color by data attribute
    $('[data-color]').each(function () {
        var color = $(this).data('color');
        $(this).css('background-color', color);
        $(this).removeAttr('data-color');
    });

    $('.btn-more-less').on('click', function () {
        $(this).prev('.more-less-wrapper').toggleClass('active');
        $(this).toggleClass('collapsed');
    });


    /*========================================================
     * Sticky Header Script 
     ========================================================*/
    var didScroll;
    var headerHeight = $('#header').outerHeight();
    var lastScrollTop = 0;
    var delta = 50;
    var stickyHeader = $('#header[data-sticky="true"]');

    $(window).on('scroll', function (event) {
        didScroll = true;
    });

    //set interval
    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 0);

    function hasScrolled() {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > headerHeight * 2) {
            stickyHeader.addClass('sticky sticky-slide-up').removeClass('sticky-active');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                stickyHeader.removeClass('sticky-slide-up').addClass('sticky-active');
            }
        }
        if (st <= headerHeight * 2) {
            stickyHeader.removeClass('sticky sticky-active');
        }

        lastScrollTop = st;
    };


    /*========================================================
     * Fixed Footer Script 
     ========================================================*/

    $(window).on('load resize', function () {
        var footerHeight = $('#footer').innerHeight();
        if ($('#footer').hasClass('fixed') == $(window).width() >= 992) {
            $('#content').css('margin-bottom', footerHeight + 'px');
        } else {
            $('#content').css('margin-bottom', 0);

        }
    });


    /*========================================================
     * Page banner 
     ========================================================*/
    if ($('.page-banner img').length != 0) {
        $('.page-banner').addClass('has-img');
    }


    /*========================================================
     * Responsive embed on article 
     ========================================================*/
    $('article iframe').wrap('<div class="embed-responsive embed-responsive-16by9">');


    /*========================================================
     * Sorting navigation 
     ========================================================*/
    $('.sorting-nav>.nav-item>.nav-link').on('click', function () {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().toggleClass('active');
    });
    $(document).on('mouseup', function (e) {
        var container = $(".sorting-nav .nav-item");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('active');
        }
    });



    /*========================================================
     * Custom Form
     ========================================================*/
    //calendar
    $('input[data-input-type="datepicker"]').wrap('<div class="calendar"></div>');
    //select
    $('select').wrap('<div class="custom_select">');
    //input tyle number
    $('input[data-input-type="incrementer"]').wrap('<div class="increment_decrement">');
    $('<div class="handler"><span class="increment"><i class="fa fa-plus"></i></span><span class="decrement"><i class="fa fa-minus"></i></span></div>').insertAfter('.increment_decrement input');
    $('.increment_decrement').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.increment'),
            btnDown = spinner.find('.decrement'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });


    $(".increment").click(function () {
        var total = parseInt($("#quantity").val());
        total = total + 1;
        $("#quantity").val(total);
    })
    $(".minus").click(function () {
        var total = parseInt($("#quantity").val());
        if (total > 1) {
            total = total - 1;
        }
        $("#quantity").val(total);
    })
    $('#quantity').keyup(function () {
        var n = $('#quantity').val();
        this.value = this.value.replace(/[^0-9\.]/g, '');
    });




    /*========================================================
     * Background image will updater as window resize
     ========================================================*/
    $(window).on('load resize orientationchange', function () {
        setTimeout(function () {
            $(window).trigger('fontresize');
            $('.bg-stretch').each(function () {
                var container = $(this),
                    img = container.find('img');
                ImageStretcher.resizeImage(img, container);
            });
        }, 200);

        var ImageStretcher = {
            getDimensions: function (data) {
                // calculate element coords to fit in mask
                var ratio = data.imageRatio || (data.imageWidth / data.imageHeight),
                    slideWidth = data.maskWidth,
                    slideHeight = slideWidth / ratio;

                if (slideHeight < data.maskHeight) {
                    slideHeight = data.maskHeight;
                    slideWidth = slideHeight * ratio;
                }
                return {
                    width: slideWidth,
                    height: slideHeight,
                    top: (data.maskHeight - slideHeight) / 2,
                    left: (data.maskWidth - slideWidth) / 2
                };
            },
            getRatio: function (image) {
                if (image.prop('naturalWidth')) {
                    return image.prop('naturalWidth') / image.prop('naturalHeight');
                } else {
                    var img = new Image();
                    img.src = image.prop('src');
                    return img.width / img.height;
                }
            },
            imageLoaded: function (image, callback) {
                var self = this;
                var loadHandler = function () {
                    callback.call(self);
                };
                if (image.prop('complete')) {
                    loadHandler();
                } else {
                    image.one('load', loadHandler);
                }
            },
            resizeHandler: function () {
                var self = this;
                $.each(this.imgList, function (index, item) {
                    if (item.image.prop('complete')) {
                        self.resizeImage(item.image, item.container);
                    }
                });
            },
            resizeImage: function (image, container) {
                this.imageLoaded(image, function () {
                    var styles = this.getDimensions({
                        imageRatio: this.getRatio(image),
                        maskWidth: container.width(),
                        maskHeight: container.height()
                    });
                    image.css({
                        width: styles.width,
                        height: styles.height,
                        marginTop: styles.top,
                        marginLeft: styles.left
                    });
                });
            },
            add: function (options) {
                var container = $(options.container ? options.container : window),
                    image = typeof options.image === 'string' ? container.find(options.image) : $(options.image);

                // resize image
                this.resizeImage(image, container);

                // add resize handler once if needed
                if (!this.win) {
                    this.resizeHandler = $.proxy(this.resizeHandler, this);
                    this.imgList = [];
                    this.win = $(window);
                    this.win.on('resize orientationchange', this.resizeHandler);
                }

                // store item in collection
                this.imgList.push({
                    container: container,
                    image: image
                });
            }
        };
    });


    /*========================================================
     * smooth scroll to anchor
     ========================================================*/

    var scrollLink = $('.scroll-to-anchor');
    // Smooth scrolling
    scrollLink.on('click', function (e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: $(this.hash).offset().top - 30 }, 1000, 'easeInOutExpo');
    });


    /*========================================================
     * Initialization of Slicknav
     ========================================================*/
    $('#mainnav').slicknav({
        closeOnClick: true,
        allowParentLinks: true,
        appendTo: '#header',
        closedSymbol: '<i class="flaticon-add"></i>',
        openedSymbol: '<i class="flaticon-remove"></i>',
    });
    $('.navbar-toggler').on('click', function () {
        $('.slicknav_menu').toggleClass('show');
    });
    $('.slicknav_nav').removeClass('slicknav_hidden').change(['aria-hidden="false"']).show();
    $('.slicknav_btn').remove();


    /*========================================================
     * Initialization of Wow Script
     ========================================================*/
    new WOW().init();


    /*========================================================
     * Bootstrap tooltip
     ========================================================*/
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    })



    /*========================================================
     * Initialization of swiper Slider
     ========================================================*/
    //Home Banner Slider 
    var swiper = new Swiper('.home-banner-slider', {
        loop: true,
        effect: 'fade', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
        speed: 2500,
        navigation: {
            nextEl: '.banner-nav-next',
            prevEl: '.banner-nav-prev',
        },
        pagination: {
            el: '.swiper-numeric-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },

        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },

        on: {
            slideChangeTransitionStart: function () {
                $('.swiper-slide-active [data-animate]').each(function () {
                    var anim = $(this).data('animate');
                    var delay = $(this).data('delay');
                    var duration = $(this).data('duration');
                    $(this).removeClass('anim' + anim).addClass(anim + ' animated').css({
                        webkitAnimationDelay: delay,
                        animationDelay: delay,
                        webkitAnimationDuration: duration,
                        animationDuration: duration
                    })
                        .one(
                            'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                            function () {
                                $(this).removeClass(anim + ' animated');
                            });
                });
            },
        }

    });

    //product Banner Slider 
    var productThumbs = new Swiper('.product-thumbs', {
        spaceBetween: 10,
        slidesPerView: 7,
        loop: false,
        freeMode: true,
        loopedSlides: 5,
        breakpoints: {
            992: {
                slidesPerView: 6
            },
            768: {
                slidesPerView: 5
            },
            540: {
                slidesPerView: 3
            }
        }
    });
    var ProductBanner = new Swiper('.product-banner', {
        spaceBetween: 0,
        loop: false,
        thumbs: {
            swiper: productThumbs,
        },
    });

    /*========================================================
     * Initialization of swiper carousel by html data attributs
     ========================================================*/

    $('[data-carousel="swiper"]').each(function (index) {
        var element = $(this);
        swiperContainer = element.find('[data-swiper="container"]'),
            elementItems = element.data('items'),
            elementAutoPlay = element.data('autoplay'),
            elementSpaceBetween = element.data('space-between'),
            elementLoop = element.data('loop'),
            elementCenter = element.data('center-mode'),
            elementEffect = element.data('effect'),
            elementDirection = element.data('direction'),
            elementSpeed = element.data('speed'),
            elementItemsXs = element.data('items-xs'),
            elementItemsSm = element.data('items-sm'),
            elementItemsMd = element.data('items-md'),
            elementItemsLg = element.data('items-lg'),
            elementItemsXl = element.data('items-xl'),
            elementNavPrev = element.find('.swiper-button-prev')[0],
            elementNavNext = element.find('.swiper-button-next')[0],
            elementScollBar = element.find('.swiper-scrollbar')[0];
        if (!elementItems) {
            elementItems = 1;
        }

        if (elementAutoPlay) {
            elementAutoPlay = Number(elementAutoPlay);
        } else {
            elementAutoPlay = 999999999;
        }

        if (!elementSpaceBetween) {
            elementSpaceBetween = 0;
        }

        if (elementLoop) {
            elementLoop = elementLoop;
        }

        if (elementCenter) {
            elementCenter = elementCenter;
        }

        if (!elementEffect) {
            elementEffect = 'slide';
        }

        if (!elementDirection) {
            elementDirection = 'horizontal';
        }

        if (!elementSpeed) {
            elementSpeed = 500;
        }

        if (elementItemsXl) {
            elementItemsXl = elementItemsXl;
        } else {
            elementItemsXl = elementItems;
        }

        if (elementItemsLg) {
            elementItemsLg = elementItemsLg;
        } else {
            elementItemsLg = elementItemsXl;

        }

        if (elementItemsMd) {
            elementItemsMd = elementItemsMd;
        } else {
            elementItemsMd = elementItemsLg
        }

        if (elementItemsSm) {
            elementItemsSm = elementItemsSm;
        } else {
            elementItemsSm = elementItemsMd
        }

        if (elementItemsXs) {
            elementItemsXs = elementItemsXs;
        } else {
            elementItemsXs = elementItemsSm
        }

        if (element.find('.swiper-pagination').length > 0) {
            var elementPagination = element.find('.swiper-pagination')[0],
                elementPaginationClickable = true;
        } else {
            var elementPagination = '',
                elementPaginationClickable = false;
        }

        var swiper = new Swiper(swiperContainer[0], {
            slidesPerView: elementItems,
            autoplay: {
                delay: elementAutoPlay
            },
            spaceBetween: elementSpaceBetween,
            loop: elementLoop,
            centeredSlides: elementCenter,
            effect: elementEffect,
            direction: elementDirection,
            speed: Number(elementSpeed),
            pagination: {
                el: elementPagination,
                clickable: elementPaginationClickable
            },
            navigation: {
                nextEl: elementNavNext,
                prevEl: elementNavPrev
              },
            scrollbar: {
                el: elementScollBar
            },
            breakpoints: {
                320: {
                    slidesPerView: elementItemsXs
                },
                480: {
                    slidesPerView: elementItemsSm
                },
                768: {
                    slidesPerView: elementItemsMd
                },
                992: {
                    slidesPerView: elementItemsLg
                },
                1200: {
                    slidesPerView: elementItemsXl
                }
            }
        });
        
    });




    /*========================================================
     * Initialization of counter plugin
     ========================================================*/
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });


    /*========================================================
     * Initialization of msnry  and imagesLoaded  script
     ========================================================*/
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        resize: true,
    });
    $grid.imagesLoaded().progress(function () {
        $grid.masonry();
    });


    /*========================================================
     * load inline SVG
     ========================================================*/
    $('img.inject-me').each(function () {
        var $img = $(this),
            imgID = $img.attr('id'),
            imgClass = $img.attr('class'),
            imgURL = $img.attr('src'),
            extension = imgURL.replace(/^.*\./, '');
        extension = extension.toLowerCase();

        if (extension == 'svg') {

            $.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find('svg');

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== undefined) {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== undefined) {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Check if the viewport is set, else we gonna set it if we can.
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
                }

                // Replace image with new SVG
                $img.replaceWith($svg);

                $('.inject-me.removeColor *').removeAttr('fill');
                $('.inject-me.removeColor').attr('fill', 'currentColor');

            }, 'xml');

        }

    });

    /*========================================================
     * Initialization of ionRangeSlider  script
     ========================================================*/
    $("#budget_range").ionRangeSlider({
        type: "double",
        min: 0,
        max: 999,
        from: 50,
        step: 50,
        to: 999,
        skin: "round",
        prefix: "$"
    });

    /*========================================================
     * Initialization of StickySidebar
     ========================================================*/
    if (!$('.sticky-sidebar').length == 0) {
        if($(window).width() >= 991){
            var sidebar = new StickySidebar('.sticky-sidebar', {
                containerSelector: '#main-content',
                innerWrapperSelector: '.sticky-sidebar-inner',
                topSpacing: 30,
                bottomSpacing: 30
            });
        }
        
    }


    /*========================================================
     * Initialization of Zoom
     ========================================================*/
    $('.zoom').each(function () {
        $(this).zoom();
    })



    /*========================================================
     * Post likes
     ========================================================*/
    $('#post-likes').on('click', function () {
        var $elem = $(this),
            $count = $elem.next('.action-title').text(),
            $number = parseInt($count);

        $elem.toggleClass('activated clicked');
        setTimeout(function () { $elem.removeClass('activated') }, 200);

        if ($elem.hasClass('clicked')) {
            $elem.next('.action-title').text($number + 1);
        } else {
            $elem.next('.action-title').text($number - 1);

        }

        return false;
    });

})(jQuery);