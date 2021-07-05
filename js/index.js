
//$(document).ready(function() {
//}); 

//  MENU COLLAPSE ----------------------------------------------------

  $("li").on("click", function () {
    $('.navbar-collapse').collapse('hide');
  });

  // TYPED EFFECT & FOCUS HOME SECTION ----------------------------------------------------

  //.includes
  //https://villecova.github.io/portfolio/
  
  // if (document.URL.includes("https://villecova.github.io/portfolio/" || "index.html")) {
  if (document.URL.includes("portfolio" || "index.html")) {

    // document.getElementById('home-section').focus();

      var typed = new Typed('.element', {
      strings: ["I'm a Graphic Designer.", "I'm a Web Designer.", "I'm a Web Developer."],
      typeSpeed: 120,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity
    });

  }

  // GALLERY MODAL ----------------------------------------------------

  function switchStyle() {
    if (document.getElementById('styleSwitch').checked) {
      document.getElementById('gallery').classList.add("custom");
      document.getElementById('exampleModal').classList.add("custom");
    } else {
      document.getElementById('gallery').classList.remove("custom");
      document.getElementById('exampleModal').classList.remove("custom");
    }
  }

  // GALLERY TAGS ----------------------------------------------------

  $('.filter-button').on('click', (e) => {
    const filter = $(e.target).attr('data-filter');
    console.log(filter);
    const items = $('.item-content').parent();
    for (item of items) {
      if (filter == '') {
        
        $(item).addClass('animated zoomIn faster');
        $(item).parent().addClass('animated zoomIn faster');
        $(item).removeClass('d-none');
        $(item).parent().removeClass('d-none');
        
       
        console.log('x');
      } else if ($(item).attr('data-category') == filter) {
        $(item).addClass('animated zoomIn faster');
        $(item).parent().addClass('animated zoomIn faster');
        $(item).removeClass('d-none');
        $(item).parent().removeClass('d-none');
      } else {
        $(item).addClass('d-none');
        $(item).parent().addClass('d-none');
        $(item).removeClass('animated zoomIn faster');
        $(item).parent().removeClass('animated zoomIn faster');
      }
    }
  });

  // GO BACK ----------------------------------------------------

  function goBack() {
    window.history.back();
  }


