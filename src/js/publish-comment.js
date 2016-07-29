var $ = require('jquery');
var utils = require('./utils');

module.exports = {
    load: function() {

        $.ajax({
            url: '/api/comments/?_order=id',
            success: function(response) {

            	$('.comment-section').html('');

                for (var i in response) {
                    var comment = response[i];

                    var first_name = comment.first_name || '';
                    var last_name = comment.last_name || '';
                    var comment_text = comment.comment_text || '';

                    var html = '<article class="comment-article">';
                    html += '<div class="comment-author" >' + utils.escapeHTML(first_name);
                    html += ' ' + utils.escapeHTML(last_name) + '</div>';
                    html += '<div class="comment-author-text" >' + utils.escapeHTML(comment_text) + '</div>';
                    html += '<div class="published-date">' + 'date' + '</div>';
                    html += '</article>'
                    $('.comment-section').append(html);
                }
            },
            error: function(response) {
                console.error('error', response);
            }
        });
    }
}
