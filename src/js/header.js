const menu = document.querySelector(".header-menu-btn");
const toggle = document.querySelector(".modal-header")
const menuBurger = document.querySelector(".header-burger-btn");
const closeBtn = document.querySelector(".modal-header-body-close-btn");
const menuCloseLink = document.querySelector(".item-link-menu");
const aboutLink = document.querySelector(".item-link-about");
const benefitsLink = document.querySelector(".item-link-benefits");
const projectsLink = document.querySelector(".item-link-projects");
const faqLink = document.querySelector(".item-link-faq");
    
closeBtn.addEventListener("click", closeModal)
 
menu.addEventListener("click", () => {
    toggle.classList.add("is-open")
    });

menuBurger.addEventListener("click", () => {
    toggle.classList.add("is-open");
    });

menuCloseLink.addEventListener("click", closeModal)

  function closeModal (){
            toggle.classList.remove("is-open");
};

aboutLink.addEventListener("click", () => {
    closeModal();
    window.location.href = "#about";
});


benefitsLink.addEventListener("click", () => {
    closeModal();
    window.location.href  = "#benefits";
});

projectsLink.addEventListener("click", () => {
    closeModal();
    window.location.href = "#projects";
});

faqLink.addEventListener("click", () => {
    closeModal();
    window.location.href = "#faq";
});

