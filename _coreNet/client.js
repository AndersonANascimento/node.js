'use strict';

let net = require('net');

let client = net.connect(3000);

/* Envia mensagem ao server ao connectar */
client.on('connect', function () {
    client.write('Hello, I am the client!');
});

/* Recebe mensagem enviada pelo server na conexão */
client.on('data', function (message) {
    console.log(message.toString());
});

/* Terminando execução do cliente quando conexão for encerrada */
client.on('end', function () {
    console.log('Encerrando por End');    
    // process.exit();
});

/* Terminando execução do cliente quando conexão for encerrada por erro */
client.on('error', function (err) {
    console.log(`Encerrando por ${err}`);    
    // process.exit();
});

client.on('close', function (had_error) {
    console.log(`Close com erro: ${had_error}`);
    process.exit();
});

/* Trata e envia mensagems lidas da entrada padrão (teclado) */
process.stdin.on('readable', function () {
    let message = process.stdin.read();
    if (!message) return;
    /* Converte o Buffer em string e remove CRLF do fim da mensagem */
    message = message.toString().replace(/\r\n/, '');
    client.write(message);
    // console.log(message);
});
