'use strict';
/* Medindo tempo de execução */
console.time('T');

setImmediate(() => {
    console.timeEnd('T');
});
