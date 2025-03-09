let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Ensure slideIndex is within bounds
  if (slideIndex >= slides.length) {
    slideIndex = 0; // Restart from the first slide
  }
  slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
  let slides = document.getElementsByClassName("mySlides");

  // If on the last slide, reset to the comic page
  if (slideIndex === slides.length - 1 && n > 0) {
    reset();
    return;
  }

  slideIndex += n;
  showSlides();
}

function reset() {
  window.location.href = "index.html";
}

// Initialize slideshow when page loads
document.addEventListener("DOMContentLoaded", function () {
  showSlides();
});
