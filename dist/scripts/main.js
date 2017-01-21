/**
 * Created by magicdrops on 1/11/2017.
 */
$(document).ready(function() {
        $("html").niceScroll();
        // $(".strategyText").fadeOut(20);
    }
);

$.stellar({
    hideDistantElements: false,
    responsive: true,
    horizontalScrolling: false
});

// $(".heroBlotch").stick_in_parent({offset_top: -600});

$(".first").stick_in_parent()
    .on("sticky_kit:stick", function(e) {
        // $(".strategyText").fadeIn(2000);
        $(".oppositeDots").fadeOut(1000);
    })
    .on("sticky_kit:unstick", function(e) {
        // $(".strategyText").fadeOut(2000);
        $(".oppositeDots").fadeIn(1000);
    });

$(".second").stick_in_parent({offset_top: -50})
    .on("sticky_kit:stick", function(e) {
        $(".coolGlasses").attr('src','/dist/images/cool-glasses.gif');
    })
    .on("sticky_kit:unstick", function(e) {
        $(".coolGlasses").attr('src','/dist/images/first-frame.jpg');
    });

$window.scroll(function() {
    var target = $('.strategyText');
    var container = $('.first');
    var targetHeight = target.outerHeight() + 250;
    var scrollPercent = (window.pageYOffset) / targetHeight;
    if (scrollPercent >= 0) {
        target.css('opacity', Math.sin(scrollPercent * (Math.PI/2.0)));
    }
});
// $(window).scroll(function() {
//     var target = $('.heroBlotch');
//     var container = $('.first');
//     var targetHeight = target.outerHeight();
//     var targetOffBottom = target.offset().top;
//     console.log(targetOffBottom);
//     var scrollPercent = (window.pageYOffset) / targetHeight;
//     if (targetOffBottom <= 125) {
//         target.removeAttr("data-stellar-ratio");
//         target.css({"position": "fixed", "top": -targetHeight + 100 + "px"});
//     }
// });
