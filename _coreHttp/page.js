'use strict';

const http = require('http');
const html = `<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
`;

http.createServer(function (req, res) {
    res.write(html);
    res.end();
}).listen(3412);