

const track = document.querySelector(".slider__track");
const slides = document.querySelectorAll(".slider__slide");
const prevButton = document.querySelector(".js-prev");
const nextButton = document.querySelector(".js-next");
const currentText = document.querySelector(".js-current");
const totalText = document.querySelector(".js-total");
let currentIndex = 0;
const totalSlides = slides.length;
totalText.textContent = totalSlides;
function updateSlider() {
  const moveX = currentIndex * 100;
  track.style.transform = `translateX(-${moveX}%)`;
  currentText.textContent = currentIndex + 1;
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === totalSlides - 1;
}
nextButton.addEventListener("click", () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSlider();
  }
});
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});
updateSlider();

