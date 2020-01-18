$(function () {

    $('#menu__burger').on('click', function () {
        // if ($('.menu__list').hasClass('hide')) {
        //     $('.menu__list').removeClass('hide')
        //     $('.menu__list').css('display', 'flex');
        // } else {
        //     $('.menu__list').addClass('hide')
        //     $('.menu__list').css('display', 'none')

        // }

        if ($('.menu5').hasClass('qa')) {
            $('.menu5').removeClass('qa')
            $('.menu5').css('display', 'block');
        } else {
            $('.menu5').addClass('qa')
            $('.menu5').css('display', 'none')

        }    
    })


    $('.header-section__button').magnificPopup();
})




var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },

        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        1235: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

    }

});

