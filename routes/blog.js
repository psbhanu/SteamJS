/**
* Package @ Steam JS - Blog Route
* Author  @ psbhanu
*/

var BlogController = require( APP_PATH_CONTROLLERS + '/blog');

module.exports = function (app) {
    // Blog Routes
    app.get('/blog',  BlogController.Index);
	app.get('/blog/add', BlogController.Add); 
    app.post('/blog/add', BlogController.Create); 
};