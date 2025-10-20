/* Question 1
● Write a function that prints the first 10 integers on the console starting from the number 1 using
the JavaScript for loop.
 */

// const firstTenInt = ()=>{
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);

//   }
// }
// firstTenInt();

/* Question 2
● Write a function that takes a single number as an argument and prints the next 5 numbers in the
console. Note: each output should be displayed on a new line.
○ Test case: If you give 7 to the function, output should look like this:
8
9
10
11
12
 */

// const nextFiveNum = a => {
//   if( typeof a != "number"){
//     console.log("please enter numeric value");}
//   else if( a < 0) {
//     console.log("please enter positive number");
//   }
//   else{
//     for (let i = a + 1; i <= a + 5; i++) {
//       console.log(i);;
//     }
//   }
// }
//  nextFiveNum(8);
/* Question 3
● Write a function that takes a single number and prints the sum of the next 10 numbers after the
given number.
○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
11+ 12+ 13+ 14+ 15+ 16+ 17 = 125) */

// const sum = x =>{
//     let result = 0;
//     if(typeof x != "number") return "please enter numeric value"
//     if( x < 0) return "enter positive value"
//     for (let i = x+1; i <= x+10; i++) {
//         result +=i;
//     }
//     return result;
// }
// console.log(sum(7));

/* Question 4
● Write a function that takes an array as an argument and prints every element of the array on the
console.
○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
1
Hello
8
44
 */

const array = (arr) => {
  if (!Array.isArray(arr)) {
    console.log("enter array value");
  } else {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
};
array([1, "Hello", 8, 44]);
// array(5);

/* Question 5
● Write a function that takes an array as an argument and prints the total number of elements
found in the array. Hint: use a property of the Array object to solve this question.
○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
○ Test case 2: Given the array a = ["world", 13], output should be: 2 */

// const arrayLength = arr =>{
//     if (!Array.isArray(arr))return "enter array only";
//     return arr.length;
// }
// let a = [1, "Hello", 8, 44];
// console.log(arrayLength(a));

/* Question 6
● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
all the numbers in the array.
○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
3 + 0
 */

// const sumOfArrayElement = arr =>{
//     if (!Array.isArray(arr)) return "Enter array only!";
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'number') {
//             console.log(`Error: Element at index ${i} is not a number. Skipping this element.`);
//             continue; // Skip to the next iteration if not a number
//         }
//         sum += arr[i];
//     }
//     return sum;
// }
// let a = [5, 6, 99, 8, 76, 4, 68, 44];
// console.log(sumOfArrayElement(a));

// /* Question 7
// ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102
// */
// const diffOfEvenAndOdd = arr => {
//     if (!Array.isArray(arr)) return "Enter array only!";
//     let sumEven = 0;
//     let sumOdd = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'number') {
//             console.log(`Error: Element at index ${i} is not a number. Skipping this element.`);
//             continue; // Skip to the next iteration if not a number
//         }
//         else if (arr[i] %2 == 0) {
//             sumEven += arr[i];
//         } else{
//             sumOdd += arr[i]
//         }

//     }
//     return sumEven - sumOdd;
// }
// console.log(diffOfEvenAndOdd([5, 6, 99, 8, 76, 4, 68, 44]));
/* Question 8
● Write a function that takes an array as a parameter and logs in the console the elements that have
even indexes only. Notice: this question is not asking you to log elements with even value, but
elements that are located on even indexes)
○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
should be:
5
99
76
68
○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
be:
11
3
car
 */

// const evenIndexArrElement = arr =>{
//      if (!Array.isArray(arr)) return "Enter array only!";
//      for (let i = 0; i < arr.length; i++) {
//         if (i %2 ==0) {
//             console.log(arr[i]);
//         }
//      }

// }
// evenIndexArrElement([5, 6, 99, 8, 76, 4, 68, 44]);

/* Questions on built in JavaScript methods
***********************************
Questions 9 and 10 are dependent on the sampleArray provided below:
let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
Question 9
Write a function that takes the sampleArray as a parameter, removes the last element from the array,
adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method */

// let sampleArra = [5, 6, 99, 8, 76, 4, 68, 44];

// Questions 9
// function sampleArr(sampleArray) {
//   sampleArray.pop();

//   sampleArray.push(32);
//   return sampleArray;
// }
// let x = sampleArr(sampleArra);
// console.log(x);
/* Question 10
● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
and prints the sorted array on the console
// Use the sort method. Make sure you understand just using the sort() method alphabetically.
You should use this sorting syntax - sort(function(a, b){return a-b}); */
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// const sortedArray = (sampleArray) => {
//   sampleArray.sort(function (a, b) {
//     return a - b;
//   });
//   return sampleArray;
// };
// console.log(sortedArray(sampleArray));
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// const sortedArray = sampleArray =>{
//     sampleArray.sort((a,b) => a-b);
//     return sampleArray;
// }
// console.log(sortedArray(sampleArray));
/* Questions on JavaScript objects
****************************
The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.*/
let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },

    {
      name: "Challa",
      age: 22,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
};
/* Question 11
● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
console
○ // Use the dot notation "." to call the property you want to change */

// evangadiClass.lengthOfCourse = "5 Month";
// console.log(evangadiClass);

/* Question 12
● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
console
○ // Use an array method */

// evangadiClass.topicsCovered.push("Bootstrap");
// console.log(evangadiClass);
/* Question 13
● Write a function that takes the "evangadiClass" object as an argument and calculates the average
age of the class. Print the result on the console */
// const average = (a) => {
//   let sum = 0;
//   let numOfStud = a.students.length;
//   for (let i = 0; i < numOfStud; i++) {
//     sum += a.students[i].age;
//   }
//   return sum / numOfStud;
// };
// console.log(average(evangadiClass));
/* Question 14
● Write a function that takes the "evangadiClass" object as an argument and calculates the
percentage of male students in the class. Print the result on the console
*/
// const malePercentage = (a) => {
//   let totalStud = a.students.length;
//   let maleCount = 0;
//   for (let i = 0; i < totalStud; i++) {
//     if (a.students[i].sex == "M") {
//       maleCount++;
//     }
//   }
//   return `Male percentage out of ${totalStud} student is: ${maleCount*100/totalStud}%`;
// };
// console.log(malePercentage(evangadiClass));

//or

// const malePercentage = (a) => {
//   let totalStud = a.students.length;
//   let maleStudents = a.students.filter((student) => student.sex == "M");
//   console.log(maleStudents);
//   let maleCount = maleStudents.length;
//   return `Male percentage out of ${totalStud} student is: ${maleCount*100/totalStud}%`;
// };
// console.log(malePercentage(evangadiClass));

/*  Question 15: Test the divisors of three
● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
numbers (on the console) between low and high, and for each of these numbers print
whether or not the number is divisible by 3. If the number is divisible by 3, print the word
"div3" directly after the number.
*/

// function numberList(a,b){
//   if(typeof a != "number" || typeof b !="number") return "please enter numerical value only";
//   for (let i = a; i < b; i++) {
//      if (i % 3 == 0) {
//       console.log(`${i} div3`);
//      } else{
//       console.log(i);
//      }
//   }
// }
// numberList(1,10);
/* Question 16: The famous coding interview question (FizzBuzz)
● Write a function that prints in the console the numbers from 1 to 100. But for multiples of
three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
numbers which are multiples of both three and five print "FizzBuzz".
 */

// const FizzBuzz = function () {
//   let x = 1;
//   let y = 100;
//   for (let i = 1; i < 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//       console.log("Fizz");
//     } else if (i % 5 == 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };
// FizzBuzz();

/* Question 19: Evens number
● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
integer argument is an Evens number. The function prints 0 otherwise. */
// function EvensNumber(a){
//   if (typeof a != "number") return "please enter numerical value";
//   else {
//     a.toString;
//     for (let i = 0; i < a.length; i++) {
//       if (parseInt(a[i]) % 2 == 0) {
//        console.log(0);
//        return;
//       } else if (parseInt(a[i]) % 2 != 0) return `${a} is not Evens number`;
//       return `${a} is Evens number`;
//     }
//   }
// }
// console.log(EvensNumber(24434));

// function isEvens(num) {
//   const numStr = String(num);
//   for (let i = 0; i < numStr.length; i++) {
//     const digit = parseInt(numStr[i]);
//     if (digit % 2 !== 0) {
//       console.log(0);
//       return;
//     }
//   }
//   console.log(1);
// }
// isEvens(2239);
// or

// function isEvens(num) {
//   // Handle negative numbers by taking the absolute value
//   num = Math.abs(num);

//   // Handle the case of 0 separately as 0 is considered an even digit
//   if (num === 0) {
//     console.log(1);
//     return;
//   }

//   while (num > 0) {
//     let digit = num % 10; // Get the last digit
//     if (digit % 2 !== 0) {
//       // Check if the digit is odd
//       console.log(0);
//       return; // If any digit is odd, it's not an Evens number
//     }
//     num = Math.floor(num / 10); // Remove the last digit
//   }
//   console.log(1); // If all digits are even, print 1
// }
