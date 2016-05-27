var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

var WORKERS 	= process.env.WEB_CONCURRENCY || 1;
var PORT 		= process.env.PORT || 3000;
var APP_KEY 	= process.env.APP_KEY;

app.set('port', PORT);
app.use(express.static(path.join(__dirname, 'static')));



const cluster = require('cluster');  
const http = require('http');  
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {  
	// I'm the master, let's fork !
	for (var i = 0; i < numCPUs; i++) {
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
	http.createServer(app).listen(app.get('port'), function(){
		console.log('Express server listening on port ' + app.get('port'));
	});  
}