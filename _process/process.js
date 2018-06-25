'use strict';
// console.log(process.argv);
/* 
process.argv.forEach(element => {
    console.log(element);
});
 */

let help = require('./help');
let options = process.argv.slice(2);
if (options.length < 1) {
    help.showOptions();
    return;
}

switch (options[0]) {
    case 'a':
        console.log('pid: ' + process.pid);
        break;
    case 'b':
        console.log('title: ' + process.title);
        break;
    case 'c':
        console.log('arch: ' + process.arch);
        break;
    case 'd':
        console.log('platform: ' + process.platform);
        break;
    case 'e':
        console.dir(process.env);
        break;
    case 'm':
        console.log(process.memoryUsage());
        break;
    case 'u':
        console.log('uptime: ' + process.uptime());
        break;
    case 'v':
        console.dir(process.versions);
        break;
    case 'q':
        process.exit();
    default:
        help.showOptions();
        break;
}