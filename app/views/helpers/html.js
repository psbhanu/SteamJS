/**
* Package @ Steam JS - View Helpers	
* Author  @ psbhanu
*/

var helper = helper || {};
var Handlebars = require('handlebars');
// STYLE LINKERS
helper.style = function (url) { 
	url = APP_PATH_PUBLIC_WEB_ASSETS_CSS + '/' + url;
	return new Handlebars.SafeString('<link rel="stylesheet" href="' + url + '" media="screen">');
}
helper.xstyle = function (url) { 
	return new Handlebars.SafeString('<link rel="stylesheet" href="' + url + '" media="screen">');
}

// SCRIPT LINKERS
helper.script = function (url) { 
	url = APP_PATH_PUBLIC_WEB_ASSETS_JS + '/' + url;
	return new Handlebars.SafeString('<script src="' + url + '"></script>');
}
helper.xscript = function (url) { 
	return new Handlebars.SafeString('<script src="' + url + '"></script>');
}

module.exports = helper;