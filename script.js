const container = document.querySelector('.container');
const nextBtn = document.querySelector('.container-box-button-next');

nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: 250, behavior: 'smooth' });
});