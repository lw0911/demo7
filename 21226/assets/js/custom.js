    
    // Preloader

    $(window).load(function() {
      $("#loader .icon").fadeOut();
      $("#loader").fadeOut("slow");
    }); 

    //----------------------------------------------------------------       

jQuery(document).ready(function() { 

    // Viewport image

    $(".header-img").height($(window).height());

        $(window).resize(function(){
            $(".header-img").height($(window).height());
    });     

    // Background Slideshow - Backstretch

    $("#background-slider").backstretch([
      "assets/img/1.jpg"
    , "assets/img/2.jpg"
    , "assets/img/3.jpg"
    ], {duration: 3000, fade: 750});

    //----------------------------------------------------------------   

    // Header text rotator

    $('#intro').textRotator({
        random : false,
        fadeIn : 2000,
        fadeOut : 500,
        duration : 1000
    }); 

    //----------------------------------------------------------------                 

    // Features slider

        jQuery("#features-slider").owlCarousel({
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet: [767,1],
            itemsMobile : [420,1],            
            pagination : false,
            autoPlay : 3000,
            transitionStyle: "fadeUp" 
    });             

    //----------------------------------------------------------------  

    // Video Popup

        jQuery('.app-video').magnificPopup({
            disableOn: 200,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
    });

    //----------------------------------------------------------------  

    // Extra Info slider

        jQuery(".extra-slider").owlCarousel({
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet: [767,1],
            itemsMobile : [420,1],            
            pagination : true,
            autoPlay : false,
            transitionStyle: "fadeUp"
    });

    //----------------------------------------------------------------   

    // Screenshot slider

        jQuery("#screenshot").owlCarousel({
            items : 4,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,2],
            itemsTablet: [767,2],
            itemsMobile : [600,1],
            pagination : true,
            autoPlay : false
    });

    //----------------------------------------------------------------    

    // Reviews slider

        jQuery("#reviews-slider").owlCarousel({
            items : 2,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet: [600,1],
            itemsMobile : [479,1],
            pagination : false,
            autoPlay : true        
    });

    //----------------------------------------------------------------           

    // Clients slider

        jQuery("#featured-clients").owlCarousel({
            items : 4,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [979,3],
            itemsTablet: [767,2],
            itemsMobile : [600,1],
            pagination : false,
            autoPlay : true
    });    

    //----------------------------------------------------------------              

    // Pretty Photo popup

       jQuery('.zoom').magnificPopup({type: 'image'});

    //----------------------------------------------------------------                    

    // Smooth Page Scrolling requires - Jquery Easing

    jQuery('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight top nav as scrolling occurs

        jQuery('body').scrollspy({
           target: '.navbar-static-top'
    })

    //----------------------------------------------------------------      

    // Closes Responsive Menu on Menu Item Click

        jQuery('.navbar-collapse ul li a').click(function() {
          $('.navbar-toggle:visible').click();
    });

    //---------------------------------------------------------------- 

    // Sticky Navigation

    jQuery(function() {
        $('#navigation').height($("#nav").height());
          $('#nav').affix({
            offset: { top: $('#nav').offset().top -70 }
        });
    });

    //----------------------------------------------------------------  

    //Scroll Top

    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    
    });
    
    //----------------------------------------------------------------  

    //Newsletter

    jQuery("#subscribe").ajaxChimp({
        callback: mailchimpResponse,
            url: "http://coderscore.us10.list-manage.com/subscribe/post?u=15bc64c58895fffafdf3625f2&amp;id=5c97783c3f" // Replace your Mailchimp post url  
    });

        function mailchimpResponse(resp) {
            if(resp.result === 'success') { 
                $('.subscribe-success').html(resp.msg).fadeIn().delay(3000).fadeOut();
          
          } else if(resp.result === 'error') {
                $('.subscribe-error').html(resp.msg).fadeIn().delay(3000).fadeOut();
        }  
    };

    //----------------------------------------------------------------      

    // Contact Form

    jQuery('.form-horizontal').on('submit',function(){
                 
        var form = $(this);
        $.ajax({
            url: form.attr('action'),
            method: form.attr('method'),
            data: form.serialize(),
            success: function(result){
                if (result == 'success'){
                    $('.send-success').fadeIn().delay(4000).fadeOut();;  
                } else {
                    $('.send-error').fadeIn().delay(4000).fadeOut();;
                }
                $('.form-horizontal').trigger("reset");
            }
          });
         
         // Prevents default submission of the form after clicking on the submit button. 
          return false;   
    });  

    //----------------------------------------------------------------             

    // Reveal animation

        new WOW().init();               

});         