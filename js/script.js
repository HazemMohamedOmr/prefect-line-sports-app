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
      items: 3
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
      items: 3
    },
    1000: {
      items: 4
    }
  }
});

// Running Select2 on input select

($(document).ready(function() {
  $('.js-example-basic-single').select2({
    width: '100%',
  });

  // Adjusting Select2 ico
  let selIco = document.querySelectorAll('.select2-selection__arrow');
  selIco.forEach(element => {
    element.innerHTML = "<i class='fas fa-angle-down'></i>";
  });
}));

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

}, 1000);

// cart item count 

    // Increment Product
document.querySelectorAll(".prod-plus").forEach(element => {
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

    // Bad Section toggle select
let badButtons = document.querySelectorAll(".bad-section .toggle");
badButtons.forEach(element =>{
  element.addEventListener("click", (e)=>{
    badButtons.forEach(ele =>{
      ele.classList.remove("bg-orange");
    })
    e.target.classList.add("bg-orange");
  })
});

    // input file

(function(document, window, index)
{
	let inputs = document.querySelectorAll('.inputfile');
	Array.prototype.forEach.call(inputs, function(input){
		let label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener('change', function(e){
			let fileName = '';
			if(this.files && this.files.length > 1)
				fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
			else
				fileName = e.target.value.split('\\').pop();

			if(fileName)
				label.querySelector('span').innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener('focus', function(){input.classList.add('has-focus'); });
		input.addEventListener('blur', function(){input.classList.remove('has-focus'); });
	});
}(document, window, 0));

// partners section

let row = document.querySelector(".part .row");
let floatImg = document.querySelector(".part .flot-img");
let trigger = document.querySelector(".part .more");

console.log(row.clientHeight);
if(row.clientHeight < 630){
  row.classList.remove("edged");
  floatImg.classList.add("d-none");
  trigger.classList.add("d-none");
}else if (row.clientHeight >= 630){
  row.classList.add("edged");
  var show = 1;
}

trigger.addEventListener("click", ()=>{
  row.classList.toggle("edged");
  floatImg.classList.toggle("d-none");
  if(show){
    trigger.innerText = "show less";
    show = 0;
  }else if(!show){
    trigger.innerText = "show more";
    show = 1
  }
});

console.log(row);
console.log(floatImg);
console.log(trigger);