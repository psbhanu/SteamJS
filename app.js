'use strict';

var globals  	= require('./globals');

for (var key in globals) {
	if (globals.hasOwnProperty(key)) {
		//console.log(key + " -> " + globals[key]);
		global[key] = globals[key];
	}
}

var config 		= require(APP_PATH_CONFIG);
//var database 	= require(APP_PATH_SERVICES_DB);

var cluster 	= require('cluster');  
var numCPUs 	= require('os').cpus().length;

var webConcurrency 		= process.env.WEB_CONCURRENCY || (config.app[config.app.environment]).application.webConcurrency || 1;
var defaultConcurrency	= process.env.WEB_CONCURRENCY || (config.app[config.app.environment]).application.webConcurrencyDefault || false;
var workers				= (defaultConcurrency) ? numCPUs : webConcurrency;

if (cluster.isMaster) {  
	// I'm the master, let's fork !
	for (var i = 0; i < workers; i++) {
		cluster.fork();
	}
	
	cluster.on('online', (worker) => {
		console.log(`Worker ${worker.process.pid} is alive.`);
	});
	
	cluster.on('exit', (worker, code, signal) => {
		console.log(`Worker ${worker.process.pid} died.`);
	});
	
} 
else {
	// I'm a worker, let's spawn the HTTP server
	// (workers can share any TCP connection)
	require(APP_PATH_INIT)();
}


process.on('uncaughtException', function(err) {
	//log the error
	console.error(err);
	//let's tell our master we need to be disconnected
	require('forky').disconnect();
	//in a worker process, this will signal the master that something is wrong
	//the master will immediately spawn a new worker
	//and the master will disconnect our server, allowing all existing traffic to end naturally
	//but not allowing this process to accept any new traffic
});