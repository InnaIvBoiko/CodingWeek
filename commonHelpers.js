import{A as c,S as u}from"./assets/vendor-3e3bbe60.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();new c(".accordion-container",{showMultiple:!0});new c(".accordion-container",{showMultiple:!0});const r=document.querySelector(".left-button"),o=document.querySelector(".right-button"),n=new u(".swiper",{spaceBetween:100,navigation:!0,a11y:!0,allowTouchMove:!0,centeredSlides:!0,keyboard:!0,mousewheel:!0,nested:!0});r.disabled=!0;r.addEventListener("click",a);o.addEventListener("click",f);function a(){n.slidePrev()}function f(){n.slideNext()}n.on("slideChange",function(){n.isBeginning?(r.disabled=!0,r.style.borderColor="#fafafa33"):(r.disabled=!1,r.style.borderColor="#fafafa80"),n.isEnd?(o.disabled=!0,o.style.borderColor="#fafafa33"):(o.disabled=!1,o.style.borderColor="#fafafa80")});
//# sourceMappingURL=commonHelpers.js.map
