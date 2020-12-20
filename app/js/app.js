import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const hamburger = document.querySelector('.header__mobile-menu');
    const menu = document.querySelector('.main-menu');
    if (hamburger instanceof HTMLElement && menu instanceof HTMLElement) {
        hamburger.addEventListener('click', () => menu.classList.toggle('active'));
    }
})
