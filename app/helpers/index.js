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
			
			// Load the helper file.
			var helper = require('./' + file);
			for (var key in helper) {
				if (helper.hasOwnProperty(key)) {
					//console.log(key + " -> " + helper[key]);
					//helpers[key] = helper[key];
					global[key] = helper[key];
				}
			}
		} 
		else {
			return;
		}
	});
};