var $ = require('jquery');

$('.icon-search').on('click', function(){
	$('.search').toggleClass('show-input');
	$('body').toggleClass('show-input-background');
	console.log('clicked');
});