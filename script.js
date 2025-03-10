let slideIndex = 0; // Initialize slide index to 0, representing the first slide

/**
 * Function to display the current slide and hide others.
 */
function showSlides() {
  let slides = document.getElementsByClassName("mySlides"); // Get all elements with class "mySlides" (slides)

  // Hide all slides by setting their display style to "none"
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // If slideIndex is greater than or equal to the number of slides, reset it to 0 to loop back to the first slide
  if (slideIndex >= slides.length) {
    slideIndex = 0; // Reset to the first slide index if it exceeds the number of slides
  }
  slides[slideIndex].style.display = "block"; // Display the current slide (make it visible)
}

/**
 * Function to advance or go back in the slideshow.
 * @param {number} n - The number of slides to move forward (positive) or backward (negative).
 */
function plusSlides(n) {
  let slides = document.getElementsByClassName("mySlides"); // Get all slide elements

  // Check if trying to go to the next slide from the last slide
  if (slideIndex === slides.length - 1 && n > 0) {
    reset(); // If on the last slide and trying to go forward, call the reset function
    return; // Exit the function after reset
  }

  slideIndex += n; // Increment or decrement slideIndex by n to move to the next or previous slide
  showSlides(); // Call showSlides to update the display with the new slide index
}

/**
 * Function to reset the page by redirecting to the index.html page.
 */
function reset() {
  window.location.href = "index.html"; // Redirect the browser to the main index.html page
}

// Event listener to initialize the slideshow when the DOM (Document Object Model) is fully loaded.
document.addEventListener("DOMContentLoaded", function () {
  showSlides(); // Call showSlides function when the page is fully loaded to display the initial slide
});
