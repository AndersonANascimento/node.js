'use strict';

const cluster = require('cluster');
const http = require('http');
const isPrime = require('./number-util').isPrime;

if (cluster.isMaster) {
	console.log('Cluster');
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    return;
}

let count = 1;
let server = http.createServer((req, res) => {
	console.log('Primes #' + count++ + " @ " + process.pid);
	console.time('primes');

	let number = 0;
	let numberOfPrimes = 0;
	
	while(true) {
    	if(isPrime(++number)) numberOfPrimes++;
    	if(numberOfPrimes === 1000000) break;
	}
	
	res.end("Number: " + number);
	console.timeEnd('primes');
});

server.listen(3000);
