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

const parent = document.querySelector(".navigation__dropdown");
console.log(parent.parentNode);
