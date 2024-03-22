import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const  aboutAccordion = new Accordion('.about-accordeon-container', {
  showMultiple: true,
});
aboutAccordion.open(0);

// Swiper configuration
const swiper = new Swiper('.swiper-about', {
  slidesPerView: 2,
  spaceBetween: 0,
  a11y: true,
  allowTouchMove: true,
  keyboard: true,
  mousewheel: true,
  nested: true,
  centeredSlides: false,
  loop: true,
  navigation: {
    //  nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-next',
  },
  breakpoints: {
        768: {
            slidesPerView: 3, 
        },
        1440: {
          slidesPerView: 6, 
        }
    }
});
