$(function () {
  $("#mobile-menu").hide();

  $("a[data-activates='mobile-menu']").on('click', function () {
      $("#mobile-menu").toggle();
  });

  $(".select2").select2();

  $(".owl-carousel").owlCarousel({
    items: 4,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }

  });

  $(window).on("scroll", function(e){
    if($(this).scrollTop() > 0){
      $("#back-to-top").fadeIn('slow')
    } else{
      $("#back-to-top").fadeOut('slow');
    }
  });

  $("#back-to-top").on("click", function(e){
      $("html, body").animate({
        scrollTop: 0
      }, 600);

      return false;
  });

    $(window).on('load', function(e){
      $("#global-loader").fadeOut('slow');
    });
});