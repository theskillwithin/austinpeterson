// @codekit-prepend "jquery-2.1.1.min.js"


// verticle responce
function checkHeight() {
	var windowHeight = $(window).height();
		if (windowHeight < 600) {
			$( ".nameplate > a" ).slideUp();
		} else {
			$( ".nameplate > a" ).slideDown();
		}
}
checkHeight();
$(window).resize(checkHeight);

// random background
var images = ['green.jpg', 'ocean.jpg'];
$('html').css({'background': 'url(assets/bg/' + images[Math.floor(Math.random() * images.length)] + ')' + 'no-repeat center center fixed ', 'background-size': 'cover'});

// hamburger
$('#menu-btn').addClass('.open');


$('#menu-btn').click(function(){

	
	if ( $(this).hasClass('.open') ) {
		$('#site-menu').slideUp();
		$('.window').css("margin-top", "32px");
		$('#menu-btn').removeClass('.open');
		
	} else {
		$('#site-menu').slideDown();
		$('.window').css("margin-top", "170px");
		$('#menu-btn').addClass('.open');
}
});

	// hamburger > checkwidth
	function checkWidth() {
		var windowWidth = $(window).width();
			if (windowWidth >= 687) {
				$('.window').css("margin-top", "5px");
				$('#site-menu').slideDown();
				$('#menu-btn').addClass('.open');
			} else {
				$('.window').css("margin-top", "170px");
			}
	}
	checkWidth();
	$(window).resize(checkWidth);