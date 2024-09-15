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

    sr.reveal('.title', {
        easing: "ease-out",
        interval: 800,
        reset: false,
        distance: '5%',
        origin: 'top',
    });
    
    sr.reveal('.card1-section-title', {
        easing: "ease-out",
        interval: 800,
        reset: true,
        distance: '20%',
        origin: 'left',
    });
    
    sr.reveal('.card2-section-title', {
        easing: "ease-out",
        interval: 800,
        reset: true,
        distance: '20%',
        origin: 'right',
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