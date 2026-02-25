const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row'
      },
      allowTouchMove: false
    },

    1120: {
      slidesPerView: 4,
      grid: {
        rows: 2,
        fill: 'row'
      },
      allowTouchMove: false
    }
  }
});

const button = document.querySelector('.show-all');
const swiperContainer = document.querySelector('.swiper');
const buttonText = button.querySelector('button');

button.addEventListener('click', () => {
  swiperContainer.classList.toggle('expanded');

  if (swiperContainer.classList.contains('expanded')) {
    buttonText.textContent = 'Скрыть';
  } else {
    buttonText.textContent = 'Показать всё';
  }
});