const swiper = new Swiper('.slider', {
    loop: true,
    effect: 'fade',

    navigation: {
        nextEl: '.swiper-right',
        prevEl: '.swiper-left',
    },
});

setInterval(() => {
    swiper.slideNext();
}, 4000);