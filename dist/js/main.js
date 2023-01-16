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
var floorballboxs = document.querySelectorAll(".flip-box#floorball");
for (const floorballbox of floorballboxs) {
  floorballbox.addEventListener("click", function () {
    for (var i = 0; i < floorballboxs.length; i++) {
      floorballboxs[i].classList.toggle("flipped");
    }
  });
}
var footballboxs = document.querySelectorAll(".flip-box#football");
for (const footballbox of footballboxs) {
  footballbox.addEventListener("click", function () {
    for (var i = 0; i < footballboxs.length; i++) {
      footballboxs[i].classList.toggle("flipped");
    }
  });
}
