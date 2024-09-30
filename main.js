document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');

    const block3 = document.getElementById('block3');
  
    window.addEventListener('scroll', () => {
        const { top, bottom } = block3.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight / 2 && bottom > windowHeight / 2) {
            modal.style.display = 'block';
        }
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});