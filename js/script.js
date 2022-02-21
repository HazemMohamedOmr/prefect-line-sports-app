// toggle tooltip in navbar
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Activate OwlCarousel Config

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
    576:{
        items:2
    },
    992:{
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
      576:{
          items:2
      },
      768:{
          items:3
      },
      992:{
          items:3
      },
      1200:{
          items:4
      }
  }
})

$('.thumbnail-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  items:1,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
})

$('.e-1-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
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

$('.e-m-slider-27').owlCarousel({
  items: 2,
  center: true,
  loop: true,
  margin: 46,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 2
    }
  }
})

$('.e-m-slider-25-1').owlCarousel({
  items: 3,
  center: true,
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 4
    }
  }
})

$('.e-m-slider-25-3').owlCarousel({
  items: 3,
  center: true,
  loop: true,
  margin: 10,
  dots:false,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 4
    }
  }
})

// Adjusting Owl nav elements
let owlPrev = document.querySelectorAll('.owl-prev');
owlPrev.forEach(element => {
  element.innerHTML = "<i class='fas fa-chevron-left'></i>";
});

let owlNext = document.querySelectorAll('.owl-next');
owlNext.forEach(element => {
  element.innerHTML = "<i class='fas fa-chevron-right'></i>";
});

// Timer Implementation on Home page

let countDown = new Date("Jun 10, 2022 14:00:00").getTime();
let CountingDown = setInterval(() => {
    let now = new Date().getTime(),
        timeRemaining = countDown - now;

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    $("#days").text(days);
    $("#hours").text(hours);
    $("#mins").text(minutes);
    $("#secs").text(seconds);

}, 1000)

// cart item count 

    // Increment Product
document.querySelectorAll(".prod-plus").forEach(element => {
  console.log(element);
  element.addEventListener("click", ()=>{
    let item = element.previousElementSibling.firstElementChild.getAttribute("value");

    if(item >= 1){
      item++;
      element.previousElementSibling.firstElementChild.setAttribute("value", item);
      element.previousElementSibling.previousElementSibling.innerHTML= item;

      let price = 125;
      element.parentElement.nextElementSibling.firstElementChild.innerHTML =  price * item;
    } 
  })
});

    // Decrement Product
document.querySelectorAll(".prod-minus").forEach(element => {
  console.log(element);
  element.addEventListener("click", ()=>{
    let item = element.nextElementSibling.nextElementSibling.firstElementChild.getAttribute("value");

    if(item > 1){
      item--;
      element.nextElementSibling.nextElementSibling.firstElementChild.setAttribute("value", item);
      element.nextElementSibling.innerHTML= item;

      let price = 125;
      element.parentElement.nextElementSibling.firstElementChild.innerHTML =  price * item;
    } 
  })
});
