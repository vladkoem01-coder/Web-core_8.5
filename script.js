let swiper;

function initSwiper() {
  swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        allowTouchMove: false
      },
      1120: {
        slidesPerView: 4,
        allowTouchMove: false
      }
    }
  });
}

initSwiper();


const wrapper = document.querySelector('.swiper-wrapper');
const btn = document.getElementById('buttonShowMore');

let isOpen = false;

function initShowMore() {

  // Только для планшета и выше
  if (window.innerWidth >= 768) {

    const slides = document.querySelectorAll('.swiper-slide');

    if (!slides.length) return;

    const itemHeight = slides[0].offsetHeight;
    const gap = 16; // должен совпадать с CSS gap
    const rowsVisible = 2; // показываем 2 строки

    const collapsedHeight = (itemHeight * rowsVisible) + gap;

    wrapper.style.height = collapsedHeight + 'px';

    btn.addEventListener('click', () => {

      if (!isOpen) {
        wrapper.style.height = wrapper.scrollHeight + 'px';
        btn.textContent = 'Скрыть';
      } else {
        wrapper.style.height = collapsedHeight + 'px';
        btn.textContent = 'Показать все';
      }

      isOpen = !isOpen;

    });

  }
}

window.addEventListener('load', initShowMore);