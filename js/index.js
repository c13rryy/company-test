  const swiper = new Swiper('.slide-content', {
    slidesPerView: '3',
    spaceBetween:  40,  
    direction: 'horizontal',
    loop: true,
    speed: 1200,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
 
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
   },
     breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween:  15, 
      }, 
      600: {
        slidesPerView: 1.5,
        spaceBetween:  20, 
      },

      768: {
        slidesPerView: 2,
        spaceBetween:  25, 
      },  

     1100: {
        slidesPerView: 2.1,
        spaceBetween:  30, 
      },

     1300: {
        slidesPerView: 2.4,
        spaceBetween:  30, 
      },

    1400: {
        slidesPerView: 2.7,
      },
    1600: {
        slidesPerView: 3,
      },
     
   },
});

AOS.init();