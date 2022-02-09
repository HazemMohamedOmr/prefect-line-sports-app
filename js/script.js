var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


$('.main-carousel').owlCarousel({
  items:1,
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true
})

$('.partner-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

$('.category-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

$('.product-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})

$('.thumbnail-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  items:1,
  // autoplay:true,
  // autoplayTimeout:5000,
  // autoplayHoverPause:true,
})


let owlPrev = document.querySelectorAll('.owl-prev');
owlPrev.forEach(element => {
  element.innerHTML = "<i class='fas fa-chevron-left'></i>";
});

let owlNext = document.querySelectorAll('.owl-next');
owlNext.forEach(element => {
  element.innerHTML = "<i class='fas fa-chevron-right'></i>";
});