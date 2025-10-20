// === mySecond.js (ES6 Module) ===

// a. Define a function with the same name
const myMultiplier = (num) => {
  return 3 * num;
};

// b. Execute the function
myMultiplier(4);

// c. Save returned value and log it
const updatedNum = myMultiplier(4);
// console.log(updatedNum); // 12

// d. Export the function (named export)
export { myMultiplier };

// OR, if we prefer default export:
// export default myMultiplier;
