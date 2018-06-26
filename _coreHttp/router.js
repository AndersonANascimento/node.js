'use strict';
const http = require('http');

let createRouter = (port) => {

    const api = {};
    const routes = {};
    const methods = ['GET', 'POST', 'OPTIONS'];
    const interceptors = [];

    methods.forEach((method) => {
        routes[method] = {};
        api[method.toLowerCase()] = (path, fn) => {
            routes[method][path] = fn;
        };
    });

    api.interceptor = (interceptor) => {
        interceptors.push(interceptor);
    };

    const executeInterceptors = (number, req, res) => {
        const interceptor = interceptors[number];

        if(!interceptor) return;

        interceptor(req, res, ()=>{
            executeInterceptors(++number, req, res);
        });
    };

    const handleBody = (req, res, next) => {
        const body = [];
        req.on('data', (chunk) => {
            // console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            req.body = Buffer.concat(body).toString();
            next();
        });
    };

    http.createServer((req, res) => {
        // console.log(req.method);
        
        handleBody(req, res, () => {

            executeInterceptors(0, req, res);
            
            if(!routes[req.method][req.url]) {
                res.statusCode = 404;
                return res.end();
            }
            
            routes[req.method][req.url](req, res);
        });
        
    }).listen(port);

    return api;
};

module.exports = createRouter;