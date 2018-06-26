'use strict';

console.log(global);

console.log("\n->> Object.keys(global)");
console.log(Object.keys(global));

console.log("\n->> Object.keys(process)");
console.log(Object.keys(process));

Object.keys(global).forEach((val) => {
    console.log(val);
});