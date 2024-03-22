const menuBtn = document.querySelector('.header-menu-btn');
const openMenu = document.querySelector('.header-menu-list');

const menuBurger = document.querySelector('.header-burger-btn');
const openBurger = document.querySelector('.modal-header');
const closeBurger = document.querySelector('.modal-header-body-close-btn');
const aboutLink = document.querySelector('.item-link-about');
const benefitsLink = document.querySelector('.item-link-benefits');
const projectsLink = document.querySelector('.item-link-projects');
const faqLink = document.querySelector('.item-link-faq');
const orderLink = document.querySelector('.modal-order-btn-link');

menuBtn.addEventListener('click', () => {
    if (openMenu.classList.contains('is-visibly-menu')) {
        openMenu.classList.remove('is-visibly-menu');
    } else {
        openMenu.classList.add('is-visibly-menu');
    };
});

menuBurger.addEventListener('click', () => {
    openBurger.classList.add('is-open');
});

closeBurger.addEventListener('click', () => {
    openBurger.classList.remove('is-open');
});

aboutLink.addEventListener('click', () => {
    openBurger.classList.remove('is-open');
});

benefitsLink.addEventListener('click', () => {
    openBurger.classList.remove('is-open');
});

projectsLink.addEventListener('click', () => {
    openBurger.classList.remove('is-open');
});

faqLink.addEventListener('click', () => {
    openBurger.classList.remove('is-open');
});

orderLink.addEventListener('click', () => {
    openBurger.classList.remove('is-open');
});

