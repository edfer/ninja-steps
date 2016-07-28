var $ = require('jquery');

$('a').on('click', function(){
	$('body').toggleClass('form-shown');
	$('#first-name').focus();
	
});