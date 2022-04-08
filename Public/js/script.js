console.log("script.js is working");

$(document).ready(function(){
    
    // Menu Function
    $('.nav-button').click(function(){ 
        $('.nav-button, .side-nav, .nav-header, .nav-options').toggleClass('nav-open'); 
        return false;
    });
    
    // Food Menu function
    $('.nav-link.the-menu').click(function(){
        $('.nav-button, .side-nav, .nav-header, .nav-options').removeClass('nav-open');
        $('.menu-container').addClass('displayed');
        return false;
    });
    
    // closing the menu-overlay
    $('.close, .menu-container').click(function(){ $('.menu-container').removeClass('displayed'); return false;});
    // preventing clicks on the menu closing it for now because there is nothing inside yet.
    $('.tab.menu-tab').click(function(){ return false; }); 
    
    // Window scroll function
    $(window).scroll(function(){
        
        if($(window).scrollTop() > 600) {
            $('.nav-button, .search-button').addClass('black');
        } else {
            $('.nav-button, .search-button').removeClass('black');
        }    
    });
    
});