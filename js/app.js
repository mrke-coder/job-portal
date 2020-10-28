$(function () {
  $("#mobile-menu").hide();

  $("a[data-activates='mobile-menu']").on('click', function () {
      $("#mobile-menu").toggle();
  });
});