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
// import Swiper from 'swiper/bundle'; 
// import 'swiper/css/bundle'; 
// import axios from 'axios';
// const prevBtn = document.querySelector('.reviews-button-prev');
// const nextBtn = document.querySelector('.reviews-button-next');
// const container = document.querySelector('.cards-container')
// const reviewsSwiper = new Swiper('.reviews-swiper', {
    
//                 navigation: {
//                 nextEl: '.reviews-button-next',
//                 prevEl: '.reviews-button-prev',
//                 },
//                 a11y: true,
//                 allowTouchMove: true,
//                 centeredSlides: true,
//                 keyboard: true,
//                 mousewheel: false,
//                 nested: true,
//                 breakpoints: {
                    
//                     768: {
//                          slidesPerView:2,
//         spaceBetween: 20,
//         slidesPerGroup: 2,
//                     },
//                     1440: { slidesPerView: 4,
//                             spaceBetween: 40,
//                              slidesPerGroup: 4,},  


//                 },
// 	on: {
//         slideChange: function () {
   
//             if (this.activeIndex === 0) {
//                 prevBtn.disabled = true;
//                 prevBtn.style.borderColor = '#fafafa33';
//             } else {
//                 prevBtn.disabled = false;
//                 prevBtn.style.borderColor = '#fafafa80';
//             }
    
//             if (this.activeIndex === this.slides.length - 1) {
//                 nextBtn.disabled = true;
//                 nextBtn.style.borderColor = '#fafafa33';
//             } else {
//                 nextBtn.disabled = false;
//                 nextBtn.style.borderColor = '#fafafa80';
//             }
//         }
//     }
// });



// async function getReviews() {
//     try {
//         const response = await axios.get("https://portfolio-js.b.goit.study/api/reviews");
       
//         renderData(response.data);
        
//     } catch (error) {
//         console.error(error);
//     }
// };



// previousBtn.disabled = true;

// function renderData(data) {
    

//     const render = data.map(({ author, avatar_url, review }) => {
//         return `<div class="card swiper-slide">
        
//         <img class="author-photo" src="${avatar_url}" alt="photo"/>
//         <h3 class="review-author-name">${author}</h3>
//         <p class = "review-content">${review}</p>
        
//         </div>`;
//     }).join('');
//     container.innerHTML = render; 
// }

// getReviews();

  
