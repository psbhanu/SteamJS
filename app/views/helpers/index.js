/**
	* Package @ Steam JS - View Helpers		
	* Author  @ psbhanu
	* This module loads dynamically all view helper modules located in the helpers/ directory.
*/

'use strict';

var fs = require('fs');
var path = require('path');
var helpers = helpers || {};

fs.readdirSync(APP_PATH_VIEW_HELPERS).forEach(function (file) {
	if(file.substr(-3) === '.js') {
		// Avoid to read this current file.
		if (file === path.basename(__filename)) { return; }
		
		// Load the config file.
		helpers[file.substr(0, file.length - 3)] = require('./' + file);
	} 
	else {
		return;
	}
});

module.exports = helpers;