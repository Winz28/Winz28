const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
const delay = 2500;

function updateSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === currentIndex) {
      slide.classList.add("active");
    }
  });

  const slideWidth = slides[0].offsetWidth;
  const offset = -currentIndex * slideWidth;
  document.querySelector(".slides").style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlides();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlides();
}

let autoSlide = setInterval(nextSlide, delay);

// Geser manual (swipe di HP)
let startX = 0;
document.querySelector(".carousel").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  clearInterval(autoSlide);
});
document.querySelector(".carousel").addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;
  if (diff > 50) prevSlide();
  else if (diff < -50) nextSlide();
  autoSlide = setInterval(nextSlide, delay);
});

updateSlides();