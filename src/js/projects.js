import Swiper from 'swiper';
import 'swiper/css';

// const swiper = document.querySelector('.swiper').swiper;
const swiper = new Swiper('.swiper', {
  speed: 500,
  spaceBetween: 100,
});
// Now you can use all slider methods like
swiper.slideNext();
const resolution = window.innerWidth;
// console.log(`your resolution is: ${resolution}`);
const firstSlide = document.getElementById('one');
const secondSlide = document.getElementById('two');
const thirdSlide = document.getElementById('three');


const leftBtn = document.querySelector('.left-button');

const rightBtn = document.querySelector('.right-button');