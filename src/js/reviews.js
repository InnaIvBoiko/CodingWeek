import Swiper from 'swiper/bundle'; 
import 'swiper/css/bundle'; 
import axios from 'axios';

const prevBtn = document.querySelector('.reviews-left-button'); 
const nextBtn = document.querySelector('.reviews-right-button');

const swiper = new Swiper('.swiper-reviews', {
    spaceBetween: 100,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    a11y: true,
    allowTouchMove: true,
    keyboard: true,
    mousewheel: true,
    nested: true,
    slidesPerView: 1, 
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
    },
    breakpoints: {
        768: {
            spaceBetween: 16,
            slidesPerView: 2 
        },
        1440: {
            spaceBetween: 16,
            slidesPerView: 4 
        }
    }
});

const CARDS = document.querySelector('.cards-container');

async function getReviews() {
    try {
        const response = await axios.get("https://portfolio-js.b.goit.study/api/reviews");
        return response.data;
        
    } catch (error) {
        console.log(error);
    }
};

let reviewsList = [];

function markUpReviews() {
    getReviews()
        .then((res) => {
            reviewsList = res;
            return reviewsList;
        })
        .then((reviews) => {
            const result = reviews.map((review) =>
                `<li class="card swiper-slide">
                    <img
                        class="card-foto"
                        src="${review.avatar_url}"
                        alt="Photo"
                    />
                    <h3 class="card-title">${review.author}</h3>
                    <p class="card-text">
                        ${review.review}
                    </p>
                </li>`)
                .join('');
            return CARDS.insertAdjacentHTML('afterbegin', result);
        })
        .catch((error) => {
            CARDS.innerHTML = `<h3 class="card-title">Not found</h3>`;
        });
};

markUpReviews();