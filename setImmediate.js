'use strict';
let config = require('./config');

console.log('A ' + new Date()); // 1ª a executar

let i = setImmediate(() => {
    console.log('I ' + new Date()); // registra mas é último a executar
});
// console.log(i);

console.log('B ' + new Date()); // 2ª a executar