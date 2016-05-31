/**
* Package @ Steam JS - Middleware - Generic	
* Author  @ psbhanu
*/

module.exports = function (app) {
	// Setting General Options
	app.use(function (request, response, next) {
		response.pageObject = response.pageObject || {};
		response.pageObject.children = [12,10];
		response.pageObject.developer = Developer();
		response.pageObject.developerUrl = DeveloperUrl();
		next();
	});
};