// Variables
const navExpand = document.querySelector('.nav__expand');
const nav = document.querySelector('.nav');
const navListItem = document.querySelectorAll('.nav__listitem');

// Functions
const toggleNav = () => {
    nav.classList.toggle('nav-closed');
};

function listActive(e) {
    navListItem.forEach((link) => link.classList.remove("nav__listitem-active"));
    this.classList.add("nav__listitem-active");
  }

// Event listeners
navExpand.addEventListener('click', toggleNav);
navListItem.forEach((link) => link.addEventListener("click", listActive));
