import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const  aboutAccordion = new Accordion('.about-accordеon-container', {
  showMultiple: true,
});
aboutAccordion.open(0);

// Function to toggle section visibility
function toggleSection(id) {
  const section = document.getElementById(id);
  if (section.style.display === 'none') {
    section.style.display = 'block';
  } else {
    section.style.display = 'none';
  }
}

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
    nextEl: '.swiper-button-next',
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
