const burger = document.querySelector(".burger");
const nav = document.querySelector(".navlinks");
const navLinks = document.querySelectorAll(".navlinks ul li");
const navBtns = document.querySelectorAll(".navlinks_btns button");

burger.addEventListener("click", showNav);

function showNav() {
  nav.classList.toggle("active");
}

function removeNav() {
  //   nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  }
}

navLinks.forEach(function (item) {
  item.addEventListener("click", removeNav);
});

navBtns.forEach(function (item) {
  item.addEventListener("click", removeNav);
});
