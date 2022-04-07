console.log("script.js is working");

const newLocal = $(document).ready(function () {
    $('.nav-button').click(function () {
        $('.nav-button, .side-nav, .nav-header, .nav-options').toggleClass('nav-open');
        return false;
    });
});

$('.nav-link.the-menu').click(function(){
    $('.nav-button, .side-nav, .nav-header, .nav-options').removeClass('nav-open');
    $('.menu-container').addClass('displayed');
    return false;
});

$('.close, .menu-container').click(function(){ $('.menu-container').removeClass('displayed'); return false;});
    // preventing clicks on the menu closing it for now because there is nothing inside yet.
    $('.tab.menu-tab').click(function(){ return false; }); 