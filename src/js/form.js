var $ = require('jquery');
var publishComment = require('./publish-comment'); 
var moment = require('moment');

moment().format();

$('.new-comment-form').on('submit', function(){
	

	var inputs = $('.new-comment-form input');
	var text_area = $('.new-comment-form textarea');
	var published_date = $('.published-date');


	for (var i = 0; i < inputs.length; i++){
		var input = inputs[i];
		if (input.checkValidity() == false) {
			alert(input.validationMessage);
			input.focus();
			return false;
		}
	}

	for (var i = 0; i < text_area.length; i++){
		var text = text_area[i];
		if (text.checkValidity() == false) {
			alert(text.validationMessage);
			text.focus();
			return false;
		}
	}

	var comment = {
		first_name: $('#first-name').val(),
		last_name: $('#last-name').val(),
		comment_text: $('#comment-text').val(),
		date: new Date()

	};

	$.ajax({
		url: '/api/comments/',
		method: 'post',
		data: comment,
		beforeSend: function(){
			$(inputs).attr('disabled', true);
			$('.new-comment-form button').text('subiendo comentario...').attr('disabled', true);
		},
		success: function(response){
			// console.log('success', response);
			$('form')[0].reset();
			$('#first-name').focus();
			publishComment.load();
			console.log(response.id);
			console.log(response.length);
		},
		error: function(){
			console.error('error', arguments);
		},
		complete: function(){
			$(inputs).attr('disabled', false);
			$('.new-comment-form button').text('publica tu comentario').attr('disabled', false);
		}
	});

	return false;
});