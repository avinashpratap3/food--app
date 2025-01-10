const swiper = new Swiper('.swiper', {
    
    loop: true,
    spaceBetweeen:35,
  
    
    pagination: {
      el: '.swiper-pagination',
    },
  
 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
    slidesPerView:3,
    // breakpoints:{
    //     0:{
    //         slidesperview: 1,
    //         spaceBetweeen:5
    //     },
    //     768:{
    //         slidesperview: 2,
    //         spaceBetweeen:15

    //     },
    //     1400:{
    //         slidesperview: 3,
    //         
    //     },
    // }
  });