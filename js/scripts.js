// Enables Tool Tips Globally 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// Enables On-Scroll Behavhiors 
$(function($) {
    $(window).scroll(function() {
	var navbrand = $(".navbar-brand");
    if ($(this).scrollTop() >= 180) {  
    	navbrand.removeClass('fa-2x');
	} else
		navbrand.addClass('fa-2x');
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
 