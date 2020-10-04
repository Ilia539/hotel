// ...........BURGER MENU...........

  $(document).ready(function() {
    $('.header__burger').click(function(event) {
      $('.header__burger,.header__nav').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });
  // ........
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      items: 5,
      autoplay: true,
      dots: false,
      dragEndSpeed: 1000,
      responsive: {
        0: {
          items: 1
        },
        415: {
          items: 2
        },
        768: {
          items: 3
        },
        1025: {
          items: 4
        },
        1300: {
          items: 5
        }
      }
    });
  });
   // .......SCROLL EASY...
   $(document).ready(function() {
    $('.header-link, .footer__menu-link').click(function() {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + 'px'
      }, {
        duration: 1000,
        easing: 'swing'
      });
      return false;
      });
    });

    $(document).ready(function() {
  $('.overlay-link').magnificPopup({type:'image'});
  
});