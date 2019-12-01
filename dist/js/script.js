"use strict";

window.onload = function () {
  // auto-scroll slides in the Testimonial section
  var slides = document.querySelectorAll(".slide");
  var previousSlide = null;
  var x = 0;
  setInterval(nextSlide, 5000);

  function nextSlide() {
    if (previousSlide) {
      previousSlide.classList.remove("showSlide");
    }

    slides[x].classList.add("showSlide");
    previousSlide = slides[x];
    x++;

    if (x == 3) {
      x = 0;
    }
  }
}; //---------------------------------------------------------------------------
//Page component animation


var isScrolling = false;
window.addEventListener("scroll", throttleScroll, false);

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;
  return top + height >= 0 && height + window.innerHeight >= bottom;
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  return top >= 0 && bottom <= window.innerHeight;
} //that launches the page scroll handler 'scrolling'. 
//using the window.requestAnimationFrame method, we set the handler 'scrolling' call 
//on the next frame of the animation. This means that the current event handler 
//will be called about 60 times per second, which is a valid value when working 
//with DOM structures of various kinds.


function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function () {
      scrolling(e);
      isScrolling = false;
    });
  }

  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);
var elementArray = [];
var elementCounter = 0;
var selectorsArray = ["header", ".about-item-1", ".about-item-2", ".about-item-3", ".about-item-4", ".about-item-5", ".about-item-6", ".about-item-7", ".about-item-8", ".about-item-9", ".about-item-10", ".about-item-11", ".about-item-12", ".about-item-13", ".about-item-14", ".testimonial", ".team-item-1", ".team-item-2", ".team-item-3", ".team-item-4", ".team-item-5", ".team-item-6", ".twitter", ".gallery-head", ".gallery-item-1", ".gallery-item-2", ".gallery-item-3", ".gallery-item-4", ".gallery-item-5", ".gallery-item-6", ".gallery-item-7", ".gallery-item-8", ".gallery-item-9", ".gallery-item-10", ".gallery-item-11", ".gallery-item-12", ".gallery-item-13", ".gallery-item-14", ".gallery-item-15", ".gallery-item-16", ".gallery-item-17", ".gallery-item-18", ".contact-us", ".email-message", ".map", "footer"];

for (var i = 0; i < selectorsArray.length; i++) {
  elementArray.push([$(selectorsArray[i])[0], true]);
}

function scrolling(e) {
  for (var _i = 0; _i < elementArray.length; _i++) {
    if (elementCounter == selectorsArray.length) {
      document.removeEventListener("DOMContentLoaded", scrolling);
      break;
    }

    if (elementArray[_i][1] && isPartiallyVisible(elementArray[_i][0])) {
      if (elementArray[_i][0].classList.contains("hide-item")) {
        elementArray[_i][0].classList.remove("hide-item");

        elementArray[_i][0].classList.add("show-item");

        elementArray[_i][1] = false;
      }

      elementCounter += 1;
    }
  }
}
//# sourceMappingURL=script.js.map
