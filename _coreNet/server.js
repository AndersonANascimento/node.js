'use strict';

let net = require('net');

let connections = [];

/* Função para envio de mensagem a todas as conexões */
let broadcast = function (message, origin) {
    connections.forEach(function (connection) {
        if (connection === origin) return;
        connection.write(message);
    });
};

net.createServer(function (connection) {
    /* Guarda conexões de clientes estabelecidas */
    connections.push(connection);

    /* Envia mensagem ao client ao connectar */
    connection.write('Hello, I am the server!');

    /* Recebe mensagem enviada pelo client na conexão */
    connection.on('data', function (message) {
        
        let command = message.toString();
        
        if(command.indexOf('/nickname') === 0) {
            let nickname = command.replace('/nickname ', '');
            broadcast(connection.nickname + ' is now ' + nickname);
            connection.nickname = nickname;
            // console.log(nickname);
            return;
        }
        if(command.indexOf('/quit') === 0) {
            connection.end();
            return;
        }
        broadcast(connection.nickname + ' > ' + message, connection);
        // console.log(message.toString());
    });

    connection.on('end', function () {
        broadcast(connection.nickname + ' has left!', connection);
        console.log(`${connection.nickname} saindo por 'end'`);        
        connections.splice(connections.indexOf(connection), 1);
    });
    
    connection.on('error', function () {
        console.log(`${connection.nickname} saindo por 'error'`);        
        broadcast(connection.nickname + ' has left!', connection);
        connections.splice(connections.indexOf(connection), 1);
    });

    connection.on('close', function (had_error) {
        console.log(`close com erro: ${had_error}`);
    })

}).listen(3000);
// console.log(net);
