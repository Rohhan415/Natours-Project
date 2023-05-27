'use strict'








window.onbeforeunload = function() {
    window.scrollTo(0, window.pageYOffset || document.documentElement.scrollTop);
};

// Przewiń stronę do poprzedniej pozycji po załadowaniu
window.onload = function() {
    let scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
        localStorage.removeItem('scrollPosition');
    }
};

// Zapisz pozycję przewinięcia przy próbie odświeżenia strony
window.onbeforeunload = function() {
    localStorage.setItem('scrollPosition', window.pageYOffset || document.documentElement.scrollTop);
};