$(window).scroll(function() {

	var windowScroll = $(this).scrollTop();
	
	$('.trike > div').css({   // use { to make it an object, now you can use : instead of , aand , delineats
	'top': '-' + windowScroll + 'px',
	'right': '-' + windowScroll + 'px',
	'left': '-' + windowScroll + 'px'
	});

});