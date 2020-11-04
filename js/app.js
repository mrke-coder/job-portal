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
});