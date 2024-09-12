window.addEventListener('DOMContentLoaded', (event) => {
    window.sr = ScrollReveal({ reset: true });

    sr.reveal('.tile-content-home', {
        easing: "ease-out",
        interval: 500,
        reset: true,
        distance: '20%',
        origin: 'left',
    });


    sr.reveal('.img-1', {
        easing: "ease-out",
        interval: 500,
        reset: true,
        distance: '20%',
        origin: 'top',
    });


    sr.reveal('.img-2', {
        easing: "ease-out",
        interval: 500,
        reset: true,
        distance: '20%',
        origin: 'top',
    });

    sr.reveal('.img-3', {
        easing: "ease-out",
        interval: 500,
        reset: true,
        distance: '20%',
        origin: 'top',
    });

    var rellax = new Rellax('.rellax', {
        center: true,
        round: true,
    });

    function atualizarRellax() {
        rellax.refresh();
    }

    window.addEventListener('resize', atualizarRellax);
});