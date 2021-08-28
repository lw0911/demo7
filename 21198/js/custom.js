function getCurrentYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
    console.log(currentYear);
}

getCurrentYear();

var swiper = new Swiper('.portfolio-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    spaceBetween: -25,
    initialSlide: 2,
    coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
    }
});

var swiper = new Swiper('.client-container', {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
    }
});