var $ = require('jquery');
var bookmarkEvent = require('./bookmark-event');


bookmarkEvent.setBookmark();

$(document).ready(function() {

    

    for (var i = 0; i < localStorage.length; i++) {
        getArticleId = localStorage.getItem(localStorage.key(i));
        
    }

    // for (var i = 0; i < localStorage.length; i++) {
    //     getArticleId = localStorage.getItem(localStorage.key(i));
    //     if (getArticleId == get) {

    //         $('article').data('getArticleId').addClass('bookmarked-in-css');
    //     }
    // }



});



// var articleId = $('.bookmark-button-1').parents('.published-item').data('id');

// var myBookmarks = [];

// myBookmarks.push(articleId);

// for (var i in myBookmarks) {
//     myBookmarkedItem = myBookmarks[i]
// }

// var myBookmarkedItemValue = localStorage.getItem(myBookmarkedItem);

// if (myBookmarkedItemValue == 'bookmarked') {
//     $('.bookmark-div').parents('footer').addClass('bookmarked-in-css');
// };






// START AJAX EXPERIMENT
// module.exports = {

//     load: function() {



//         $.ajax({
//             url: '/api/bookmarks/?_order=id',
//             success: function(response) {

//              for (var i in response) {
//                  var myBookmarks = response[i];
//              }

//                 var local = myBookmarks.selected;

//                 localStorage.setItem('', local);
//             },

//             error: function(response){
//              console.error('error', response);
//             },
//             complete: function(){
//              // localStorage.setItem('bookmarked', local);
//             }

//         });
//     }
// }
// END AJAX EXPERIMENT
