/**
 * Created by magicdrops on 1/11/2017.
 */
$.stellar({
    hideDistantElements: false,
    responsive: true
});

new WOW().init();

$(".artisinalStratContainer").stick_in_parent();

// if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
// window.onmousewheel = document.onmousewheel = wheel;
//
// function wheel(event) {
//     var delta = 0;
//     if (event.wheelDelta) delta = event.wheelDelta / 120;
//     else if (event.detail) delta = -event.detail / 3;
//
//     handle(delta);
//     if (event.preventDefault) event.preventDefault();
//     event.returnValue = false;
// }
//
// function handle(delta) {
//     var time = 900;
//     var distance = 300;
//
//     $('html, body').stop().animate({
//         scrollTop: $(window).scrollTop() - (distance * delta)
//     }, time );
// }

var distance = $('.third').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        $(".heroDots").hide();
    }
    else{
        $(".heroDots").show();
    }
    var target = $('.artisinalStratContainer');
    var container = $('.secondSection');
    var targetHeight = target.outerHeight() + 100;
    var scrollPercent = (window.pageYOffset) / targetHeight;
    if (scrollPercent >= 0) {
        target.css('opacity', Math.sin(scrollPercent * (Math.PI/2.0)));
    }
});

