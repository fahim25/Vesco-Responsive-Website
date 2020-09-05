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

/*
-----------------------------
|   | Clients
-----------------------------
*/

$(function () {
	$("#clients-list").owlCarousel({
		items: 4,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
	});
});
/*
-----------------------------
|   | Navigation
-----------------------------
*/

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() < 50) {
			//$('nav').removeClass('vesco-top-nav');
			$('#back-to-top').fadeOut();
		} else {
			//$('nav').addClass('vesco-top-nav');

			$('#back-to-top').fadeIn();
		}
	});
});

//Smooth Scroll
$(function () {
	$('a.smooth-scroll').click(function (event) {
		event.preventDefault();

		var section = $(this).attr('href');

		$('html , body').animate({
			scrollTop: $(section).offset().top - 64
		}, 1000, "easeInOutExpo");
	});
});