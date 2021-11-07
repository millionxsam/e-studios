const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.mobile-menu');
const menuClose = document.querySelector('.menu-close');

const mobileMenu = () =>{
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
}

menuBtn.addEventListener('click', mobileMenu);

menuClose.addEventListener('click', mobileMenu);