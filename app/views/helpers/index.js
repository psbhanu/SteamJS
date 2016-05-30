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
		
		// Load the helper file.
		//helpers[file.substr(0, file.length - 3)] = require('./' + file);
		var helper = require('./' + file);
		for (var key in helper) {
			if (helper.hasOwnProperty(key)) {
				//console.log(key + " -> " + helper[key]);
				helpers[key] = helper[key];
			}
		}
	} 
	else {
		return;
	}
});

module.exports = helpers;