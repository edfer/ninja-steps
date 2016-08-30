var $ = require('jquery');
var bookmarkEvent = require('./bookmark-event');
var unbookmarkEvent = require('./unbookmark-event');


bookmarkEvent.setBookmark();

// POR AQUÍ SE PUEDE HACER UN REGISTRO DE CUÁNTOS ARTÍCULOS HAN SIDO SELECCIONADOS COMO BOOKMARKED

$(document).ready(function() {

    for (var key in localStorage) {

        $('.published-list').find('[data-id="' + key + '"]').find('footer').addClass('bookmarked-in-css');

        // var count = '<div>' + (localStorage.length) + '</div>';

        // $('.comments-link').prepend(count);

    }




});


unbookmarkEvent.unsetBookmark();
