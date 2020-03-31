$(document).ready(function () {
    $('.ui .dropdown').dropdown();

    document.oncontextmenu = new Function("return false");
    oncontextmenu = "return false";

    $(document).bind("contextmenu", function (e) {
        if ("" != "write") {
            return false;
        }
    });

    document.body.oncopy = function () {
        event.returnValue = false;
    }

    var scheduleRWDDiv = 
                        '<div id="scheduleDiv" class="ui vertical center aligned">'+
                            '<div id="schedule_1" role="img" class="banner_schedule_rwdimg_1 banner_rule" aria-label="banner schedule img"></div></div>'+
                        '<div id="scheduleDiv" class="ui vertical center aligned">'+
                        '<div id="schedule_1" role="img" class="banner_schedule_rwdimg_2 banner_rule" aria-label="banner schedule img"></div></div>';
    if (screen.width <= 700) {
        // document.getElementById('scheduleArrow').removeAttribute("class");
        // document.getElementById('scheduleArrow').setAttribute("class", "big angle double down icon");
        document.getElementById('menuIcon1').removeAttribute("class");
        document.getElementById('menuIcon1').setAttribute('class', "eight wide column");
        document.getElementById('menuIcon2').removeAttribute("class");
        document.getElementById('menuIcon2').setAttribute('class', "eight wide column");
        document.getElementById('menuIcon3').removeAttribute("class");
        document.getElementById('menuIcon3').setAttribute('class', "eight wide column");
        document.getElementById('menuIcon4').removeAttribute("class");
        document.getElementById('menuIcon4').setAttribute('class', "eight wide column");
        document.getElementById('schedule').removeAttribute("class");
        document.getElementById('scheduleRWDDiv').innerHTML(scheduleRWDDiv);
    }
});