// Enables Tool Tips Globally 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// Enables On-Scroll Behavhiors 
$(function($) {
    $(window).scroll(function() {
		var navbrand = $(".navbar-brand");
        if ($(this).scrollTop() >= 180) {  
            navbrand.removeClass('fa-3x');
         } else
			navbrand.addClass('fa-3x');
 	});
});

// Enables Smooth Scrolling
$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname)	{
	var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
		event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500, function() {
		  var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          return false;
        } else {
          $target.attr('tabindex','-1');
          $target.focus(); 
        };
      });
    }
  }
});
