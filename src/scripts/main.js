/**
 * Created by magicdrops on 1/11/2017.
 */

$(document).ready(

    function() {

        $("html").niceScroll();

    }

);



var mobileWidth = 768;

$(document).ready(function(){
    if( $(window).width() <= mobileWidth ) {
        // code
        $(".richieImage").removeAttr("data-stellar-ratio");
        $(".secondBlotch").removeAttr("data-stellar-ratio");
        $(".heroDots").removeAttr("data-stellar-ratio");
        $(".heroBlotch").removeAttr("data-stellar-ratio");
        $(".third .container").removeAttr("data-stellar-ratio");
        $(".fourth .container").removeAttr("data-stellar-ratio");
        $(".mainGif").attr('src','/dist/images/cool-glasses.gif');
    }
    else{
        $.stellar({
            hideDistantElements: false,
            responsive: true
        });

        new WOW().init();

        $(".artisinalStratContainer").stick_in_parent({offset_top:200})
            .on("sticky_kit:unstick", function(e) {
            // $(".heroBlotch").removeClass('blotchStick');
        });

        $(".thirdSection").stick_in_parent()
            .on("sticky_kit:stick", function(e) {
                $(".mainGif").attr('src','/dist/images/cool-glasses.gif');
            })
            .on("sticky_kit:unstick", function(e) {
                $(".mainGif").attr('src','/dist/images/first-frame.jpg');
            });
    }
});



$(window).resize(function() {
    if( $(this).width() > mobileWidth ) {
        // code
        $(".richieImage").attr("data-stellar-ratio", "1.4");
        $(".secondBlotch").attr("data-stellar-ratio", ".75");
        $(".heroDots").attr("data-stellar-ratio", "-1");
        $(".heroBlotch").attr("data-stellar-ratio", "2");
        $(".third .container").attr("data-stellar-ratio", "1.2");
        $(".fourth .container").attr("data-stellar-ratio", "1");

    }
    else{
        $(".richieImage").removeAttr("data-stellar-ratio");
        $(".secondBlotch").removeAttr("data-stellar-ratio");
        $(".heroDots").removeAttr("data-stellar-ratio");
        $(".heroBlotch").removeAttr("data-stellar-ratio");
        $(".third .container").removeAttr("data-stellar-ratio");
        $(".fourth .container").removeAttr("data-stellar-ratio");
        $(".mainGif").attr('src','/dist/images/cool-glasses.gif');
    }
});


var scroll = function () {
    var distance = $('.third').offset().top,
        $window = $(window);

    if ( $(window).scrollTop() >= distance + 650 ) {
        $(".mainGif").fadeOut(300);
    }
    else{
        $(".mainGif").fadeIn(300);
    }
    if ( $(window).scrollTop() >= distance ) {
        $(".heroDots").hide();
    }
    else{
        $(".heroDots").show();
    }
    var target = $('.artisinalStratContainer');
    var container = $('.secondSection');
    var targetHeight = target.outerHeight() + 90;
    var scrollPercent = (window.pageYOffset) / targetHeight;

    var blotch = $('.heroBlotch');
    var blotchOffset = blotch.offset().top;

    if (scrollPercent >= 0) {
        target.css('opacity', Math.sin(scrollPercent * (Math.PI/2.0)));
    }

    // if (blotchOffset <= 660){
    //     blotch.addClass('blotchStick');
    // }
};
var waiting = false;
$(window).scroll(function () {
    if (waiting) {
        return;
    }
    waiting = true;

    scroll();

    setTimeout(function () {
        waiting = false;
    }, 200);
});