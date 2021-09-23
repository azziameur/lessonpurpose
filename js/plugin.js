/*global $, alert , console*/

$(function () {
    
    
    'use strict';
    
    //Adjust header hight 
    
    var myHeader = $('.header'),
    
        mySlider = $('.bxslider');
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        
        mySlider.each(function () {
        
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);                
        });
        
        
    });
    
    // make links active
    
    $('.menu li a').click(function () {
     
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    // adjust bxslider list item 
    
    mySlider.each(function () {
        
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) /2);                
    });
    
    // make slider works
    
    mySlider.bxSlider({
        
        pager: false
        
    });    
    
    
    // Smooth Scroll 
    $('.menu li a').click(function () {
        
        $('html,body').animate({
        
            scrollTop: $('#' + $(this).data('value')).offset().top 
        }, 1000);    
   
    });
        
    // My Slider Code
    
    (function autoSlider() {
        
        $('.myslider .active').each(function () {
            
            if(!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {
              $(this).delay(3000).fadeOut(1000, function () {
                  
                    $(this).removeClass('active');
                    $('.myslider div').eq(0).addClass('active').fadeIn(); 
                    autoSlider();
              });      
            }
        });
        
    }());
    
    // trigger mixit up 
    
    $("#portfo").mixItUp();
    
    // MixIt botton
    
    $('.shuffle li ').click(function () {
     
    $(this).addClass('selected').siblings().removeClass('selected');
    });
    
    // nice scroll
    
	$("html").niceScroll({
        
        cursorcolor:'#1abc9c',
        cursorwidth:'8px',
        cursorborder:'none',
        cursorborderraduis:0
        
    });

    
});
        
        
    
    
    
    