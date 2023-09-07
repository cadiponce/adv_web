const animateButton = document.getElementById('animateButton');
const overlay = document.querySelector('.overlay');

animateButton.addEventListener('click', () => {
    overlay.style.display = 'block';

    overlay.addEventListener('animationend', () => {
        overlay.style.display = 'none';
    });

    overlay.classList.add('fadeIn');
});


overlay.addEventListener('blur', () => {
    overlay.style.display = 'none';
});
