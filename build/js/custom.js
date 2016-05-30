$(function() {

  $('body').append(Anta.Templates.index(window.en))

});$(document).ready(function () {

    $(window).scroll(function() {
      if ($(".side_menu").offset().top <= $('.invisible_side_menu_fixed').offset().top) {
        $(".side_menu").addClass("fixed");
      }
      if ($(".side_menu").offset().top < $('.invisible_side_menu_static').offset().top) {
        console.log(".side_menu");
        $(".side_menu").removeClass("fixed"); 
      };
    });

    $(window).scroll(function() {
      if ($(".side_menu").offset().top >= $('.company').offset().top) {
        $(".side_menu li").removeClass("side_menu_highlight");
        $("#side_menu_company").addClass("side_menu_highlight");
      };
      if ($(".side_menu").offset().top >= $('.services').offset().top) {
        $(".side_menu li").removeClass("side_menu_highlight");
        $("#side_menu_services").addClass("side_menu_highlight");
      };
      if ($(".side_menu").offset().top >= $('.clients').offset().top) {
        $(".side_menu li").removeClass("side_menu_highlight");
        $("#side_menu_clients").addClass("side_menu_highlight");
      };
      if ($(".side_menu").offset().top >= $('.rates').offset().top) {
        $(".side_menu li").removeClass("side_menu_highlight");
        $("#side_menu_rates").addClass("side_menu_highlight");
      };

    });

})

  // Smooth scroll
  smoothScroll.init({
      speed: 650, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0
  });