'use strict';
let help = require('./help');
let keyboard = require('./keyboard');

keyboard.onReadable((option) => {
    // console.log(option.length);
    
    switch (option) {
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
});

process.on('exit', () => {
    console.log('Bye!');
});


process.on('uncaughtException', () => {
    console.log('error!');
});

a.b();