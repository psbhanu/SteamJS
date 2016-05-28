/**
	* Package @ Steam JS - Helpers	
	* Author  @ psbhanu
	* This module loads dynamically all helper modules located in the helpers/ directory.
*/

'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function (app) {
	fs.readdirSync(APP_PATH_HELPERS).forEach(function (file) {
		if(file.substr(-3) === '.js') {
			// Avoid to read this current file.
			if (file === path.basename(__filename)) { return; }
			
			// Load the middleware file.
			require('./' + file)(app);
		} 
		else {
			return;
		}
	});
};