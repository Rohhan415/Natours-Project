'use strict'
const allLinks = document.querySelectorAll('a:link');


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