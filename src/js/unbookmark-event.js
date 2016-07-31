var $ = require('jquery');

module.exports = {

    unsetBookmark: function() {

        var toBookmark = $('.bookmark-button-1');
        var toUnbookmark = $('.bookmark-button-2');

        $(toUnbookmark).on('click', function() {

            var articleId = $(this).parents('.published-item').data('id');

            console.log('remove item');
            if (articleId) {
                localStorage.removeItem(articleId);
                $(this).parents('footer').removeClass('bookmarked-in-css');
            }


        });


    }
}
