const track = document.querySelector(".slider__track");
const originalSlides = document.querySelectorAll(".slider__slide");
const prevButton = document.querySelector(".js-prev");
const nextButton = document.querySelector(".js-next");
const currentText = document.querySelector(".js-current");
const totalText = document.querySelector(".js-total");

const totalSlides = originalSlides.length;
let currentIndex = 1;
let isAnimating = false;

totalText.textContent = totalSlides;

// 最初のスライドと最後のスライドを複製する
const firstClone = originalSlides[0].cloneNode(true);
const lastClone = originalSlides[totalSlides - 1].cloneNode(true);

// trackの最後に「最初のclone」を追加
track.appendChild(firstClone);

// trackの最初に「最後のclone」を追加
track.insertBefore(lastClone, originalSlides[0]);

// cloneを含めた全スライドを取得
const slides = document.querySelectorAll(".slider__slide");

// 初期位置を「本物のSlide 1」にする
track.style.transform = `translateX(-${currentIndex * 100}%)`;

function updateIndexText() {
  let displayIndex = currentIndex;

  if (currentIndex === 0) {
    displayIndex = totalSlides;
  }

  if (currentIndex === totalSlides + 1) {
    displayIndex = 1;
  }

  currentText.textContent = displayIndex;
}

function moveToSlide() {
  isAnimating = true;
  track.style.transition = "transform 0.4s ease";
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  updateIndexText();
}

nextButton.addEventListener("click", () => {
  if (isAnimating) return;

  currentIndex++;
  moveToSlide();
});

prevButton.addEventListener("click", () => {
  if (isAnimating) return;

  currentIndex--;
  moveToSlide();
});

track.addEventListener("transitionend", () => {
  isAnimating = false;

  // 右端のclone Slide 1 に来たら、本物のSlide 1へ瞬間移動
  if (currentIndex === totalSlides + 1) {
    track.style.transition = "none";
    currentIndex = 1;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // 左端のclone Slide 3 に来たら、本物のSlide 3へ瞬間移動
  if (currentIndex === 0) {
    track.style.transition = "none";
    currentIndex = totalSlides;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  updateIndexText();
});

updateIndexText();
