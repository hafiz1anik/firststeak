// Side Menu
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
  });

  // Scrollspy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});



// Auto Complete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
      "BBQ Steak": null,
      "Asian Flat Iron Steak": null,
      "Savory Garlic Steak": null,
      
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
     M.Carousel.init(elems,"");
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tabs');
    M.Tabs.init(elems);
  });
