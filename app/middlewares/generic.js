/**
* Package @ Steam JS - Routes	
* Author  @ psbhanu
*/

var fs = require('fs')
var morgan = require('morgan');
var errorHandler = require('errorhandler');

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream('./logs/access.log', {flags: 'a'})

module.exports = function (app) {
	app.use(morgan('combined'));
	app.use(morgan('combined', {stream: accessLogStream}));
	app.use(errorHandler({ dumpExceptions: true, showStack: true }));

	// Generic Middlewares
	app.use(function (request, response, next) {
		console.log('Time:', Date.now());
		next();
	});
	
	// Setting General Options
	app.use(function (request, response, next) {
		response.page = response.page || {};
		response.page.children = [12,10];
		next();
	});
};