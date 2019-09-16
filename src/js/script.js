"use strict"

// slider in Testimonial section
window.onload = function () {
	let slides = document.querySelectorAll(".slide");
	let previousSlide = null;

	let x = 0;

	setInterval( nextSlide, 5000 );

	function nextSlide() {
		if (previousSlide) {
			previousSlide.classList.remove("showSlide");
		}
		slides[x].classList.add("showSlide");
		previousSlide = slides[x];
		x++;
		if(x == 3) {
			x = 0;
		}
	}
}
