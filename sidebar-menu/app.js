// Variables
let navExpand = document.querySelector('.nav__expand');
let nav = document.querySelector('.nav');
let navListItem = document.querySelectorAll('.nav__listitem');

// Functions
function toggleNav() {
    nav.classList.toggle('nav-closed');
};

function listActive() {
    navListItem.forEach((link) => link.classList.remove("nav__listitem-active"));
    this.classList.add("nav__listitem-active");
  }

// Event listeners
navExpand.addEventListener('click', toggleNav);
navListItem.forEach((link) => link.addEventListener('click', listActive));