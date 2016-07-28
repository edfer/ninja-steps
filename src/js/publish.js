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

                    var html = '<article class="comment-article">';
                    html += '<div class="comment-author" >' + utils.escapeHTML(comment.first_name);
                    html += ' ' + utils.escapeHTML(comment.last_name) + '</div>';
                    html += '<div class="comment-author-text" >' + utils.escapeHTML(comment.comment_text) + '</div>';
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
