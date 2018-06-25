'use strict';
const http = require('http');

let createRouter = function (port) {
    http.createServer(function (req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
    }).listen(port);
};

module.exports = createRouter;