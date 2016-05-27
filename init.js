var express 	= require('express');
var app 		= express();

var config 		= require(APP_PATH_CONFIG);

var PORT 		= process.env.PORT || (config.app[config.app.environment]).application.port || 3000;
var APP_KEY 	= process.env.APP_KEY;

//console.log(process.env);

var init = function() {
	var http 		= require('http');
	var path 		= require('path');
	var exphbs   	= require('express-handlebars');
	var favicon 	= require('serve-favicon');
	
	app.use(favicon(APP_PATH_FAVICON));
	app.set('port', PORT);
	
	// views is directory for all template files
	app.set('views', APP_PATH_VIEWS);
	
	// Use Express-Handlebars 
	app.engine('handlebars', exphbs({
		defaultLayout: 'app',
		layoutsDir: APP_PATH_VIEW_LAYOUTS,
		partialsDir: APP_PATH_VIEW_PARTIALS,
	}));
	app.set('view engine', APP_VIEW_ENGINE);
	app.use(APP_PATH_STATIC_PREFIX, express.static(APP_PATH_PUBLIC));
	
	var server = http.createServer(app);
	
	// Load all middlewares.
	require(APP_PATH_MIDDLEWARES)(app);

	// Load all routes.
	require(APP_PATH_ROUTES)(app);
	
	// Listen on http port.
	server.listen(app.get('port'), function(){
		console.log('Express server listening on port ' + app.get('port'));
	});  
}	
module.exports = init;