var $ = require('jquery');

$('.published-list-detail a').on('click', function(){
	$('body').toggleClass('form-shown');
	$('#first-name').focus();
	
});