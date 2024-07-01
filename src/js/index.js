const menuHamburger = document.querySelector('.menuHamburger');
const menuCloseHamburger = document.querySelector('.menuCloseHamburger');
const navMenu = document.querySelector('.navMenu');

menuHamburger.addEventListener('click', () => toggleMenu(true));
menuCloseHamburger.addEventListener('click', () => toggleMenu(false));

const toggleMenu = (isOpen) => {
  menuHamburger.classList.toggle('active', isOpen);
  navMenu.classList.toggle('active', isOpen);
};

// set card
{
  /* <div class="group block overflow-hidden w-[220px] md:w-[230px] ">
<img src="${product.img_product}" alt="" class="h-[300px] cursor-pointer w-full object-cover sm:h-[300px] duration-500 hover:scale-110" />

<div class="relative bg-white pt-3">
  <div class="flex justify-between items-center">
    <a href="#" class="text-gray-900 group-hover:underline group-hover:underline-offset-4">
      ${product.title_product}
    </a>
    <p class="text-gray">${product.price}K</p>
  </div>

  <p class="mt-1.5 text-pretty text-xs text-gray-500 w-full">${product.desc_product}</p>
</div>
</div> */
}
