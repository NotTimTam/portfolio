"use strict";

$("#resume-drop").css("height", "0px");
$("#resume-drop").css("padding-left", "0px");

// Menu collapse.
$(document).on("scroll", function () {
    if ($(document).width() < 991 && $(document).width() > 700) {
        if ($(document).scrollTop() > $("#resume").position().top-1) {
            $("#resume-drop").css("height", "192.2px");
            $("#resume-drop").css("padding-left", "15px");
        } else {
            $("#resume-drop").css("height", "0px");
            $("#resume-drop").css("padding-left", "0px");
        }
    } else {
        $("#resume-drop").css("height", "0px");
        $("#resume-drop").css("padding-left", "0px");
    }
});