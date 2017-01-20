/**
 * Created by magicdrops on 1/11/2017.
 */
$(document).ready(function() {
        $("html").niceScroll();
    }
);

// $.stellar({
//     hideDistantElements: false,
//     responsive: true
// });

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


$.fn.moveIt = function(){
    var $window = $(window);
    var instances = [];

    $(this).each(function(){
        instances.push(new moveItItem($(this)));
    });

    window.onscroll = function(){
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst){
            inst.update(scrollTop);
        });
    }
}

var moveItItem = function(el){
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
    var pos = scrollTop / this.speed;
    this.el.css('transform', 'translateY(' + -pos + 'px)');
};

// Initialization
$(function(){
    $('[data-scroll-speed]').moveIt();
});