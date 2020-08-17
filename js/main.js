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
        gallery:{
            enabled: true
        }
    });
});