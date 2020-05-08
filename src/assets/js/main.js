$( document ).ready(function() {
  if($('.glider').length) {
    new Glider(document.querySelector(".glider"), {
      slidesToShow: 1.5,
      slidesToScroll: 1,
      draggable: true,
      dots: ".dots",
      responsive: [
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            duration: 0.5,
            arrows: {
              prev: ".glider-prev",
              next: ".glider-next"
            }
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            duration: 0.5,
            arrows: {
              prev: ".glider-prev",
              next: ".glider-next"
            }
          }
        }
      ]
    });
  }
  if($('.owl-carousel').length) {
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:2
        }
      }
    })
  }
});
