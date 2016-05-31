/**
* Package @ Steam JS - Blog Route
* Author  @ psbhanu
*/

var BlogController = require( APP_PATH_CONTROLLERS + '/blog');

module.exports = function (app) {
    // Blog Routes
    app.get('/blog',  BlogController.Index);
	
	// Add Post
	app.get('/blog/add', BlogController.Add); 
    app.post('/blog/add', BlogController.Create); 
    
	// Edit Post
	app.get('/blog/edit/:id', BlogController.Edit); 
    app.post('/blog/edit', BlogController.Update); 

	// Delete Post
	app.get('/blog/delete/:id', BlogController.Delete); 
};