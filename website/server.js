'use strict';
const http = require('http');
const os = require("os");
const hostname = os.hostname();
const port = process.env.PORT || 3000;
const pingHost = process.env.PINGHOST || 'www.google.com';

let server = http.createServer((request, response) => {
	if(process.env.PING || false) {
		http.get({
        hostname: pingHost,
        port: 80,
        path: '/',
        agent: false
      }, (reply) => {
        let json = { hostname: hostname, internet: (reply.statusCode === 200) }
      	response.writeHead(200, {'Content-Type': 'application/json'});
      	response.end(JSON.stringify(json));
      })
      .on('error',(e) => {
        let json = { hostname: os.hostname(), internet: e };
        response.writeHead(200, {'Content-Type': 'application/json'});
    		response.end(JSON.stringify(json));
  	});

	} else {
		let json = { hostname: hostname, internet: null };
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(json));
	}
});

server.listen(port);

console.log('Server running at http://' + hostname + ':' + port + ' ping:' + pingHost);

