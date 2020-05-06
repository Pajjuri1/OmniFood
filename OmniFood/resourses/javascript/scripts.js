$(document).ready(function()
{
$('.js--section-features').waypoint(function(direction){
    if(direction=='down'){
        $('nav').addClass('sticky');
    } else{
        $('nav').removeClass('sticky');
    }
},{
    offset:'25%'
});


/*Scroll on buttons*/

$('.js--scroll-to-plans').click(function(){
    $('html, body').animate({scrollTop:$('.js--section-plans').offset().top},1000);
});


$('.js--scroll-to-start').click(function(){
    $('html, body').animate({scrollTop:$('.js--section-features').offset().top},1000);
});

/*Navigation Scroll*/

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

  });

  /*Animation on Scroll*/
  $('.js--wp-1').waypoint(function(direction){
      $('.js--wp-1').addClass('animated fadeIn');
  },{
      offset: '50%'
  })

  $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeInUp');
},{
    offset: '50%'
})

$('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated fadeIn');
},{
    offset: '50%'
})

$('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated fadeIn');
},{
    offset: '50%'
})

$('.js--mobile-nav').click(function(){
    const nav = $('.js--main-nav');
    const icon = $('.js--mobile-nav i')
    if(icon.hasClass('ion-md-reorder')){
        icon.addClass('ion-md-close');
        icon.removeClass('ion-md-reorder');
    }else{
        icon.addClass('ion-md-reorder');
        icon.removeClass('ion-md-close');
    }
    nav.slideToggle(200);
});


});







/*

$(document).ready(function()
{
$('.js--section-features').waypoint(function(direction){
    if(direction=='down'){
        $('nav').addClass('sticky');
    } else{
        $('nav').removeClass('sticky');
    }
})
});*/
