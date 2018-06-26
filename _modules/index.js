'use strict';
/* Definindo variável global(Atenção! Não recomendado) */
// max = 10000; // ou 
// global.max = 10000; // ou 
// GLOBAL.max = 10000; // ou 
// root.max = 10000;

/* Teste serialGenerator (Globals).js */
console.log("\n->> Teste do serialGenerator (Globals)");
var serialGenerator = require('./serialGenerator');
console.log(serialGenerator.generate());

/* Teste serialGeneratorV1.js */
var serialGenerator = require('./serialGeneratorV1');
console.log(serialGenerator);
console.log(serialGenerator.generate());

/* Teste serialGeneratorV2.js */
var serialGenerator2 = require('./serialGeneratorV2');
console.log(serialGenerator2);
console.log(serialGenerator2.generate());

/* Teste do cache do require */
console.log("\n->> Teste do cache do require");
var serialGeneratorA = require('./serialGeneratorV2');
var serialGeneratorB = require('./serialGeneratorV2');
console.log(serialGeneratorA === serialGeneratorB);

var createSerialGenerator = require('./serialGeneratorV3');
var serialGeneratorA = new createSerialGenerator();
var serialGeneratorB = new createSerialGenerator();
console.log(serialGeneratorA === serialGeneratorB);

console.log("\n->> Teste de require da node_modules");
var serialGeneratorModule = require('serialGenerator')
console.log(serialGeneratorModule.generate());
