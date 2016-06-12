function detectLanguage() {
  var storedLang = localStorage.getItem('lang')
  var browserLang = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage)
  var lang = storedLang || browserLang.split('-')[0]
  if (lang != undefined) {
    setLanguage(lang)
    return(lang)
  } else {
    return("en")
  }
}

function setLanguage(lang) {
  localStorage.setItem('lang', lang)
}

function displayTranslatedPage(lang) {
  switch(lang) {
    case "en":
    $('body').html(Anta.Templates.index(window.en))
    break;
    case "fr":
    $('body').html(Anta.Templates.index(window.fr))
    break;
    case "ru":
    $('body').html(Anta.Templates.index(window.ru))
    break;
    default:
    $('body').append(Anta.Templates.index(window.en))
    break;
  }
}

function loadContent() {
  var lang = detectLanguage();
  displayTranslatedPage(lang)
}

$(document).ready(function () {

    loadContent();

    $(window).scroll(function() {
      if ($(".side_menu").offset().top <= $('.invisible_side_menu_fixed').offset().top) {
        $(".side_menu").addClass("fixed")
        $(".side_menu").offset({top: $('.invisible_side_menu_fixed').offset().top })
      }
      if ($(".side_menu").offset().top < $('.invisible_side_menu_static').offset().top) {
        $(".side_menu").removeClass("fixed")
        $(".side_menu").offset({top: $('.invisible_side_menu_static').offset().top });
      };
      if (($(".invisible_side_menu_fixed").offset().top + $(".invisible_side_menu_fixed").height()) > ($(".submit-btn").offset().top + $(".submit-btn").height())) {
        $(".side_menu").offset({top: ($(".submit-btn").offset().top - ($(".side_menu").height() - $(".submit-btn").height()))})
      }
    });

    $(window).scroll(function() {
      if ($(".side_menu").offset().top >= $('.company').offset().top) {
        $(".side_menu span.glyphicon").removeClass("side_menu_highlight");
        $("#side_menu_company span.glyphicon").addClass("side_menu_highlight");
      };
      if ($(".side_menu").offset().top >= $('.services').offset().top) {
        $(".side_menu span.glyphicon").removeClass("side_menu_highlight");
        $("#side_menu_services span.glyphicon").addClass("side_menu_highlight");
      };
      if ($(".side_menu").offset().top >= $('.clients').offset().top) {
        $(".side_menu span.glyphicon").removeClass("side_menu_highlight");
        $("#side_menu_clients span.glyphicon").addClass("side_menu_highlight");
      };
      if ($(".side_menu").offset().top >= $('.rates').offset().top) {
        $(".side_menu span.glyphicon").removeClass("side_menu_highlight");
        $("#side_menu_rates span.glyphicon").addClass("side_menu_highlight");
      };

    });

    $('body').delegate('.lang-select', 'click', function(e) {
      e.preventDefault()
      var lang = e.currentTarget.id
      setLanguage(lang)
      displayTranslatedPage(lang)
    })


  // Smooth scroll
  smoothScroll.init({
    speed: 650, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0
  });

})
