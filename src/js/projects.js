import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const prevBtn = document.querySelector('.left-button');
const nextBtn = document.querySelector('.right-button');
const swiper = new Swiper('.swiper', {
    spaceBetween: 100,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev', 
    },     
    a11y: true,
    allowTouchMove: true,
    centeredSlides: true,
    keyboard: true,
    mousewheel: false,
    nested: true,
    on: {
        slideChange: function () {
   
            if (swiper.isBeginning) {
                prevBtn.disabled = true;
                prevBtn.style.borderColor = '#fafafa33';
            } else {
                prevBtn.disabled = false;
                prevBtn.style.borderColor = '#fafafa80';
            }
    
            if (swiper.isEnd) {
                nextBtn.disabled = true;
                nextBtn.style.borderColor = '#fafafa33';
            } else {
                nextBtn.disabled = false;
                nextBtn.style.borderColor = '#fafafa80';
            }
        }
    }
});

prevBtn.disabled = true;