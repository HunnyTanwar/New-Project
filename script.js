const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");


mobileMenu.addEventListener("click", () => {
    console.log("Hamburger clicked"); 
    navList.classList.toggle("active");
});
