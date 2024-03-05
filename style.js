const button = document.querySelector('.navigation__button--js');

button.addEventListener('click', () => {
    const nav = document.querySelector(".navigation--js");
    nav.classList.toggle('navigation--open');

    const navElements = document.querySelectorAll(".bar__zero--js, .bar__first--js, .bar__second--js");
    navElements.forEach(element => {
        element.classList.toggle('line__zero--js');
    });
});
