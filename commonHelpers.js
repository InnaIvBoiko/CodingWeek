import{A as b,S as w,a as k,i as S}from"./assets/vendor-25d1d006.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))g(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&g(p)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function g(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const C=document.querySelector(".header-menu-btn"),y=document.querySelector(".modal-header"),q=document.querySelector(".header-burger-btn"),M=document.querySelector(".modal-header-body-close-btn"),x=document.querySelector(".item-link-menu"),B=document.querySelector(".item-link-about"),P=document.querySelector(".item-link-benefits"),I=document.querySelector(".item-link-projects"),A=document.querySelector(".item-link-faq");M.addEventListener("click",a);C.addEventListener("click",()=>{y.classList.add("is-open")});q.addEventListener("click",()=>{y.classList.add("is-open")});x.addEventListener("click",a);function a(){y.classList.remove("is-open")}B.addEventListener("click",()=>{a(),window.location.href="#about"});P.addEventListener("click",()=>{a(),window.location.href="#benefits"});I.addEventListener("click",()=>{a(),window.location.href="#projects"});A.addEventListener("click",()=>{a(),window.location.href="#faq"});new b(".accordion-container",{showMultiple:!0});new w(".swiper-about",{loop:!0,speed:750,navigation:{nextEl:".about-me-skills-button"},grabCursor:!0,simulateTouch:!0,keyboard:{enabled:!0},breakpoints:{320:{slidesPerView:2,spaceBetween:0},678:{slidesPerView:3},1440:{slidesPerView:6}},on:{init:function(){const e=this.activeIndex;this.slides.forEach((t,r)=>{r===e?t.classList.add("active-slide"):t.classList.remove("active-slide")})},slideChange:function(){const e=this.activeIndex;this.slides.forEach((t,r)=>{r===e?t.classList.add("active-slide"):t.classList.remove("active-slide")})}}});const T=new b(".accordion-container-about",{duration:700,showMultiple:!0});T.open(0);const c=document.querySelector(".left-button"),v=document.querySelector(".right-button"),h=new w(".swiper",{spaceBetween:100,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},a11y:!0,allowTouchMove:!0,centeredSlides:!0,keyboard:!0,mousewheel:!1,nested:!0,on:{slideChange:function(){h.isBeginning?(c.disabled=!0,c.style.borderColor="#fafafa33"):(c.disabled=!1,c.style.borderColor="#fafafa80"),h.isEnd?(v.disabled=!0,v.style.borderColor="#fafafa33"):(v.disabled=!1,v.style.borderColor="#fafafa80")}}});c.disabled=!0;new b(".accordion-container",{showMultiple:!0});const L=document.querySelector(".marquee");window.addEventListener("scroll",()=>{N(L)&&L.animate([{transform:"translateX(-5%)"},{transform:"translateX(-35%)"}],{easing:"ease-in-out",duration:5e3,iterations:"Infinity"})});function N(e){const t=e.getBoundingClientRect(),r=document.documentElement;return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||r.clientHeight)&&t.right<=(window.innerWidth||r.clientWidth)}const l=document.querySelector(".reviews-left-button"),d=document.querySelector(".reviews-right-button"),f=new w(".reviews-swiper",{spaceBetween:16,navigation:!0,a11y:!0,allowTouchMove:!0,centeredSlides:!0,keyboard:!0,mousewheel:!0,nested:!0,slidesPerView:1,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});l.disabled=!0;l.addEventListener("click",H);d.addEventListener("click",V);function H(){f.slidePrev()}function V(){f.slideNext()}f.on("slideChange",function(){f.isBeginning?(l.disabled=!0,l.style.borderColor="#fafafa33"):(l.disabled=!1,l.style.borderColor="#fafafa80"),f.isEnd?(d.disabled=!0,d.style.borderColor="#fafafa33"):(d.disabled=!1,d.style.borderColor="#fafafa80")});const E=document.querySelector(".form-field"),m=document.querySelector("#footerFormModal"),X=document.querySelector(".form-modal-icon"),n=document.querySelector(".footer-input#email"),u=document.querySelector(".footer-input#message"),s=document.getElementById("footer-input-message");m.addEventListener("click",O);X.addEventListener("click",_);E.addEventListener("submit",G);window.addEventListener("keydown",j);n.addEventListener("input",function(){n.checkValidity()?(n.classList.add("is-valid"),n.classList.remove("is-invalid"),s.textContent="Succes!",s.style.color="#3cbc81"):(n.classList.remove("is-valid"),n.classList.add("is-invalid"),s.textContent="Invalid email, try again",s.style.color="#ed3b44"),n.value.length>40&&(n.value=n.value.substring(0,40)+"..."),n.value===""&&(n.classList.remove("is-invalid"),s.textContent="")});u.addEventListener("input",function(){u.value.length>100&&(u.value=u.value.substring(0,100)+"...")});function G(e){e.preventDefault();const t={email:n.value.trim(),message:u.value.trim()};k.post("https://virtserver.swaggerhub.com/Qalib/project-jefferson/1.0.0/devices",t).then(r=>{m.classList.add("is-visible"),n.classList.remove("is-valid"),s.textContent=""}).catch(r=>{F()}).finally(()=>{E.reset()})}function O(e){e.target===e.currentTarget&&m.classList.remove("is-visible")}function _(){m.classList.remove("is-visible")}function j(e){e.keyCode===27&&m.classList.remove("is-visible")}function F(e){S.error({title:"Post Error",message:"An error occurred while sending the data. Please try again.",position:"topRight",timeout:5e3,progressBarColor:"#ffffff",theme:"dark",backgroundColor:"#1c1d20"})}
//# sourceMappingURL=commonHelpers.js.map
