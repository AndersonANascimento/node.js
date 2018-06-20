'use strict';

const fs = require('fs');
process.env.UV_THREADPOOL_SIZE = 4;

console.time('file');
let thread = 1;
let count = 1;
while (count <= 6) {
    fs.readFile('./file.mp4', function(err, data) {
        console.log("Thread #" + thread++ +" finish");
        console.timeEnd('file');
    });
    count++;
}
