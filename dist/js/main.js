//Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelector(".menu-links");
const navItems = document.querySelectorAll(".nav-item");

//Set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuLinks.classList.add("show");

    navItems.forEach((item) => item.classList.add("show"));

    //Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuLinks.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    //Set menu state
    showMenu = false;
  }
}

//Track mouse movement
const track = document.getElementById("image-track");

window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};

window.onmouseup = (e) => {
  track.dataset.mouseDownAt = "0";
  track.dataset.previousPercentage = track.dataset.percentage;
  var elem = document.elementFromPoint(
    $(window).width() / 2,
    $(window).height() / 2
  );
  const moment = document.getElementById(elem);
  if (elem == 1) {
    moment.style.visibility = "visible";
  }
};
window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt == "0") return;

  const mouseCurrent = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const mouseMax = window.innerWidth / 2;
  const percentage = (mouseCurrent / mouseMax) * -100;
  const nextPercentage = Math.min(
    Math.max(parseFloat(track.dataset.previousPercentage) + percentage, -87),
    0
  );
  track.dataset.percentage = nextPercentage;

  track.style.transform = `translate(${nextPercentage}%, -50%)`;

  for (const image of track.getElementsByClassName("image")) {
    image.style.objectPosition = `${nextPercentage + 100}% 50%`;
  }
};
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//KESKEN FIXX
//Flip player image on click
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Flip image on click
$(document).ready(function () {
  $(".box").click(function () {
    $(this).toggleClass("hover");
  });
});
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//KESKEN FIXX
//Flip player image on click
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
