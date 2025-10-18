/* Question 1
Given an array of numbers, write a function that prints in the console another array
which contains all the even numbers in the original array, which also have even indexes only.
○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4] */

// Pseudocode
// - Define a function getOnlyEvens(arr)
// - Check if arr is an array
//   - If not, return "please enter array only"
// - Create an empty array result
// - Loop through arr with step 2 (even indexes)
//   - If element is not a number → return "enter number value only"
//   - If element is even → push to result
// - Return result

// let evenArr = [];
// function getOnlyEvens(arr) {
//   if (!Array.isArray(arr)) return "please enter array only";
//   for (let i = 0; i < arr.length; i += 2) {
//     if (typeof arr[i] != "number") return "enter number value only";
//     if (arr[i] % 2 == 0) {
//       evenArr.push(arr[i]);
//     }
//   }
//   return evenArr;
// }
// console.log(getOnlyEvens([0, 1, 2, 3, 4]));

// // or

// const even = (num) => num % 2 == 0;
// function getOnlyEvens(arr) {
//   if (!Array.isArray(arr)) return "please enter array only";
//   return arr.filter((num, i) => even(i) && even(arr[i]));
// }
// console.log(getOnlyEvens([0, 1, 2, 3, 4]));

// /* Question 2
// Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32 */

// // Pseudocode
// // - Define a function reverseCompare(num)
// // - Check if num is a number
// //   - If not → return "please enter number value only!"
// // - Check if num is between 10 and 99
// //   - If not → return "the number should be in between [10  99]"
// // - Convert num to string → reverse → back to number
// // - Compare num and reversedNum
// //   - If num > reversedNum → return "ok"
// //   - Else return "Not ok"

// let reverseCompare = (num) => {
//   if (typeof num != "number") return "please enter number value only!";
//   if (num < 10 || num > 99) return "the number should be in between [10  99]";
//   let str = num.toString();
//   let nums = str.split("");
//   let reversedArr = nums.reverse();
//   let reversedNum = reversedArr.join("");
//   if (num > reversedNum) return "ok";
//   return "Not ok";
// };
// console.log(reverseCompare(52));

// // or in compact or simple form
// let reverseCompare2 = (num) => {
//   if (typeof num != "number") return "please enter number value only!";
//   if (num < 10 || num > 99) return "the number should be in between [10  99]";
//   let reversedNum = num.toString().split("").reverse().join("");
//   return num > reversedNum ? "ok" : "Not Ok";
// };
// console.log(reverseCompare2(72));

// // or
// reverseCompare3 = (num) => {
//   if (typeof num != "number") return "please enter number value only!";
//   let reversedNum = (num % 10) * 10 + Math.floor(num / 10);
//   return num > reversedNum ? "ok" : "Not Ok";
// };
// console.log(reverseCompare3(97));

/* Question 3
Write a function that takes a positive integer and returns the factorial of the number.
Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
4 * 3 * 2 * 1 = 24)
○ Test 1: returnFactorial(5) outputs 120
○ Test 2: returnFactorial(6) outputs 720
○ Test 3: returnFactorial(0) outputs 1 */

// Pseudocode
// - Define a function returnFactorial(num)
// - Check if num is a number
//   - If not → return "please enter numerical value only!"
// - If num < 0 → return "please enter a positive value only"
// - If num == 0 or num == 1 → return 1
// - Initialize factorial = 1
// - Loop i from 2 to num
//   - factorial = factorial * i
// - Return factorial

// function returnFactorial(num) {
//   if (typeof num != "number") return "please enter numerical value only!";
//   if (num < 0) return "please enter a positive value only";
//   if (num == 0 || num == 1) return `factorial of ${num} is: 1`;
//   let factorial = 1;
//   for (let i = 2; i <= num; i++) {
//     factorial = factorial * i;
//   }
//   return `factorial of ${num} is: ${factorial}`;
// }
// console.log(returnFactorial(7));

/* Question 4 (Meera array)
A Meera array is defined to be an array containing only numbers as its elements and for
all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
array of numbered elements and prints “I am a Meera array” in the console if its array
does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
Meera array”
○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
2 is 10
○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
*2 is -6 */

// Pseudocode
// - Define a function checkMeera(arr)
// - Check if arr is an array
//   - If not → return "please enter an array"
// - Check if all elements are numbers
//   - If not → return "please enter numerical array only"
// - Loop through each element n in arr
//   - If arr contains n*2 → return "I am NOT a Meera array"
// - Else return "I am a Meera array"

// let checkMeera = (arr) => {
//   if (!Array.isArray(arr)) return "please enter an array!";
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] != "number")
//       return "please enter array with numerical value only!";
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] == 2 * arr[j]) return "I am not meera array!";
//     }
//   }
//   return "I am a Meera array!";
// };
// console.log(checkMeera([1, -6, 4, -3]));
// or
// let checkMeera = (arr) => {
//   if (!Array.isArray(arr) || !arr.every(Number) )return "please enter an array with numeric value!";
      
//     for (let j = 0; j < arr.length; j++) {
//       if (arr.includes(arr[j]*2)) return "I am not meera array!";
//     }
//     return "I am a Meera array!";
  
// };
// console.log(checkMeera([1,"ff", 4, -3]));

/* Question 5 (Dual array)
Define a Dual array to be an array where every value occurs exactly twice. For example,
{1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
times) Write a function named isDual that returns 1 if its array argument is a Dual array.
Otherwise it returns 0.
*/

// Pseudocode
// - Define a function isDual(arr)
// - Check if arr is an array
//   - If not → return "please enter an array"
// - Check if all elements are numbers
//   - If not → return "please enter array with numerical value only!"
// - If length of arr is odd → return 0
// - Sort the array
// - Loop i from 0 to arr.length step 2
//   - If arr[i] != arr[i+1] → return 0
// - Else return 1

// let isDual = (arr) => {
//   if (!Array.isArray(arr) )
//     return "please enter an array with numeric value only!";

//   // Check if array length is even
//   if (arr.length % 2 !== 0) return 0;

//   // Sort the array
//   arr.sort((a, b) => a - b);

//   // Check if elements come in pairs
//   for (let j = 0; j < arr.length; j += 2) {
//     if (arr[j] !== arr[j + 1]) return 0;
//   }

//   return 1;
// };

// // Test cases
// console.log(isDual([1, 4, 4, 2, 1, 3, 3, 2])); // 1
// console.log(isDual([1, 2, 1, 3, 3, 2])); // 1
// console.log(isDual([2, 5, 2, 5, 5])); // 0
// console.log(isDual([3, 1, 1, 2, 2])); // 0
// console.log(isDual([1, 2, 3, 4])); // 0
// console.log(isDual([5, 5])); // 1

function count(arr, element){
    let c = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]=== element) c++;
        
    }
    return c;
}
let isDual = arr =>{
    for (let i = 0; i < arr.length; i++) {
    if(count(arr, arr[i]) !== 2) return 0;
    return 1;}
}
console.log(isDual([1, 1,4, 4, 2, 1, 3, 3, 2])); // 1

/* Question 6
Write a function that takes the number of seconds and returns the digital format clock
time as a string. Time should be counted from 00:00:00.
○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
secs.
■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
■ digitalClock(87000) as "00:10:00" It's 00:10 next day.
*/

// Pseudocode
// - Define a function digitalClock(secs)
// - Check if secs is a number
//   - If not → return "pls enter positive numerical value!"
// - Calculate totalHours = secs / 3600
// - hours = totalHours % 24
// - remainingSec = secs % 3600
// - minutes = remainingSec / 60
// - seconds = remainingSec % 60
// - Format hours, minutes, seconds with leading zeros
// - Return "HH:MM:SS"

// function digitalClock(secs) {
//   if (typeof secs != "number" || secs < 0)
//     return "pls enter positive numerical value!";
//   let totalHours = parseInt(secs / 3600); //parseInt (or Math.floor) removes decimals.
//   let hours = totalHours % 24; //Because digital clocks loop after 24 hours, we wrap around.

//   let remainingSec = secs % 3600; //After removing the full hours, this is what’s left to distribute into mins and second.
//   let mins = parseInt(remainingSec / 60); //Convert leftover seconds into minutes.
//   let second = remainingSec % 60;
//   return {}]
//     hours.toString().padStart(2, "0"),
//     mins.toString().padStart(2, "0"),
//     second.toString().padStart(2, "0"),
//   ].join(":"); //str.padStart(targetLength, padString)
// }
// console.log(digitalClock(61201));
// console.log(digitalClock(87000));
// or 
// function formatTime2(seconds){
//     if(!Number.isInteger(seconds) || seconds < 0) return "provide valid seconds";
//     return new Date(seconds *1000).toISOString().slice(11,19);
// }

// console.log(formatTime2(5454));







