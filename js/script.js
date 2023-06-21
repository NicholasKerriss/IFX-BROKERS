let openButton = document.getElementById("open-button");
let closeButton = document.getElementById("close-button");
let menu = document.getElementById("menu");

openButton.addEventListener("click", openMenu);
function openMenu() {
  menu.style.display = "block";
}

closeButton.addEventListener("click", closeMenu);
function closeMenu() {
  menu.style.display = "none";
}
