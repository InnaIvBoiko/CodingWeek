import{A as d,a as u,S as f}from"./assets/vendor-2337e2be.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();new d(".accordion-container",{showMultiple:!0});const p=document.querySelector(".swiperRev-wrapper"),o=document.querySelector(".left-button"),i=document.querySelector(".right-button");let s;o.disabled=!0;o.addEventListener("click",w);i.addEventListener("click",g);async function y(){try{const r=await u.get("https://portfolio-js.b.goit.study/api/reviews");m(r)}catch(r){console.error(r.message)}}function m(r){const c=r.data.map(({author:a,avatar_url:e,review:t})=>`<div class="card swiperRev-slide">
                        <img class ="review-author-photo" src="${e}" alt="Photo" />
                        <h3 class="review-author-name">${a}</h3>
                        <p class="review-content">${t}</p>
                    </div>`).join("");p.innerHTML=c,v()}function v(){s=new f(".swiperRev",{spaceBetween:100,navigation:!0,a11y:!0,allowTouchMove:!0,centeredSlides:!0,keyboard:!0,mousewheel:!0,nested:!0,slidesPerGroupAuto:!0}),s.on("slideChange",function(){s.isBeginning?(o.disabled=!0,o.style.borderColor="#fafafa33"):(o.disabled=!1,o.style.borderColor="#fafafa80"),s.isEnd?(i.disabled=!0,i.style.borderColor="#fafafa33"):(i.disabled=!1,i.style.borderColor="#fafafa80")})}function w(){console.log("prev"),s.slidePrev()}function g(){console.log("next"),s.slideNext()}y();
//# sourceMappingURL=commonHelpers.js.map
