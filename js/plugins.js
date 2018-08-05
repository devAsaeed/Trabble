/*global $, console, alert*/

$(function () {
    
    'use strict';
    
    $('.carousel').carousel()
    
    // navbar background change when scrolling 
    
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.navbar-default').height()) {
            $('.navbar-default').css('background', 'rgba(0,0,0, .7)');
        } else {
            $('.navbar-default').css('background', 'transparent');
        }
    });
    
    //when click in input type='button' add checked attribute 
    $('input[type="button"]').click(function () {
        $(this)
            .attr("checked", "checked")
            .addClass('main-background')
            .siblings()
            .not('input[type="submit"]')
            .removeClass('main-background');
    });
    
    
    // count down days to booking offer 
    
    var countDown = new Date('Jan 2, 2019 17:33:50').getTime();
    var x = setInterval(function () {
        var newDate = new Date().getTime();
        var distance = countDown - newDate;
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var secounds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('secounds').innerHTML = secounds;
        
        if (distance > 0) {
            clearInterval(x);
        }
    }, 1000);
    
    // change image avitar by adding class 
    $('.avatar-img').click(function () {
        $(this).addClass('avitar-img-active').siblings().removeClass('avitar-img-active');
    });
    
    // wow js plugins
    new WOW().init();
});