'use strict';
let config = require('./config');
console.log(config);

exports.generate = () => {
    return Math.floor(Math.random() * config.max);
};
