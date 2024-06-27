<<<<<<< HEAD
$(document).ready(function() {
    // Añadir efectos de desplazamiento suave
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
=======
$(document).ready(function() {
    // Añadir efectos de desplazamiento suave
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
>>>>>>> 86dde0c8a69128f81c6821935231cd99efc1ccda
});