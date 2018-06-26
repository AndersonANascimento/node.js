'use strict';

const isPrime = require('./number-util').isPrime;

console.time('primes');
let number = 0;
let numberOfPrimes = 0;
while (true) {
    if (isPrime(++number)) numberOfPrimes++;
    if (numberOfPrimes === 1000000) break;
}
console.log(number);
console.timeEnd('primes');
