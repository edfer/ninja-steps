var $ = require('jquery');
var addingBookmark = require('./adding-bookmark');


var bookmarked = $('.bookmark-button-2');
var unbookmark = $('.bookmark-button-1');

$('.bookmark-div').on('click', unbookmark, function(){

	var articleId = $(this).parents('.published-item').data('id');

	var myBookmarks =[];

	$(myBookmarks).add(articleId);

	for (var i in myBookmarks){
		myBookmarks = myBookmarks[i]
	}

	localStorage.setItem('bookmarked', myBookmarks[i]);

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
});













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