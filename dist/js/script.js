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
document.addEventListener("DOMContentLoaded", scrolling, false);

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

var elementArray = [];
var elementCounter = 0;
elementArray.push([$("header")[0], true]);
elementArray.push([$(".about-item-1")[0], true]);
elementArray.push([$(".about-item-2")[0], true]);
elementArray.push([$(".about-item-3")[0], true]);
elementArray.push([$(".about-item-4")[0], true]);
elementArray.push([$(".about-item-5")[0], true]);
elementArray.push([$(".about-item-6")[0], true]);
elementArray.push([$(".about-item-7")[0], true]);
elementArray.push([$(".about-item-8")[0], true]);
elementArray.push([$(".about-item-9")[0], true]);
elementArray.push([$(".about-item-10")[0], true]);
elementArray.push([$(".about-item-11")[0], true]);
elementArray.push([$(".about-item-12")[0], true]);
elementArray.push([$(".about-item-13")[0], true]);
elementArray.push([$(".about-item-14")[0], true]);
elementArray.push([$(".testimonial")[0], true]);
elementArray.push([$(".team-item-1")[0], true]);
elementArray.push([$(".team-item-2")[0], true]);
elementArray.push([$(".team-item-3")[0], true]);
elementArray.push([$(".team-item-4")[0], true]);
elementArray.push([$(".team-item-5")[0], true]);
elementArray.push([$(".team-item-6")[0], true]);
elementArray.push([$(".twitter")[0], true]);
elementArray.push([$(".gallery-head")[0], true]);
elementArray.push([$(".gallery-item-1")[0], true]);
elementArray.push([$(".gallery-item-2")[0], true]);
elementArray.push([$(".gallery-item-3")[0], true]);
elementArray.push([$(".gallery-item-4")[0], true]);
elementArray.push([$(".gallery-item-5")[0], true]);
elementArray.push([$(".gallery-item-6")[0], true]);
elementArray.push([$(".gallery-item-7")[0], true]);
elementArray.push([$(".gallery-item-8")[0], true]);
elementArray.push([$(".gallery-item-9")[0], true]);
elementArray.push([$(".gallery-item-10")[0], true]);
elementArray.push([$(".gallery-item-11")[0], true]);
elementArray.push([$(".gallery-item-12")[0], true]);
elementArray.push([$(".gallery-item-13")[0], true]);
elementArray.push([$(".gallery-item-14")[0], true]);
elementArray.push([$(".gallery-item-15")[0], true]);
elementArray.push([$(".gallery-item-16")[0], true]);
elementArray.push([$(".gallery-item-17")[0], true]);
elementArray.push([$(".gallery-item-18")[0], true]);
elementArray.push([$(".contact-us")[0], true]);
elementArray.push([$(".email-message")[0], true]);
elementArray.push([$(".map")[0], true]);
elementArray.push([$("footer")[0], true]);

function scrolling(e) {
  for (var i = 0; i < elementArray.length; i++) {
    if (elementCounter == 46) {
      break;
    }

    if (elementArray[i][1] && isPartiallyVisible(elementArray[i][0])) {
      if (elementArray[i][0].classList.contains("hide-item")) {
        elementArray[i][0].classList.remove("hide-item");
        elementArray[i][0].classList.add("show-item");
        elementArray[i][1] = false;
      }

      elementCounter += 1;
    }
  }
}