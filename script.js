import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Ensure buttons exist before adding event listeners
if (menuOpenButton && menuCloseButton) {
    menuOpenButton.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-menu");
    });

    menuCloseButton.addEventListener("click", () => menuOpenButton.click());

    navLinks.forEach(link => {
        link.addEventListener("click", () => menuOpenButton.click());
    });
}

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
    slidesPerView: 1,  // Set default slidesPerView

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation Arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive Breakpoints
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});
