const button = document.querySelector('.hamburger-btn');

button.addEventListener('click', () => {
   
    document.querySelector('nav').classList.toggle('show-nav');
});