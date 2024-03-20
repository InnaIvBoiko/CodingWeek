import{A as h,S as b,a as k,i as S}from"./assets/vendor-4970faf1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))y(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&y(p)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function y(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const q=document.querySelector(".header-menu-btn"),w=document.querySelector(".modal-header"),C=document.querySelector(".header-burger-btn"),M=document.querySelector(".modal-header-body-close-btn"),B=document.querySelector(".item-link-menu"),x=document.querySelector(".item-link-about"),P=document.querySelector(".item-link-benefits"),A=document.querySelector(".item-link-projects"),T=document.querySelector(".item-link-faq");M.addEventListener("click",a);q.addEventListener("click",()=>{w.classList.add("is-open")});C.addEventListener("click",()=>{w.classList.add("is-open")});B.addEventListener("click",a);function a(){w.classList.remove("is-open")}x.addEventListener("click",()=>{a(),window.location.href="#about"});P.addEventListener("click",()=>{a(),window.location.href="#benefits"});A.addEventListener("click",()=>{a(),window.location.href="#projects"});T.addEventListener("click",()=>{a(),window.location.href="#faq"});const N=new h(".about-accordеon-container",{showMultiple:!0});N.open(0);new b(".swiper-about",{slidesPerView:2,spaceBetween:0,a11y:!0,allowTouchMove:!0,keyboard:!0,mousewheel:!0,nested:!0,centeredSlides:!1,loop:!0,navigation:{nextEl:".swiper-button-next"},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});const c=document.querySelector(".left-button"),v=document.querySelector(".right-button"),g=new b(".swiper",{spaceBetween:100,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},a11y:!0,allowTouchMove:!0,centeredSlides:!0,keyboard:!0,mousewheel:!1,nested:!0,on:{slideChange:function(){g.isBeginning?(c.disabled=!0,c.style.borderColor="#fafafa33"):(c.disabled=!1,c.style.borderColor="#fafafa80"),g.isEnd?(v.disabled=!0,v.style.borderColor="#fafafa33"):(v.disabled=!1,v.style.borderColor="#fafafa80")}}});c.disabled=!0;new h(".accordion-container",{showMultiple:!0});const L=document.querySelector(".marquee");window.addEventListener("scroll",()=>{H(L)&&L.animate([{transform:"translateX(-5%)"},{transform:"translateX(-35%)"}],{easing:"ease-in-out",duration:5e3,iterations:"Infinity"})});function H(t){const r=t.getBoundingClientRect(),i=document.documentElement;return r.top>=0&&r.left>=0&&r.bottom<=(window.innerHeight||i.clientHeight)&&r.right<=(window.innerWidth||i.clientWidth)}const l=document.querySelector(".reviews-left-button"),d=document.querySelector(".reviews-right-button"),f=new b(".reviews-swiper",{spaceBetween:16,navigation:!0,a11y:!0,allowTouchMove:!0,centeredSlides:!0,keyboard:!0,mousewheel:!0,nested:!0,slidesPerView:1,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});l.disabled=!0;l.addEventListener("click",I);d.addEventListener("click",V);function I(){f.slidePrev()}function V(){f.slideNext()}f.on("slideChange",function(){f.isBeginning?(l.disabled=!0,l.style.borderColor="#fafafa33"):(l.disabled=!1,l.style.borderColor="#fafafa80"),f.isEnd?(d.disabled=!0,d.style.borderColor="#fafafa33"):(d.disabled=!1,d.style.borderColor="#fafafa80")});const E=document.querySelector(".form-field"),m=document.querySelector("#footerFormModal"),X=document.querySelector(".form-modal-icon"),o=document.querySelector(".footer-input#email"),u=document.querySelector(".footer-input#message"),s=document.getElementById("footer-input-message");m.addEventListener("click",O);X.addEventListener("click",_);E.addEventListener("submit",G);window.addEventListener("keydown",j);o.addEventListener("input",function(){o.checkValidity()?(o.classList.add("is-valid"),o.classList.remove("is-invalid"),s.textContent="Succes!",s.style.color="#3cbc81"):(o.classList.remove("is-valid"),o.classList.add("is-invalid"),s.textContent="Invalid email, try again",s.style.color="#ed3b44"),o.value.length>40&&(o.value=o.value.substring(0,40)+"..."),o.value===""&&(o.classList.remove("is-invalid"),s.textContent="")});u.addEventListener("input",function(){u.value.length>100&&(u.value=u.value.substring(0,100)+"...")});function G(t){t.preventDefault();const r={email:o.value.trim(),message:u.value.trim()};k.post("https://virtserver.swaggerhub.com/Qalib/project-jefferson/1.0.0/devices",r).then(i=>{m.classList.add("is-visible"),o.classList.remove("is-valid"),s.textContent=""}).catch(i=>{F()}).finally(()=>{E.reset()})}function O(t){t.target===t.currentTarget&&m.classList.remove("is-visible")}function _(){m.classList.remove("is-visible")}function j(t){t.keyCode===27&&m.classList.remove("is-visible")}function F(t){S.error({title:"Post Error",message:"An error occurred while sending the data. Please try again.",position:"topRight",timeout:5e3,progressBarColor:"#ffffff",theme:"dark",backgroundColor:"#1c1d20"})}
//# sourceMappingURL=commonHelpers.js.map
