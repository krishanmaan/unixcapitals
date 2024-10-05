let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function moveSlide(direction) {
  currentIndex += direction;

  // Loop the slider around
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
