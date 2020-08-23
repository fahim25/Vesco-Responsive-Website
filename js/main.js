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
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});

/*
-----------------------------
|   | Testimonial
-----------------------------
*/
$(function () {
    $("#customer-testimonial").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});
/*
-----------------------------
|   | Counter
-----------------------------
*/
$(function () {
    $('.counter').counterUp({
        delay: 30,
        time: 2000
    });
});