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

//Flip images
$(document).ready(function () {
  $(".flip-box#floorball").click(function () {
    $(".flip-box#floorball").each(function () {
      $(this).toggleClass("hover");
    });
  });
});
$(document).ready(function () {
  $(".flip-box#football").click(function () {
    $(".flip-box#football").each(function () {
      $(this).toggleClass("hover");
    });
  });
});
