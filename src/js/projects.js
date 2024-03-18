import Swiper from 'swiper';
import 'swiper/css';

const previosBtn = document.querySelector('.left-button');
const nextBtn = document.querySelector('.right-button');
const swiper = new Swiper('.swiper', {
    spaceBetween: 100,
    navigation: true,
    a11y: true,
    allowTouchMove: true,
    centeredSlides: true,
    keyboard: true,
    mousewheel: true,
    nested: true,

});
previosBtn.disabled = true;

previosBtn.addEventListener('click', prev); 
nextBtn.addEventListener('click', next);

function prev() {
    swiper.slidePrev()
};
function next() {
    swiper.slideNext()
};

swiper.on('slideChange', function () {
   
    if (swiper.isBeginning) {
        previosBtn.disabled = true;
        previosBtn.style.borderColor ='#fafafa33';
    } else {
        previosBtn.disabled = false;
        previosBtn.style.borderColor ='#fafafa80';
        
    }
    
    if (swiper.isEnd) {
        nextBtn.disabled = true;
        nextBtn.style.borderColor = '#fafafa33';
    } else {
      nextBtn.disabled = false;
      nextBtn.style.borderColor ='#fafafa80';
    }
});