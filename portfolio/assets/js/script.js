const navToggle = document.getElementById("nav--toggle"),
      navModal = document.getElementById("nav"),
      navIcon = document.getElementById("nav-icon");


navToggle.addEventListener('click', () => {
    navModal.classList.toggle('hide');
    navToggle.classList.toggle("z-index");
    if (navIcon.innerHTML == "menu") {
        navIcon.innerHTML = "close";
        navIcon.style.color = "white";
    } else {
        navIcon.innerHTML = "menu";
        navIcon.style.color = "#000";
    }
    
})