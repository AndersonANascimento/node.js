'use strict';
let config = require('./config');
let i = setInterval(() => {
    console.log('I ' + new Date());
}, 1000);

setTimeout(() => {
   clearInterval(i); 
}, config.timeout);