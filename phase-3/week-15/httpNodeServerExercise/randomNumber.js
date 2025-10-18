//=> 5. Create a module called my "randomNumber".
//=> a. The "randomNumber" module has a function called random(). The random
// function just returns a random number when it gets executed

 
function random() {
  // console.log(Number.MAX_SAFE_INTEGER);
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

// b. Execute the function inside the module

// random(); 

// c. Save the returned value in a variable and log the variable on the console. Now, run  your module on the terminal to see the printed output
const randomNum = random();
console.log(randomNum); 
// d. Export your module so that it is accessible to other module
 
 export {random};