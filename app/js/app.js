import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
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
})
