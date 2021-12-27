$(".carousel").owlCarousel({
  center: true,
  autoWidth:true,
//   items: 4,
  loop: true,
  margin: 90,
  autoplay: true,
  slideTransition: "linear",
  autoplayTimeout: 6000,
  autoplaySpeed: 6000,
  rtl:true,
  dots:false,
  nav: false, 

  responsive: {
    0:{
      items: 1,
      center: true,
      autoWidth:false,
      autoplayTimeout: 2000,
      autoplaySpeed: false,
      margin: 10,
      autoplayHoverPause: true, 

    },

    
    600:{
      items: 2,
      autoWidth:false,
      autoplayTimeout: 2000,
      autoplaySpeed: false,
      margin: 0,
      autoplayHoverPause: true, 

    // 800:{
    //   items: 2,
    //   autoWidth:false,
    //   autoplayTimeout: 2000,
    //   autoplaySpeed: false,
    //   margin: 0,
    //   autoplayHoverPause: true, 


    },
    800:{
      center: true,
      autoWidth:true,
      items: 3,
      loop: true,
      margin: 90,
      autoplay: true,
      slideTransition: "linear",
      autoplayTimeout: 6000,
      autoplaySpeed: 6000,
      rtl:true,
      dots:false,
      nav: false,


    },




  }

});




// OUR SERVICES 

$(".srv-carousel").owlCarousel({

  margin: 80, 
  loop: true,
  autoplay: true, 
  autoplayTimeout: 2500,
  autoplayHoverPause: true, 
  rtl:true,
  
  nav: true,
navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],

  responsive: {
    0:{
      items: 1,
    },

    
    600:{
      items: 2,
    },

    1000:{
      items: 3,

    },


  }
// center: true,
// items: 3,
// loop: true,
// margin: 90,
// rtl:true,


//   autoplayHoverPause: true,
//   responsive: {
//     0: {
//       items: 1
//     },
//     600: {
//       items: 3
//     },
//     1000: {
//       items: 3
//     }
//   }
});
