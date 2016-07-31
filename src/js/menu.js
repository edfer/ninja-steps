var $ = require('jquery');

$('.icon-menu').on('click', function(){
	$('.web-header ul').toggleClass('menu-open');
	$('body').toggleClass('show-menu-background');

	$('body').removeClass('show-input-background');
	$('.search').removeClass('show-input');
	console.log('clicked');
});

