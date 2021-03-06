var express 	= require('express');
var app 		= express();
var bodyParser	= require('body-parser');
var config 		= require(APP_PATH_CONFIG);

var PORT 		= process.env.PORT || (config[config.environment]).application.port || 3000;
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
	
	//console.log(require(APP_PATH_VIEW_HELPERS));
	
	// Use Express-Handlebars 
	app.engine('handlebars', exphbs({
		defaultLayout: 'app',
		layoutsDir: APP_PATH_VIEW_LAYOUTS,
		partialsDir: APP_PATH_VIEW_PARTIALS,
		helpers: require(APP_PATH_VIEW_HELPERS)
	}));
	app.set('view engine', APP_VIEW_ENGINE);
	app.use(APP_PATH_STATIC_PREFIX, express.static(APP_PATH_PUBLIC));
	
	// Add body-parser Support
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	
	var server = http.createServer(app);
	
	// Load Helpers support.
	require(APP_PATH_HELPERS)(app);	

	// Load all Middlewares.
	require(APP_PATH_MIDDLEWARES)(app);

	// Load all Routes.
	require(APP_PATH_ROUTES)(app);

	// Load Models support.
	require(APP_PATH_MODELS);

	// Listen on http port.
	server.listen(app.get('port'), function(){
		console.log('Express server listening on port ' + app.get('port'));
	});  
}	
module.exports = init;