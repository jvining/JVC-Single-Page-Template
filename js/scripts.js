// Enables Tool Tips Globally 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// Enables On-Scroll Behavhiors 
$(document).ready(function () {
	$(window).scroll(function () {
		$('.navbar-brand').toggleClass("fa-2x", ($(window).scrollTop() < 150));
	});
});

// Enables Scroll with Offsets
$('.scroll').on('click',function(e) {
	e.preventDefault();
	var offset = 0;
	var target = this.hash;
	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
	$('html, body').stop().animate({
		'scrollTop': $(target).offset().top - offset
	}, 500, 'swing', function() {
		// window.location.hash = target;
	});
});
 