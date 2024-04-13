// Function to scroll to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Show/Hide the scroll-to-top button based on scroll position
window.onscroll = function() {
    showScrollTopButton();
};

function showScrollTopButton() {
    var scrollTopButton = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
}

var slideIndex = 1; // Start with the first slide
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  // If reached the end of slides, go back to the first slide
  if (n > slides.length) { slideIndex = 1; }    
  if (n < 1) { slideIndex = slides.length; }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the current slide
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Add event listeners to the previous and next buttons
document.querySelector('.prev').addEventListener('click', function() {
  plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', function() {
  plusSlides(1);
});