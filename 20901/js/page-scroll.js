
(function () {

  'use trict';
  var scrollWindow = function() {

    window.onscroll = function(e) {

      var st = document.scrollingElement.scrollTop,
      navbar = document.querySelector('.js-site-navbar');


      if (st > 150) {
        if ( !navbar.classList.contains('scrolled') ) {
          navbar.classList.add('scrolled');  
        }
      } 
      if (st < 150) {
        if ( navbar.classList.contains('scrolled') ) {
          navbar.classList.remove('scrolled');
          navbar.classList.remove('sleep');
        }
      } 
      if ( st > 350 ) {
        if ( !navbar.classList.contains('awake') ) {
          navbar.classList.add('awake'); 
        }
      }
      if ( st < 350 ) {
        if ( navbar.classList.contains('awake') ) {
          navbar.classList.remove('awake');
          navbar.classList.add('sleep');
        }
      }

    };


  };

  scrollWindow();

})()
