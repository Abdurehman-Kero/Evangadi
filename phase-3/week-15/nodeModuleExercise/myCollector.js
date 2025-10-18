// //=3,// === (ES6 Module) ===
// // a. Import both modules
import { myMultiplier as firstMultiplier } from "./myFirst.js";
import { myMultiplier as secondMultiplier } from "./mySecond.js";
import fs from "fs";

// // // --- b: Pass value 5 to both functions and display outputs ---
// const firstResult = firstMultiplier(5);
// const secondResult = secondMultiplier(5);
// // //--- c:
// console.log(`Result from myFirst.js: ${firstResult}`);   // 10
// console.log(`Result from mySecond.js: ${secondResult}`); // 15

/* //=>3 ===  (CommonJS) ===
// a. Import both modules
const myFirst = require('./myFirst.js');
const mySecond = require('./mySecond.js');
const fs = require('fs');

// b. Pass value 5 to both functions and display outputs ---
const firstResult = myFirst.myMultiplier(5);
const secondResult = mySecond.myMultiplier(5);

console.log(`Result from myFirst.js: ${firstResult}`);   // 10
console.log(`Result from mySecond.js: ${secondResult}`); // 15
 */



//=> === 4 ===,
// ===  (ES6 Module) ===
// ---  a: Pass 14 to firstMultiplier and write to file ---

const multipliedValue1 = firstMultiplier(14);
const fileContent = `The value of 14 when passed through the firstMuliplier function is ${multipliedValue1}.\n`;

fs.writeFile('results.txt', fileContent, (err) => {
    if (err) console.log('Error writing to file:', err);
    else console.log('Successfully wrote first result to results.txt');
});

// // --- Part 4b: Pass 14 to secondMultiplier and append to file ---
const multipliedValue2 = secondMultiplier(14);
const secondFileContent = `The value of 14 when passed through the secondMultiplier function is ${multipliedValue2}.\n`;

fs.appendFile('results.txt', secondFileContent, (err) => {
    if (err) console.log('Error appending to file:', err);
    else console.log('Successfully wrote second result to results.txt');
});
/* 


// 4 ===  (CommonJS) ===
 
// - a: Pass 14 to myFirst.myMultiplier and write to file ---
 
const multipliedValue1 = myFirst.myMultiplier(14);
const fileContent = `The value of 14 when passed through the myMultiplier function is ${multipliedValue1}.\n`;

fs.writeFile('results.txt', fileContent, (err) => {
    if (err) console.log('Error writing to file:', err);
    else console.log('Successfully wrote first result to results.txt');
});

// - 4: Pass 14 to mySecond.myMultiplier and append to file ---
const multipliedValue2 = mySecond.myMultiplier(14);
const secondFileContent = `The value of 14 when passed through the myMultiplier function is ${multipliedValue2}.\n`;

fs.appendFile('results.txt', secondFileContent, (err) => {
    if (err) console.log('Error appending to file:', err);
    else console.log('Successfully wrote second result to results.txt');
});
 */
