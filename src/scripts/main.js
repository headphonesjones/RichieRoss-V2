/**
 * Created by magicdrops on 1/11/2017.
 */

$(document).ready(

    function() {

        $("html").niceScroll();

    }

);

$.stellar({
    hideDistantElements: false,
    responsive: true
});

new WOW().init();



// $(".blotchContainer").stick_in_parent({offset_top: -600})
//     .on("sticky_kit:stick", function(e) {
//         console.log("has stuck!", e.target);
//     })
//     .on("sticky_kit:unstick", function(e) {
//         console.log("has unstuck!", e.target);
//     });
//
// $(".thirdSection").stick_in_parent()
//     .on("sticky_kit:stick", function(e) {
//         $(".mainGif").attr('src','/dist/images/cool-glasses.gif');
//     })
//     .on("sticky_kit:unstick", function(e) {
//         $(".mainGif").attr('src','/dist/images/first-frame.jpg');
//     });
//

var distance = $('.third').offset().top,
    $window = $(window);

var mobileWidth = 550;

$(document).ready(function(){
    if( $(window).width() <= mobileWidth ) {
        // code
        $(".richieImage").removeAttr("data-stellar-ratio");
        $(".secondBlotch").removeAttr("data-stellar-ratio");
        $(".allShapesContainer").removeAttr("data-stellar-ratio");
        $(".testimonialsContainer").removeAttr("data-stellar-ratio");
        $(".mainGif").attr('src','/dist/images/cool-glasses.gif');
    }
    else{
        $(".artisinalStratContainer").stick_in_parent({offset_top:150});

        $(".blotchContainer").stick_in_parent({offset_top: -600})
            .on("sticky_kit:stick", function(e) {
                console.log("has stuck!", e.target);
            })
            .on("sticky_kit:unstick", function(e) {
                console.log("has unstuck!", e.target);
            });

        $(".thirdSection").stick_in_parent()
            .on("sticky_kit:stick", function(e) {
                $(".mainGif").attr('src','/dist/images/cool-glasses.gif');
            })
            .on("sticky_kit:unstick", function(e) {
                $(".mainGif").attr('src','/dist/images/first-frame.jpg');
            });

        $window.scroll(function() {
            if ( $window.scrollTop() >= distance - 1000 ) {
                $(".blotchContainer").fadeOut(500);
            }
            else{
                $(".blotchContainer").fadeIn(500);
            }
            if ( $window.scrollTop() >= distance ) {

                $(".mainGif").fadeOut(300);
            }
            else{
                $(".mainGif").fadeIn(300);
            }
            var target = $('.artisinalStratContainer');
            var container = $('.secondSection');
            var targetHeight = target.outerHeight() + 250;
            var scrollPercent = (window.pageYOffset) / targetHeight;
            if (scrollPercent >= 0) {
                target.css('opacity', Math.sin(scrollPercent * (Math.PI/2.0)));
            }
        });

    }
});



$(window).resize(function() {
    if( $(this).width() > mobileWidth ) {
        // code
        $(".richieImage").attr("data-stellar-ratio", "1.4");
        $(".secondBlotch").attr("data-stellar-ratio", ".75");
        $(".allShapesContainer").attr("data-stellar-ratio", "1");
        (".testimonialsContainer").attr("data-stellar-ratio", "2");

    }
    else{
        $(".richieImage").removeAttr("data-stellar-ratio");
        $(".secondBlotch").removeAttr("data-stellar-ratio");
        $(".allShapesContainer").removeAttr("data-stellar-ratio");
        $(".testimonialsContainer").removeAttr("data-stellar-ratio");
        $(".mainGif").attr('src','/dist/images/cool-glasses.gif');
    }
});
