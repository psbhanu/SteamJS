/**
	* Package @ Steam JS - Models	
	* Author  @ psbhanu
	* This module loads dynamically models modules.
*/

'use strict';

var config = require(APP_PATH_CONFIG);

var mongoose = require('mongoose');
var connectionString = 'mongodb://' + config[config.environment].database.credentials + config[config.environment].database.host + ':' + config[config.environment].database.port  + '/'+ config[config.environment].database.name;

mongoose.connection.once('open', function() {
    console.log('Successfully connected to database');
});

mongoose.connection.on("connected", function(ref) {
  console.log("Connected to " + connectionString + " DB!");
});

// If the connection throws an error
mongoose.connection.on("error", function(err) {
  console.error('Failed to connect to DB ' + connectionString + ' on startup ', err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection to DB :' + connectionString + ' disconnected');
});

var gracefulExit = function() { 
  mongoose.connection.close(function () {
    console.log('Mongoose default connection with DB :' + connectionString + ' is disconnected through app termination');
    process.exit(0);
  });
}

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

/*
try {
  options.server.socketOptions = options.replset.socketOptions = { keepAlive: 1 };
  mongoose.connect(config.getDBURL(connectionString));
  console.log("Trying to connect to DB " + connectionString);
} catch (err) {
  console.log("Sever initialization failed " , err.message);
}
*/

module.exports = mongoose.connect(connectionString);
