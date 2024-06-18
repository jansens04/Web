const menuHamburger = document.querySelector('.menuHamburger');
const navMenu = document.querySelector('.navMenu');

menuHamburger.onclick = () => {
  menuHamburger.className = menuHamburger.className.replace('bx bx-menu', 'bx bx-x');
  navMenu.classList.toggle('active');
};
