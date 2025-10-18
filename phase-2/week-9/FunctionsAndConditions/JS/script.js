// /* Questions on functions
// ********************
"use strict";
// Question 1
// ● Define a simple function named myFirst that prints the word "Hello" on the console
// ○ First define the function
// ○ Then call the function
// */

// function myFirst() {
//   console.log("Hello");
// }
// myFirst();

// /* *********************
// Question 2
// ● Define a function called mySecond that takes a parameter and prints the parameter on console
// */

// function mySecond(para) {
//   console.log(para);
// }
// mySecond("2nd function's parameter");

// /* *********************
// Question 3
// ● Define a function called myThird that takes a parameter and prints it using mySecond function
// */

// function myThird(value) {
//   mySecond(value);
// }
// myThird("From myThird function!");

// /* *********************
// Question 4
// ● Write a function named myFourth that takes an array as a parameter and prints only the first value
// */

// function myFourth(arr) {
//   console.log(arr[0]);
// }
// myFourth([1, 2, 3, 4, 5]);

// /* *********************
// Question 5
// ● Write a function named myFifth that takes an array with two numbers and prints their sum
// */

// function myFifth(num) {
//   let sum = num[0] + num[1];
//   console.log(sum);
// }
// myFifth([20, 30]);

// /* *********************
// Question 6
// ● Write a function that takes minutes and converts it to seconds
// */

// // Pseudocode:
// // 1. Define function minuteToSecondConv with minutes parameter
// // 2. Multiply minutes * 60
// // 3. Return result
// // 4. Call with a test value

// function minuteToSecondConv(min) {
//   if (typeof min !== "number") return "please enter in number.";
//   return min * 60;
// }
// let sec = minuteToSecondConv(5);
// console.log(sec);

// /* *********************
// Question 7
// ● Write a function that returns the next number after the input
// */

// Pseudocode:
// 1. Define function addition with number parameter
// 2. Return number + 1
// 3. Call with example

// function addition(num) {
//   if (typeof num !== "number") return "please enter in number.";
//   return num + 1;
// }
// let nextNum = addition(88);
// console.log(nextNum);

// /* *********************
// Question 8
// ● Write a function that finds the area of a triangle
// */

// // Pseudocode:
// // 1. Define function areaOfTriangle with base and height
// // 2. Formula = (base * height) / 2
// // 3. Return result
// 4. Call with values
// function areaOfTriangle(b, h) {
//   if (typeof b !== "number" || typeof h !== "number")
//     return "please enter in number.";
//   return (b * h) / 2;
// }
// let area = areaOfTriangle(4, 5);
// console.log(area);

// /* *********************
// Question 9
// ● Write a function that returns number of legs given chickens, cows, and pigs
// */

// // Pseudocode:
// // 1. Define function animals with chicken, cows, pigs
// // 2. Chickens have 2 legs, cows 4, pigs 4
// // 3. Return total legs
// // 4. Call with test values

// function animals(chicken, cows, pigs) {
//   if (
//     typeof chicken !== "number" ||
//     typeof cows !== "number" ||
//     typeof pigs !== "number"
//   ) {
//     return "please enter in number";
//   }
//   return chicken * 2 + cows * 4 + pigs * 4;
// }
// let totalNumberLeg = animals(2, 3, 5);
// console.log(totalNumberLeg); // Output: 36

// /* *********************
// Question 10
// ● Write a function that returns 3 times the first number in an array
// */

// // Pseudocode:
// // 1. Define function tripleFirst with array parameter
// // 2. check whether the argument is number or not
// // 3. Return 3 * first element
// // 4. Call with test array
// function tripleFirst(numbers) {
//   if (typeof numbers[0] !== "number") return "please enter in number.";
//   return 3 * numbers[0];
// }
// let result = tripleFirst([4, 10]);
// console.log(result); // Output: 12

// /* *********************
// Question 11
// ● Write a function that checks if two numbers are equal
// */

// // Pseudocode:
// // 1. Define function isSameNum with two parameters
// // 2. check whether the argument is number or not
// // 3. If num1 == num2 return true else false
// // 4. Call with test values
// function isSameNum(num1, num2) {
//   if (typeof num1 !== "number" || typeof num2 !== "number")
//     return "please enter a number";

//   if (num1 === num2) return `${num1} is equal to ${num2}`;

//   return `${num1} is not equal to ${num2}`;
// }
// let check = isSameNum(5, 5);
// console.log(check);

// /* *********************
// Question 12
// ● Write a function that checks if a number is divisible by 100
// */

// // Pseudocode:
// // 1. Define function divisiblityCheck with parameter
// // 2. check whether the argument is number or not
// // 3. If number % 100 == 0 return true else false
// // 4. Call with example
// function divisiblityCheck(num) {
//   if (typeof num !== "number") return "please enter in number.";
//   if (num % 100 == 0) return true;
//     return false;
// }
// let number = divisiblityCheck(200);
// console.log(number);

// /* *********************
// Question 13
// ● Write a function that checks if a number is even or odd
// */

// // Pseudocode:
// // 1. Define function isEvenOrOdd
// // 2. check whether the argument is number or not
// // 3. If number % 2 == 0 return true (even), else false (odd)
// // 4. Call with example
function isEvenOrOdd(num) {
  if (typeof num !== "number") return "please enter in number.";
  if (num % 2 == 0) return "even";
  return "odd";
}
console.log(isEvenOrOdd(22));

// /* *********************
// Question 14
// ● Write a function that gives grade based on score
// */

// // Pseudocode:
// // 1. Define function grade with score parameter
// // 2. check whether the argument is number or not
// // 3. If score > 100 or < 0 return "Invalid"
// // 3. If >=90 return "Grade A"
// // 4. Else if >=80 return "Grade B"
// // 5. Else return "Grade C"
// // 6. Call with example
function grade(score) {
  if (typeof score !== "number") return "please enter in number.";
  if (score > 100 || score < 0) return "Invalid score!";
  if (score >= 90) return "Grade A";
  if (score >= 80) return "Grade B";
  return "Grade C";
}
console.log(grade(99));

//or
function grade(score) {
  // Validation: check if input is a number
  if (typeof score !== "number" || isNaN(score)) {
    return "Please enter your score as a valid number";
  } 
  switch (true) {
    case score > 100 || score < 0:
      return "Invalid Score";

    case score >= 90:
      return "Grade A";

    case score >= 80:
      return "Grade B";

    case score < 80:
      return "Grade C";

    default:
      return "Unexpected error";
  }
}

console.log(grade(95));   // Grade A
console.log(grade(85));   // Grade B
console.log(grade(70));   // Grade C
console.log(grade(120));  // Invalid Score
console.log(grade("A"));  // Please enter your score as a valid number
