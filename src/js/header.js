const menuBtn = document.querySelector('.header-menu-btn');
const openMenu = document.querySelector('.header-menu-list');

const menuBurger = document.querySelector('.header-burger-btn');
const openBurger = document.querySelector('.modal-header');
const closeBurger = document.querySelector('.modal-header-body-close-btn');
const burgerLinksList = document.querySelector('.modal-header-menu-list') 
const orderLink = document.querySelector('.modal-order-btn-link');

menuBtn.addEventListener('click', () => {
    if (openMenu.classList.contains('is-visibly-menu')) {
        openMenu.classList.remove('is-visibly-menu');
    } else {
        openMenu.classList.add('is-visibly-menu');
    };
});

openMenu.addEventListener('click', () => {
    openMenu.classList.remove('is-visibly-menu');
});

menuBurger.addEventListener('click', () => {
    openBurger.classList.add('is-open');
});

closeBurger.addEventListener('click', () => {
    openBurger.classList.remove('is-open');
});

burgerLinksList.addEventListener('click', () => {
    openBurger.classList.remove('is-open');
});

orderLink.addEventListener('click', () => {
    openBurger.classList.remove('is-open');
});

