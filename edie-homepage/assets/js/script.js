/*********************** show menu *********************************/

const navMenu = document.getElementById("nav-icon");
const navModal = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

if(navMenu) {
    navMenu.addEventListener("click", () => {
        navModal.classList.add("show__menu");
    });
}

if(navClose) {
    navClose.addEventListener("click", () => {
        navModal.classList.remove("show__menu");
    });
}


/*********************** hide menu after click on the link *********************************/

const links = document.querySelectorAll("#links");
links.forEach((item) => {
    item.addEventListener("click", () => {
        navModal.classList.remove("show__menu");
    })
});