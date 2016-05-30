/**
* Package @ Steam JS - Config	
* Author  @ psbhanu
* This module loads dynamically all config modules located in the config/ directory.
*/

'use strict';

var fs = require('fs');
var path = require('path');
var configs = configs || {};

fs.readdirSync(APP_PATH_CONFIG).forEach(function (file) {
	if(file.substr(-3) === '.js') {
		// Avoid to read this current file.
		if (file === path.basename(__filename)) { return; }
		
		// Load the config file.
		//config[file.substr(0, file.length - 3)] = require('./' + file);
		var config = require('./' + file);
		for (var key in config) {
			if (config.hasOwnProperty(key)) {
				//console.log(key + " -> " + config[key]);
				configs[key] = config[key];
			}
		}		
	} 
	else {
		return;
	}
});

module.exports = configs;
