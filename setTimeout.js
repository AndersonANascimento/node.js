'use strict';
let config = require('./config');
setTimeout(() => {
    console.log('B ' + new Date());
}, config.timeout);
console.log('A ' + new Date());
