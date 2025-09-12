// ScrollReveal Configuraões

document.addEventListener('DOMContentLoaded', () => { 
    ScrollReveal().reveal('#home', {
        delay: 200,
        duration: 700,
        distance: '30px',
        origin: 'bottom',
        easing: 'ease-out'
    });

    ScrollReveal().reveal('#about', {
        delay: 200,
        duration: 700,
        distance: '30px',
        origin: 'left',
        easing: 'ease-out'
    });

    ScrollReveal().reveal('#skills', {
        delay: 200,
        interval: 200,
        duration: 650,
        scale: 0.95,
        easing: 'ease-out'
    });

    ScrollReveal().reveal('#work', {
        delay: 200,
        interval: 200,
        duration: 650,
        origin: 'bottom',
        distance: '25px',
        easing: 'ease-out'
    });

    ScrollReveal().reveal('#contact', {
        delay: 200,
        duration: 700,
        origin: 'top',
        distance: '25px',
        easing: 'ease-out'
    });
});
