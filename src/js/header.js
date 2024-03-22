const menu = document.querySelector(".header-menu-btn");
const toggle = document.querySelector(".modal-header")
const menuBurger = document.querySelector(".header-burger-btn");
const closeBtn = document.querySelector(".modal-header-body-close-btn");
const menuCloseLink = document.querySelector(".item-link-menu");
const aboutLink = document.querySelector(".item-link-about");
const benefitsLink = document.querySelector(".item-link-benefits");
const projectsLink = document.querySelector(".item-link-projects");
const faqLink = document.querySelector(".item-link-faq");
const orderLink = document.querySelector(".modal-order-btn-link");   
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
    const about = document.getElementById("about");
    about.scrollIntoView({ behavior: 'smooth' });
});


benefitsLink.addEventListener("click", () => {
    closeModal();
    const benefits = document.getElementById("benefits");
    benefits.scrollIntoView({ behavior: 'smooth' });
});

projectsLink.addEventListener("click", () => {
    closeModal();
     const projects = document.getElementById("projects");
    projects.scrollIntoView({ behavior: 'smooth' });
});

faqLink.addEventListener("click", () => {
    closeModal();
    const faq = document.getElementById("faq");
    faq.scrollIntoView({ behavior: 'smooth' });
});

orderLink.addEventListener("click", () => {
    closeModal();
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: 'smooth' });
    
})
