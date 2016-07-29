var $ = require('jquery');

module.exports = {

    load: function() {

    	

        $.ajax({
            url: '/api/bookmarks/?_order=id',
            success: function(response) {

            	for (var i in response) {
            		var myBookmarks = response[i];
            	}

                var local = myBookmarks.selected;

                localStorage.setItem('', local);
            },

            error: function(response){
            	console.error('error', response);
            },
            complete: function(){
            	// localStorage.setItem('bookmarked', local);
            }

        });
    }
}
