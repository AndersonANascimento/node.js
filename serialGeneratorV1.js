'use strict';
console.log('módulo em ./serialGeneratorV1.js exec....');
// let max = 10000;
let config = require('./config');

let generate = function () {
    return Math.floor(Math.random() * config.max);
};

// this.generate = generate; ou
// exports.generate = generate; ou
// module.exports.generate = generate;

/* Exportando como objeto */
module.exports = {
    generate: generate
};
