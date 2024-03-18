import Swiper from 'swiper';
import 'swiper/css';
import axios from 'axios';

const galleryOfReviews = document.querySelector('.swiperRev-wrapper')
const previosBtn = document.querySelector('.left-button');
const nextBtn = document.querySelector('.right-button');
let swiper;


previosBtn.disabled = true;
previosBtn.addEventListener('click', prev); 
nextBtn.addEventListener('click', next);

async function getReviews() {
   try {
        const response = await axios.get("https://portfolio-js.b.goit.study/api/reviews");
        renderData(response);
    } catch (error) {
        console.error(error.message);
    }
}

function renderData(response) {
    const data = response.data;
        const reviewData = data.map(({ author, avatar_url, review }) => {
        return `<div class="card swiperRev-slide">
                        <img class ="review-author-photo" src="${avatar_url}" alt="Photo" />
                        <h3 class="review-author-name">${author}</h3>
                        <p class="review-content">${review}</p>
                    </div>`
    }).join('');
 
    galleryOfReviews.innerHTML = reviewData;
    swiperSlide();
}    


function swiperSlide(){
    
    swiper = new Swiper('.swiperRev', {
        spaceBetween: 100,
        navigation: true,
        a11y: true,
        allowTouchMove: true,
        centeredSlides: true,
        keyboard: true,
        mousewheel: true,
        nested: true,
        slidesPerGroupAuto: true,
    })

    swiper.on('slideChange', function () {
   
    if (swiper.isBeginning) {
        previosBtn.disabled = true;
        previosBtn.style.borderColor = '#fafafa33';
    } else {
        previosBtn.disabled = false;
        previosBtn.style.borderColor = '#fafafa80';
    }
    
    if (swiper.isEnd) {
        nextBtn.disabled = true;
        nextBtn.style.borderColor = '#fafafa33';
    } else {
        nextBtn.disabled = false;
        nextBtn.style.borderColor = '#fafafa80';
    }
});

};

 function prev() {
    console.log('prev')
    swiper.slidePrev()
};
function next() {
    console.log('next')
  swiper.slideNext()
};

getReviews();
