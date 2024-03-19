import Swiper from 'swiper/bundle'; 
import 'swiper/css/bundle'; 
import axios from 'axios';

const previousBtn = document.querySelector('.reviews-left-button'); 
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

previousBtn.disabled = true;

previousBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);

function prev() {
    swiper.slidePrev();
}

function next() {
    swiper.slideNext();
}

swiper.on('slideChange', function () {
    if (swiper.isBeginning) {
        previousBtn.disabled = true; 
        previousBtn.style.borderColor = '#fafafa33'; 
    } else {
        previousBtn.disabled = false; 
        previousBtn.style.borderColor = '#fafafa80'; 
    }
    
    if (swiper.isEnd) {
        nextBtn.disabled = true;
        nextBtn.style.borderColor = '#fafafa33';
    } else {
        nextBtn.disabled = false;
        nextBtn.style.borderColor = '#fafafa80';
    }
});

getReviews();