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