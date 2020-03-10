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
        document.getElementById('scheduleArrow').setAttribute("class", "big angle double down icon");
        document.getElementById('menuIcon1').removeAttribute("class");
        document.getElementById('menuIcon1').setAttribute('class', "eight wide column");
        document.getElementById('menuIcon2').removeAttribute("class");
        document.getElementById('menuIcon2').setAttribute('class', "eight wide column");
        document.getElementById('menuIcon3').removeAttribute("class");
        document.getElementById('menuIcon3').setAttribute('class', "eight wide column");
        document.getElementById('menuIcon4').removeAttribute("class");
        document.getElementById('menuIcon4').setAttribute('class', "eight wide column");
        // document.getElementById('footerLogoDiv').removeAttribute("class");
        // document.getElementById('footerInfoDiv').removeAttribute('class');
    }
});