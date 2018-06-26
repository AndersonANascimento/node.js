'use strict';
let config = require('./config');

let a = setTimeout(() => {
   console.log('A ' + new Date());   
}, config.timeout);

let b = setTimeout(() => {
   console.log('B ' + new Date());   
}, config.timeout);

clearTimeout(a);
// console.log(b);
