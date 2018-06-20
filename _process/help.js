'use strict';

let options = [
    'a) pid',
    'b) title',
    'c) arch',
    'd) platform',
    'e) env',
    'm) memory usage',
    'u) uptime',
    'v) versions',
    'q) quit',
];

exports.showOptions = () => {
    options.forEach((option) => {
        console.log(option);
    });
}