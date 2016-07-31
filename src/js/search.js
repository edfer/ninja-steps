var $ = require('jquery');

$('.icon-search').on('click', function(){
	$('.search').toggleClass('show-input');
	$('body').toggleClass('show-input-background');

	$('.web-header ul').removeClass('menu-open');
	$('body').removeClass('show-menu-background');
	console.log('clicked');
});