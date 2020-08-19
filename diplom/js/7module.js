$(function() {
  $(".menu__burger").on("click", function() {
    if ($(window).width() > 880) {
      if ($(".menu__list").hasClass("hide")) {
        $(".menu__list").removeClass("hide");
        $(".menu__list").css("display", "flex");
      } else {
        $(".menu__list").addClass("hide");
        $(".menu__list").css("display", "none");
      }
    }else{
        if ($(".menu5").hasClass("js-open")) {
        $(".menu5").removeClass("js-open");
        $(".menu5").css("display", "block");
    } else {
        $(".menu5").addClass("js-open");
        $(".menu5").css("display", "none");
      }
    }
  });

  $('.menu__link').on('click', function(e){
    e.preventDefault();
    var href = $(this).attr('href');

    var offset = $(href).offset().top;
    
    $('body , html').animate({
      scrollTop: offset,
    }, 1500)
  })

  $('.menu__li a').on('click', function(e){
    e.preventDefault();
    var href = $(this).attr('href');

    var offset = $(href).offset().top;
    
    $('body , html').animate({
      scrollTop: offset,
    }, 1500)
  })

  $('.footer__categories a').on('click', function(e){
    e.preventDefault();
    var href = $(this).attr('href');

    var offset = $(href).offset().top;
    
    $('body , html').animate({
      scrollTop: offset,
    }, 1500)
  })

});


var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 0
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    1235: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

const headerBtnElem = document.querySelector('.js-header__btn');
const mainBtnElem = document.querySelector('.js-main__btn');
const skillsBtnElem = document.querySelector('.js-skills__btn');
const orderBtnElem = document.querySelector('.js-works__btn');
const footerBtnElem = document.querySelector('.js-footer__btn');
const span = document.querySelector('.js-close');
const modal = document.querySelector('.js-overlay');
const popup = document.querySelector('.popup');
const headerIconPhone = document.querySelector('.header__contacts__img');



headerBtnElem.addEventListener('click', function(){
  modal.style.display = 'block';
  })

mainBtnElem.addEventListener('click', function(){
  modal.style.display = 'block'
})

skillsBtnElem.addEventListener('click', function(){
  modal.style.display = 'block'
})

orderBtnElem.addEventListener('click', function(){
  modal.style.display = 'block'
})

footerBtnElem.addEventListener('click', function(){
  modal.style.display = 'block'
})

document.addEventListener('mouseup' , function(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
})

span.addEventListener('click' , function(){
  modal.style.display = 'none';
})

headerIconPhone.addEventListener('click', function(){
  modal.style.display = 'block';
  })


  