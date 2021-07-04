// $(document).ready(function() {

// 	var typed = new Typed(".element", {
// 	strings: ["a Graphic Designer", "a Web Designer", "a Web Developer"],
// 	smartBackspace: true;
// 	typeSpeed: 100,
// 	backSpeed: 100,
// 	loop: true,
// 	loopCount: Infinity,
// 	startDelay: 1000,
// 	});

// });

// alert("funciona");

// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('button-burguer')
// const bsCollapse = new bootstrap.Collapse(menuToggle)

// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { bsCollapse.toggle() })
// })


// $(document).ready(function() {

//  MENU COLLAPSE ----------------------------------------------------

  $("li").on("click", function () {
    $('.navbar-collapse').collapse('hide');
  });

  // TYPED EFFECT & FOCUS HOME SECTION ----------------------------------------------------

  //.includes
  if (document.URL.includes("https://villecova.github.io/portfolio/" || "index.html")) {

    document.getElementById('home-section').focus();

      var typed = new Typed('.element', {
      strings: ["I'm a Graphic Designer.", "I'm a Web Designer.", "I'm a Web Developer."],
      startDelay: 1000,
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

// }); 

