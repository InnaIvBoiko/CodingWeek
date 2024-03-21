import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import axios from 'axios';
const container = document.querySelector('.cards-container')
const reviewsSwiper = new Swiper('.reviews-swiper', {
    
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
                spaceBetween: 8,
                breakpoints: {
                    375:  { slidesPerView: 1 },
                    768:  { slidesPerView: 2 },
                    1440: { slidesPerView: 4 },  

                }
});

async function getReviews() {
    try {
        const response = await axios.get("https://portfolio-js.b.goit.study/api/reviews");
       
        renderData(response.data);
        
    } catch (error) {
        console.error(error);
    }
};


function renderData(data) {
    
    const render = data.map(({ author, avatar_url, review }) => {
        return `<div class="card swiper-slide">
        
        <img class="author-photo" src="${avatar_url}" alt="photo"/>
        <h3 class="review-author-name">${author}</h3>
        <p class = "review-content">${review}</p>
        
        </div>`;
    }).join('');
    container.innerHTML = render; 
}

getReviews();