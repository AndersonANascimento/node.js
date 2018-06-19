'use strict';

let options = [
    'a) pid',
    'b) title',
    'c) arch',
    'd) platform'
];

exports.showOptions = () => {
    options.forEach((option) => {
        console.log(option);
    });
}