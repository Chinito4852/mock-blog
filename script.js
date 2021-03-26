$(document).ready(function() {
    

    $(".overlay-block").mouseenter(function() {
        $(this).children(".editor-overlay").animate({opacity: "0.8"});
        $(this).children(".editor-overlay-content").animate({opacity: "1"});
    });
    $(".overlay-block").mouseleave(function() {
        $(this).children(".editor-overlay").animate({opacity: "0"});
        $(this).children(".editor-overlay-content").animate({opacity: "0"});
    });
});