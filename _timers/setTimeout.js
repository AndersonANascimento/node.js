'use strict';
let config = require('./config');

let t = setTimeout(() => {
    console.log('B ' + new Date());
}, config.timeout);

console.log(t);

console.log('A ' + new Date());
