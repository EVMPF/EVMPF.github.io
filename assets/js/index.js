$(document).ready(function () {
    // fix menu when passed
    $('.masthead').visibility({
        once: false,
        onBottomPassed: function () {
            $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function () {
            $('.fixed.menu').transition('fade out');
        }
    });

    // create sidebar and attach to menu open
    $('.ui.sidebar').sidebar('attach events', '.toc.item');


    if (screen.width <= 700) {
        document.getElementById('scheduleArrow').removeAttribute("class");
        document.getElementById('scheduleArrow').setAttribute("class","big angle double down icon");
    }
});