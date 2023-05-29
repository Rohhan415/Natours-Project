'use strict'
const allLinks = document.querySelectorAll('a:link');
const element = document.querySelector(".popup__text");
const element2 = document.querySelector(".popup__text");

function changeSmallerResolution() {

    element.textContent = "For more information feel free to contact!";
    element.classList.add('popup__text--new-description');
}

function changeBiggerResolution() {

    element2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
        "                incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada pellentesque elit eget gravida\n" +
        "                cum sociis. Mauris pharetra et ultrices neque ornare aenean. At augue eget arcu dictum varius duis.\n" +
        "                Integer feugiat scelerisque varius morbi enim. Et netus et malesuada fames ac turpis egestas integer.\n" +
        "                Congue quisque egestas diam in arcu cursus. Quam id leo in vitae turpis massa sed elementum. Aliquam\n" +
        "                ultrices sagittis orci a scelerisque purus semper eget. Duis ut diam quam nulla. Eu augue ut lectus arcu\n" +
        "                bibendum. Habitant morbi tristique senectus et netus et. Erat imperdiet sed euismod nisi porta.\n" +
        "                Convallis tellus id interdum velit. Tortor at auctor urna nunc. Velit euismod in pellentesque massa\n" +
        "                placerat duis. Gravida arcu ac tortor dignissim convallis. Libero enim sed faucibus turpis in eu mi\n" +
        "                bibendum. Felis imperdiet proin fermentum leo vel orci.\n" +
        "\n" +
        "                Gravida rutrum quisque non tellus orci ac. Neque volutpat ac tincidunt vitae semper quis lectus nulla.\n" +
        "                Mattis enim ut tellus elementum sagittis vitae et leo. Id aliquet lectus proin nibh nisl condimentum id\n" +
        "                venenatis a. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Velit laoreet id donec\n" +
        "                ultrices. Nulla pellentesque dignissim enim sit. Sem nulla pharetra diam sit amet nisl suscipit\n" +
        "                adipiscing bibendum. Egestas diam in arcu cursus euismod quis viverra. Egestas erat imperdiet sed\n" +
        "                euismod nisi porta lorem mollis aliquam.";
}

function checkingResolution() {
    element.classList.remove("popup__text--new-description");
    if (window.innerWidth <= 420) {
        changeSmallerResolution();
    } else {
        changeBiggerResolution();
    }
}
window.addEventListener("resize", checkingResolution);



allLinks.forEach((link) =>
    link.addEventListener('click', function (e) {
        const href = link.getAttribute('href');
        // Scroll back to top
        if (href === '#') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
        else if (href !== '#' && href.startsWith('#')) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: 'smooth' });
        }
    })
);

document.getElementById('btn-header').addEventListener('click', function(ev) {
    ev.preventDefault();
    const id = ev.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
});