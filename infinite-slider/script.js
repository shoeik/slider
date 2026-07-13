const track = document.querySelector(".slider__track");
const slides = document.querySelectorAll(".slider__slide");

const prevBtn = document.querySelector(".js-prev");
const nextBtn = document.querySelector(".js-next");

const currentEl = document.querySelector(".js-current");
const totalEl = document.querySelector(".js-total");

const totalSlides = slides.length;

totalEl.textContent = totalSlides;

// clone作成
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);

// trackへ追加
track.appendChild(firstClone);
track.prepend(lastClone);

let currentIndex = 1;
let isAnimating = false;

// clone込みで再取得
const allSlides = document.querySelectorAll(".slider__slide");

// 初期位置
track.style.transform = `translateX(-100%)`;

function updateCounter() {
  let displayIndex = currentIndex;

  if (currentIndex === 0) {
    displayIndex = totalSlides;
  }

  if (currentIndex === totalSlides + 1) {
    displayIndex = 1;
  }

  currentEl.textContent = displayIndex;
}

function moveSlider() {
  isAnimating = true;

  track.style.transition = "transform .5s ease";
  track.style.transform =
    `translateX(-${currentIndex * 100}%)`;

  updateCounter();
}

nextBtn.addEventListener("click", () => {
  if (isAnimating) return;

  currentIndex++;
  moveSlider();
});

prevBtn.addEventListener("click", () => {
  if (isAnimating) return;

  currentIndex--;
  moveSlider();
});

track.addEventListener("transitionend", () => {

  isAnimating = false;

  // clone1に来た
  if (currentIndex === totalSlides + 1) {

    track.style.transition = "none";

    currentIndex = 1;

    track.style.transform =
      `translateX(-${currentIndex * 100}%)`;
  }

  // clone3に来た
  if (currentIndex === 0) {

    track.style.transition = "none";

    currentIndex = totalSlides;

    track.style.transform =
      `translateX(-${currentIndex * 100}%)`;
  }

  updateCounter();
});

updateCounter();
