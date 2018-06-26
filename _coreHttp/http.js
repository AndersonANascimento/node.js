'use strict';
const router = require('./router');

let app = router(3412);

let operadoras = [
    {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
    {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
    {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3}
];

let contatos = [
    {id: 1, nome: "Bruno", telefone: "9999-2222", data: new Date(), operadora: operadoras[0]},
    {id: 2, nome: "Sandra", telefone: "9999-3333", data: new Date(), operadora: operadoras[1]},
    {id: 3, nome: "Mariana", telefone: "9999-9999", data: new Date(), operadora: operadoras[2]}
];

app.interceptor(function (req, res, next) {
    console.log('executando interceptor 0');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.interceptor(function (req, res, next) {
    console.log('executando interceptor 1');
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.get('/operadoras', function (req, res) {
    res.write(JSON.stringify(operadoras));
    res.end();
});

app.get('/contatos', function (req, res) {
    res.write(JSON.stringify(contatos));
    res.end();
});

app.post('/contatos', function (req, res) {
    let contato = req.body;    
    // console.log(contato);
    contatos.push(JSON.parse(contato));
    res.end();
});

app.options('/contatos', function (req, res) {
    res.end();
});
