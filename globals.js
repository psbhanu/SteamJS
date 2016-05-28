var path = require('path');
var APP_PATH_ROOT = path.resolve(__dirname);

var globals = {
	APP_PATH_ROOT 			: APP_PATH_ROOT,
	
	APP_PATH_SITE 			: APP_PATH_ROOT,
	APP_PATH_ADMIN 			: APP_PATH_ROOT,
	
	APP_PATH_CONFIG 		: path.join(APP_PATH_ROOT, 'config'),
	APP_PATH_INIT 			: path.join(APP_PATH_ROOT, 'init'),
	
	APP_PATH_PUBLIC 		: path.join(APP_PATH_ROOT, 'public'),
	APP_PATH_STATIC 		: path.join(APP_PATH_ROOT, 'public'),
	APP_PATH_STATIC_PREFIX	: '/static',
	APP_PATH_FAVICON		: path.join(APP_PATH_ROOT, 'public', 'favicon.ico'),
	
	APP_PATH_SERVICES		: path.join(APP_PATH_ROOT, 'services'),
	APP_PATH_SERVICES_DB	: path.join(APP_PATH_ROOT, 'services', 'database'),

	APP_PATH_ROUTES 		: path.join(APP_PATH_ROOT, 'routes'),
	APP_PATH_MIDDLEWARES 	: path.join(APP_PATH_ROOT, 'app', 'middlewares'),
	APP_PATH_CONTROLLERS	: path.join(APP_PATH_ROOT, 'app', 'controllers'),
	APP_PATH_MODELS			: path.join(APP_PATH_ROOT, 'app', 'models'),
	APP_PATH_HELPERS		: path.join(APP_PATH_ROOT, 'app', 'helpers'),
	
	APP_PATH_VIEWS 			: path.join(APP_PATH_ROOT, 'app', 'views'),
	APP_PATH_VIEW_LAYOUTS 	: path.join(APP_PATH_ROOT, 'app', 'views', 'layouts'),
	APP_PATH_VIEW_PARTIALS 	: path.join(APP_PATH_ROOT, 'app', 'views', 'partials'),
	APP_PATH_VIEW_HELPERS	: path.join(APP_PATH_ROOT, 'app', 'views', 'helpers'),

	APP_VIEW_ENGINE 		: 'handlebars',
	
}

module.exports = globals;