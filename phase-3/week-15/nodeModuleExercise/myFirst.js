 //==>1, === myFirst.js (CommonJS) ===

// a. Log a simple text
// console.log("My first module");

// c. Define a function
const myMultiplier = (num) => {
  return 2 * num;
};

// // d. Execute the function
myMultiplier(4);

// e. Save returned value and log it
const doubleNum = myMultiplier(4);
// console.log(doubleNum);

// f. Export the function

// module.exports = { myMultiplier };

 export {myMultiplier};

 //=> === myFirst.js (ES6 Module) ===(in this case i have explicitly write type : module on package.json file)

// a. Log a simple text

// console.log("My first module");

// // c. Define a function
// function myMultiplier(num) {
//   return 2 * num;
// }

// // d. Execute the function
//  myMultiplier(4);

// // e. Save returned value and log it
// const doubleNum = myMultiplier(4);
// console.log(doubleNum);
 
// // f. Export the function
// export {myMultiplier};