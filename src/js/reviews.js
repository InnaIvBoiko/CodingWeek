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
    slidesPerView: 1, 
    breakpoints: {
        768: {
            slidesPerView: 2 
        },
        1440: {
            slidesPerView: 4 
        }
    }
}); 

async function getReviews() {
    try {
        const response = await axios.get("https://portfolio-js.b.goit.study/api/reviews");
        renderData(response.data); 
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


// import Swiper from 'swiper/bundle'; 
// import 'swiper/css/bundle'; 
// import axios from 'axios';

// const previosBtn = document.querySelector('.reviews-left-button');
// const nextBtn = document.querySelector('.reviews-right-button');
// const swiper = new Swiper('.reviews-swiper', {
//     spaceBetween: 16,
//     navigation: true,
//     a11y: true,
//     allowTouchMove: true,
//     centeredSlides: true,
//     keyboard: true,
//     mousewheel: true,
//     nested: true,
// });

// async function getReviews() {
//     try {
//         const response = await axios.get("https://portfolio-js.b.goit.study/api/reviews");
//         renderData(response.data); 
//     } catch (error) {
//         console.error(error.message);
//     }
// }

// previosBtn.disabled = true;

// previosBtn.addEventListener('click', prev); 
// nextBtn.addEventListener('click', next);

// function prev() {
//     swiper.slidePrev()
// };
// function next() {
//     swiper.slideNext()
// };

// swiper.on('slideChange', function () {
   
//     if (swiper.isBeginning) {
//         previosBtn.disabled = true;
//         previosBtn.style.borderColor ='#fafafa33';
//     } else {
//         previosBtn.disabled = false;
//         previosBtn.style.borderColor ='#fafafa80';
        
//     }
    
//     if (swiper.isEnd) {
//         nextBtn.disabled = true;
//         nextBtn.style.borderColor = '#fafafa33';
//     } else {
//       nextBtn.disabled = false;
//       nextBtn.style.borderColor ='#fafafa80';
//     }
// });

