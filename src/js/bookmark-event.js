var $ = require('jquery');





module.exports = {

    setBookmark: function() {

        var toBookmark = $('.bookmark-button-1');
        var toUnbookmark = $('.bookmark-button-2');

        $(toBookmark).on('click', function() {

            var articleId = $(this).parents('.published-item').data('id');

            var myBookmarks = [];

            myBookmarks.push(articleId);

            for (var i in myBookmarks) {
                myBookmarkedItem = myBookmarks[i]


                localStorage.setItem(myBookmarkedItem, 'bookmarked');


                $(this).parents('footer').addClass(localStorage.getItem(myBookmarkedItem) + '-in-css');
            }
            // $(this).find('.bookmark-button-2').css('display', 'block');


        });
    }

}




// });

// START AJAX EXPERIMENT

// var myBookmarks = {
// 	selected: articleId
// };

// $.ajax({
// 	url: '/api/bookmarks/',
// 	method: 'post',
// 	data: myBookmarks,

// 	success: function(response){
// 		addingBookmark.load();
// 		localStorage.setItem('bookmarked', myBookmarks.selected);
// 		alert('bookmark added');
// 	},
// 	error: function(){
// 		console.error('error', arguments)
// 	}
// })

// END AJAX EXPERIMENT

// var myBookmarks = {};

// var articleId = $(this).parents('.published-item').data('id');
// localStorage.setItem('bookmarked', articleId);
// console.log('article bookmarked', articleId);

// $(myBookmarks).data('myBookmarks', {'selected': articleId});
// console.log(myBookmarks);


// $('footer').toggleClass('bookmarked');
// console.log('pulsando');














// Plan B
// $('.bookmark-div').on('click', function() {
//     $(this).find('.bookmark-button-1').attr('src', 'src/img/bookmark-filled-20px.png');
// });

// Plan C
// $('.published-item').on('click', '.bookmark-button-1', function() {
//     $(this).attr('src', 'src/img/bookmark-filled-20px.png');

// });


// Plan D
// $('.bookmark-div').on('click', function() {
//     $(this).find('.bookmark-button-2').css('display', 'block');
// });
