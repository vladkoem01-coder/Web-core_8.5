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


const button = document.getElementById("buttonShowMore");

button.addEventListener("click", () => {
  alert("vse rabotaet");
});