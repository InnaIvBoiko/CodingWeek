import Swiper from 'swiper';
import 'swiper/css';
import axios from 'axios';

const previosBtn = document.querySelector('.reviews-left-button');
const nextBtn = document.querySelector('.reviews-right-button');
const swiper = new Swiper('.reviews-swiper', {
    spaceBetween: 16,
    navigation: true,
    a11y: true,
    allowTouchMove: true,
    centeredSlides: true,
    keyboard: true,
    mousewheel: true,
    nested: true,
});

async function getReviews() {
    try {
        const response = await axios.get("https://portfolio-js.b.goit.study/api/reviews");
        renderData(response.data); 
    } catch (error) {
        console.error(error.message);
    }
}

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