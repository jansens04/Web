const menuHamburger = document.querySelector('.menuHamburger');
const menuCloseHamburger = document.querySelector('.menuCloseHamburger');
const navMenu = document.querySelector('.navMenu');

menuHamburger.addEventListener('click', () => toggleMenu(true));
menuCloseHamburger.addEventListener('click', () => toggleMenu(false));

const toggleMenu = (isOpen) => {
  menuHamburger.classList.toggle('active', isOpen);
  navMenu.classList.toggle('active', isOpen);
};
