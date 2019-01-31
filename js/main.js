const menuButton = document.querySelector(".navigation__btn");
menuButton.addEventListener("click", showMenu);

function showMenu() {
  menuButton.classList.toggle("navigation__btn--active");
  document
    .querySelector(".navigation__list")
    .classList.toggle("navigation__list--active");
}

const dropBtn = document.querySelectorAll(".navigation__drop-btn");
console.log(typeof dropBtn);

dropBtn.forEach(v => {
  v.addEventListener("click", showDropdown);
});

function showDropdown(e) {
  console.log(e.target.classList);
  e.target.classList.toggle("triangle");
  if (e.target.classList.contains("more")) {
    console.log("hello");
    document
      .querySelector(".navigation__dropdown--more")
      .classList.toggle("navigation__dropdown--active");
  } else if (e.target.classList.contains("shop")) {
    document
      .querySelector(".navigation__dropdown--shop")
      .classList.toggle("navigation__dropdown--active");
  }
}

const slides = document.getElementsByClassName("header__back");
console.log(slides);
console.log(slides[0]);

const handleLeft = document.querySelector(".arrow-left");
const handleRight = document.querySelector(".arrow-right");
let slideIndex = 1;

handleLeft.addEventListener("click", () => {
  plusSlide(-1);
});
handleRight.addEventListener("click", () => {
  plusSlide(+1);
});

console.log(slideIndex);
slideImg(slideIndex);

function plusSlide(num) {
  console.log("click");
  slideImg((slideIndex += num));
}

function slideImg(n) {
  console.log(n);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  console.log(slideIndex);
  slides[slideIndex - 1].style.display = "flex";
}

const navigationLink = document.querySelectorAll(".navigation__link");

navigationLink.forEach(v => {
  v.addEventListener("click", closeMenu);
});

function closeMenu() {
  document
    .querySelector(".navigation__list")
    .classList.remove("navigation__list--active");
  menuButton.classList.toggle("navigation__btn--active");
}
