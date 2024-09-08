document.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('in-view');
        }
    });
});