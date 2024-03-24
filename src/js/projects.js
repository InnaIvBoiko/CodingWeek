import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const prevBtn = document.querySelector('.projects-left-button');
const nextBtn = document.querySelector('.projects-right-button');
const swiper = new Swiper('.projects-swiper', {
    spaceBetween: 100,
    navigation: {
        nextEl: '.projects-right-button',
        prevEl: '.projects-left-button', 
    },  
    effect: 'flip',
    limitRotation:	true,	
    slideShadows:	true,	

    a11y: true,
    allowTouchMove: true,
    centeredSlides: true,
    keyboard: true,
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