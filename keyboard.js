'use strict';
exports.onReadable = (callback) => {
    process.stdin.on('readable', () => {
        let chunk = process.stdin.read();
        if (chunk)
            callback(chunk.toString().replace(/\r\n/, '')); // remove CRLF
    });
};