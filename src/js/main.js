$('.owl-carousel.owl-carousel--galery').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
})
$('.owl-carousel.owl-carousel--main').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})