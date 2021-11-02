(function ($) {
"use strict";


// meanmenu
$('#mobile-menu').meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: '.mobile-menu',
    
});

// data-background
$("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") +")")
});

// Stikey Js  
    (function () {
      var nav = $('.menu-nav-sec');
      var scrolled = false;
      $(window).on('scroll', function () {
        if (120 < $(window).scrollTop() && !scrolled) {
          nav.addClass('sticky_menu animated fadeInDown').animate({ 'margin-top': '0px' });
          scrolled = true;
        }
        if (90 > $(window).scrollTop() && scrolled) {
          nav.removeClass('sticky_menu animated fadeInDown').css('margin-top', '0px');
          scrolled = false
        }
      });
    }());

// // brand-active
 $('.slider-active').owlCarousel({
     loop:true,
     nav:true,
     dots:true,
     autoplay:true,
      navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
     responsive:{
         0:{
             items:1,
             nav:false
         },
         767:{
             items:5,
             nav:false
         },
         1000:{
             items:8
         }
     }
 })

  $('.owl-theme').owlCarousel({
     loop:true,
     nav:true,
     dots:true,
     autoplay:true,
      navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
     responsive:{
         0:{
             items:1,
             nav:false
         },
         767:{
             items:1,
             nav:false
         },
         1000:{
             items:1
         }
     }
 });
 

 // // mini-active
 $('.mini-slides').owlCarousel({
     loop:true,
     nav:true,
     dots:true,
     autoplay:true,
      navText:['<i class=" fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
     responsive:{
         0:{
             items:1,
             nav:false
         },
         767:{
             items:1,
             nav:false
         },
         1000:{
             items:1
         }
     }
 })
 // //  ui--carousel
 $('.testimonial-active').owlCarousel({
     loop:true,
     nav:true,
     dots:true,
     autoplay:true,
      navText:['<i class="fa fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
     responsive:{
         0:{
             items:1,
             nav:false
         },
         767:{
             items:1,
             nav:false
         },
         1000:{
             items:1
         }
     }
 })

 // // brand-active
 $('.brand-active').owlCarousel({
     loop:true,
     nav:false,
     dots:false,
     autoplay:true,
      navText:['<i class=" fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
     responsive:{
         0:{
             items:1,
             nav:false
         },
         767:{
             items:3,
             nav:false
         },
         1000:{
             items:6
         }
     }
 })

 // //  blog carousel
 $('.blog-active').owlCarousel({
     loop:true,
     nav:true,
     dots:true,
     autoplay:true,
      navText:['<i class="fa fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
     responsive:{
         0:{
             items:1,
             nav:false
         },
         767:{
             items:1,
             nav:false
         },
         1000:{
             items:3
         }
     }
 })
// //  portfolio carousel
  $('.work-slider').owlCarousel({
      loop:true,
      nav:true,
      dots:true,
      autoplay:true,
      navText:['<i class="fa fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
      responsive:{
          0:{
              items:1,
              nav:false
          },
          767:{
              items:1,
              nav:false
          },
          1000:{
              items:1
          }
      }
  })


 /*START WOW ANIMATION JS*/
       new WOW().init(); 
    /*END WOW ANIMATION JS*/

})(jQuery);	