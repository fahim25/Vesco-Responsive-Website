/*
-----------------------------
|   | Services Section
-----------------------------
*/
$(function () {
    new WOW().init();
});

/*
-----------------------------
|   | Pop Up
-----------------------------
*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*
-----------------------------
|   | Team Section
-----------------------------
*/

$(function () {
    $("#team-members").owlCarousel({
        item: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});