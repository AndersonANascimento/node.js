'use strict';
let config = require('./config');

let interval = (callback, time) => {
    setTimeout(() => {
        callback();
        interval(callback, time);
    }, time);
}

interval(() => {
    console.log('R ' + new Date());    
}, config.timeout);
