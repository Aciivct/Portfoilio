function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleFhlba() {
  let blur = document.querySelector(".home");
  blur.classList.toggle("active");
  let fhlba = document.querySelector(".fhlba");
  fhlba.classList.toggle("active");
}

function toggleFhlbi() {
  let blur = document.querySelector(".home");
  blur.classList.toggle("active");
  let fhlbi = document.querySelector(".fhlbi");
  fhlbi.classList.toggle("active");
}

function toggleIb() {
  let blur = document.querySelector(".home");
  blur.classList.toggle("active");
  let ib = document.querySelector(".ib");
  ib.classList.toggle("active");
}
