// Import Swiper styles
import 'swiper/swiper-bundle.css';

// Import Swiper JavaScript
import Swiper from 'swiper/swiper-bundle.min.js';

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
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
});
