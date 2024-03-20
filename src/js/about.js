import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const  aboutAccordion = new Accordion('.about-accordеon-container', {
  showMultiple: true,
});
aboutAccordion.open(0);

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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
  slidesPerView: 3,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
  },
  loop: true,
});
