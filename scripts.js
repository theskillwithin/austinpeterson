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
		$('.window').css("margin-top", "180px");
		$('#menu-btn').addClass('.open');
}
});

	// hamburger > checkwidth
	function checkWidth() {
		var windowWidth = $(window).width();
			if (windowWidth > 700) {
				//scroll to top
				//$('#stt').hide();
				//end scroll to top
				$('.window').css("margin-top", "5px");
				$('#site-menu').slideDown();
				$('#menu-btn').addClass('.open');
			} else {
				if( $('#menu-btn').hasClass('.open') ) {
					$('.window').css("margin-top", "175px");
					//$('#stt').show();
				}
			}
	}
	checkWidth();
	$(window).resize(checkWidth);
	
// lets check to see if there is a scroll bar
// because if there isnt one we can hide our 'scroll to top' button
function checkScroll() {
	if ($(document).height() > $(window).height()) {
	    $('#stt').show();
	} else {
		$('#stt').hide();
	}
}
checkScroll();
$(window).resize(checkScroll);