const menu = document.querySelector(".header-menu-btn");
const toggle = document.querySelector(".modal-header")
const menuBurger = document.querySelector(".header-burger-btn");

menu.addEventListener("click", () => {
    console.log("check");
    if (toggle.classList.contains("is-open")) {
        toggle.classList.remove("is-open");
    }
    else {
        toggle.classList.add("is-open")
    }
});

menuBurger.addEventListener("click", () => {
    
})




  
  