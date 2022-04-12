console.log("script.js is working");

// $(document).ready(function(){

//     // Menu Function
//     $('.nav-button').click(function(){ 
//         $('.nav-button, .side-nav, .nav-header, .nav-options').toggleClass('nav-open'); 
//         return false;
//     });

//     // Food Menu function
//     $('.nav-link.the-menu').click(function(){
//         $('.nav-button, .side-nav, .nav-header, .nav-options').removeClass('nav-open');
//         $('.menu-container').addClass('displayed');
//         return false;
//     });

//     // closing the menu-overlay
//     $('.close, .menu-container').click(function(){ $('.menu-container').removeClass('displayed'); return false;});
//     // preventing clicks on the menu closing it for now because there is nothing inside yet.
//     $('.tab.menu-tab').click(function(){ return false; }); 

//     // Window scroll function
//     $(window).scroll(function(){

//         if($(window).scrollTop() > 600) {
//             $('.nav-button, .search-button').addClass('black');
//         } else {
//             $('.nav-button, .search-button').removeClass('black');
//         }    
//     });

// });
window.onload = "myFunction()";
(function myFunction() {

    // Menu Function
    document.querySelector('.nav-button').click(function () {
        document.querySelector('.nav-button, .side-nav, .nav-header, .nav-options').classList.toggle('nav-open');
        return false;
    });

    // Food Menu function
    document.querySelector('.nav-link.the-menu').click(function () {
        document.querySelector('.nav-button, .side-nav, .nav-header, .nav-options').removeClass('nav-open');
        document.querySelector('.menu-container').classList.add('displayed');
        return false;
    });

    // closing the menu-overlay
    document.querySelector('.close, .menu-container').click(function () { document.querySelector('.menu-container').removeClass('displayed'); return false; });
    // preventing clicks on the menu closing it for now because there is nothing inside yet.
    document.querySelector('.tab.menu-tab').click(function () { return false; });

    // Window scroll function
    document.querySelector(window).scroll(function () {

        if (document.querySelector(window).scrollTop > 600) {
            document.querySelector('.nav-button, .search-button').classList.add('black');
        } else {
            document.querySelector('.nav-button, .search-button').removeClass('black');
        }
    });

});

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });