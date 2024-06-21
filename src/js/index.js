const menuHamburger = document.querySelector('.menuHamburger');
const menuCloseHamburger = document.querySelector('.menuCloseHamburger');
const navMenu = document.querySelector('.navMenu');

menuHamburger.addEventListener('click', () => {
  menuHamburger.classList.add('active');
  navMenu.classList.add('active');
});

menuCloseHamburger.onclick = () => {
  menuHamburger.classList.remove('active');
  navMenu.classList.remove('active');
};
