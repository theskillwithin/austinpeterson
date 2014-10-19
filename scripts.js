// @codekit-prepend "jquery-2.1.1.min.js"

function checkWidth() {
	var windowHeight = $(window).height();
		if (windowHeight < 600) {
			$( ".nameplate > a" ).slideUp();
		} else {
			$( ".nameplate > a" ).slideDown();
		}
}
checkWidth();
$(window).resize(checkWidth);

var images = ['green.jpg', 'lake.jpg', 'ocean.jpg'];
$('html').css({'background': 'url(assets/bg/' + images[Math.floor(Math.random() * images.length)] + ')' + 'no-repeat center center fixed ', 'background-size': 'cover'});