var $ = require('jquery');
var utils = require('./utils');
var moment = require('moment');

moment().format();

module.exports = {
    load: function() {

        $.ajax({
            url: '/api/comments/?_order=-id',
            success: function(response) {

                $('.comment-section').html('');


                for (var i in response) {
                    var comment = response[i];

                    var first_name = comment.first_name || '';
                    var last_name = comment.last_name || '';
                    var comment_text = comment.comment_text || '';

                    //setting the date
                    moment.locale('es');
                    var date_diff = moment(new Date(comment.date)).fromNow();
                    // console.log(date_diff);

                    var html = '<article class="comment-article">';
                    html += '<div class="comment-author" >' + utils.escapeHTML(first_name);
                    html += ' ' + utils.escapeHTML(last_name) + '</div>';
                    html += '<div class="comment-author-text" >' + utils.escapeHTML(comment_text) + '</div>';
                    html += '<div class="published-date"><em>' + 'Posted: ' + date_diff + '</em></div>';
                    html += '</article>'
                    $('.comment-section').append(html);

                    

                 // console.log($('.published-item-detail').data('id'));
                }

                // var articleId = $(this).find('.published-item').data('id');
                // console.log(higherId);
                // console.log(response.slice(0)[0]);
                var count = '<div>' + (response.length) + '</div>';
                // $('.comments-link').prepend(count);  
                var num = $('.published-item-detail').data('id');              

                
                $('.published-list').find('[data-id="' + ($('.published-item').data('id')) + '"]').find('.comments-link').prepend(count);
                    
                
                
                // $('.published-list').find('[data-id="' + key + '"]').find('footer').addClass('bookmarked-in-css');


            },
            error: function(response) {
                console.error('error', response);
            }
        });
    }
}
