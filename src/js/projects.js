import Swiper from 'swiper';
import 'swiper/css';
const previosBtnIcon = document.querySelector('.left-button-icon');
const previosBtn = document.querySelector('.left-button');
const nextBtn = document.querySelector('.right-button');
const previosActive = document.querySelector('.swiper-slide-prev');
const nextActive = document.querySelector('.swiper-slide-next')
const currentActive = document.querySelector('.swiper-slide-active')
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

const bliaColor = document.querySelector('.blia-color');
bliaColor.style.stroke = 'red'
  
previosBtn.disabled = true;
previosBtn.style.color = '#242527';
previosBtn.style.border = '#242527';
previosBtnIcon.style.stroke = '#242527';

previosBtn.addEventListener('click', prev); 
nextBtn.addEventListener('click', next);

function prev() {
    swiper.slidePrev()
};
function next() {
    swiper.slideNext()
    
}

        


    swiper.on('slideChange', function () {
   
    if (swiper.isBeginning) {
        previosBtn.disabled = true;
        previosBtn.style.backgroundColor = '#242527';
        previosBtnIcon.style.stroke = '#242527';
    } else if (swiper.isEnd) {
        nextBtn.disabled = true;
        previosBtn.disabled = false;
    }
    
     else {
        nextBtn.disabled = false;
    }
    })

