//carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 40,
  nav: false,
  autoplay: true,
  autoplayTimeout: 1000,
  stagePadding: 50,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
});

// Type js
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".auto-type", {
    strings: ["Design", "Develop", "Grow"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
  });
});
// number animation
let valueDisplays = document.querySelectorAll(".correct-num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue; 
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
