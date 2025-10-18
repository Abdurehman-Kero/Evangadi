//write a function that takes a string and returns the hidden word in it.
//ADFhAFAiAFD  = hi
/* pseudcode 
Define a function findHiddenWord(inputString)
check if the argument is String or not
  if it's not string return pls enter String only
  else {
    compare each character whether it's equal to the lower case of that particular character 
   if it's equal, add(concat) to the hiddenWord variabe
   finally return the hiddenWord which is our answer
    }


 */

// function findHiddenWord(inputString = "pls enter string first") {
//     if (typeof inputString !== "string") {
//         return "please write string only!"

//     }
//     else
//     {
//         let hiddenWord = "";
//         for (let i = 0; i < inputString.length; i++) {
//           if (inputString[i] == inputString[i].toLowerCase()) {
//             hiddenWord = hiddenWord + inputString[i];
//           }

//         }
//         return hiddenWord;
//     }

// }
// console.log(findHiddenWord( ));
/*
question number 2
pseudoCodeo
define a function canNest with arr1 and arr2 parameter
check if both the parameters are arr
 if not, return pls enter arry value only
sort arr1 on the variable called arr1Sorted
sort arr2 on the variable called arr2sorted
check if the min value of arr1sorted is greater than min value of arr2sorted 
if not, return false
check if the max value of arr1sorted is less than that of arr2sorted
if not, return false

 */

// function canNest(arr1, arr2) {

//     // if (!(Array.isArray(arr1)&&Array.isArray(arr2))) {
//     //     return "pls enter array value only"
//     // }
//     let arr1Sorted = arr1.sort((a, b) => a - b);
//     let arr2Sorted = arr2.sort((a, b) => a - b);
//     if(((arr2Sorted[0] < arr1Sorted[0])&& (arr2Sorted[arr2Sorted.length-1] > arr1Sorted[arr1Sorted.length-1])))
//     {
//             return true;

//         }
//         else {
//             return false;
//         }

// }
// console.log(canNest([4,11], [3,12]));

// function nestedArray(arr1, arr2){
//     let min1 = Math.min(...arr1)
//     let min2 = Math.min(...arr2);
//     let max1 = Math.max(...arr1);
//     let max2 = Math.max(...arr2);
//     if (min1 > min2 && max1 < max2 ) return true;
//     return false;

// }
// console.log(nestedArray([4, 5, 6], [3, 6,7]));
// Magic Array
// an array is defined to be a magic array if the sum of the primes in the array is equal to the first elemtnt of the array.
// variable to add primes (sum)
// check if primes or not
//  if yes add on sum
// At the end
//  compare the sum withthe first value
//  if equal then it is magic array
// Define function isMagicArray(a)
//  define a variable
//    var sum = 0;
//  - For every element
//   - for loop (i = 0;, i< a.length)
//     -check if prime or not
//       for loop (j = 2; j<(num/2 +1))
//         if (num % j == 0)
//           if false
//             sum = sum +num;
//     - if a[0] == sum;
//        return 1;
//        else
//         return 0;
//  function isMagicArray(a) {
//   var sum = 0;
//   for (let i = 0; i < a.length; i++) {
//      let num = a[i];
//      if(num == 2){
//       sum = sum +num;
//      }
//      let isPrime = true;
//      if (num > 2) {
//        for (let j = 2; j < (num / 2 +1); j++) {
//          if (num % j == 0) {
//           isPrime = false;
//           //

//          }

//        }
//        if (isPrime) {
//         sum = sum + num;

//        }

//      }

//   }
//   if (a[0] == sum) {
//     return 1;
//   }
//   else {
//     return 0;
//   }

//  }
//  console.log(isMagicArray([8,5,3]));
// #write a function that check whether the number is prime or not
/*  

  pseudocode
  declare a function that takes num as a parameter
  check the argument is a number data type
    if not, return "pls enter the number value"
  check if it's less than or equal to 1
   if it's, return 0;
   if the number is 2,return 1;
   create a for loop with an index i starting from 3, untill square root  of the number and increment by two
   check if it's devisibel by each index
     if it's divisible, return 0
     else return 1


 */

// function isPrime(num){
//   if (typeof num !== "number") return "pls enter valid number"
//   if (num <= 1) return false;
//   if (num == 2) return true;
//   if (num % 2 == 0) return false;
//   for (let i = 3; i <= Math.sqrt(num); i+=2) {
//    if (num % i == 0) return false;
//   }
//   return true;

// }
// // console.log(isPrime());

// function isMagicArray(array) {
//   let sumOfPrime = 0;
//   for (let i = 0; i < array.length; i++) {
//     let prime = isPrime(array[i])
//       if(prime){
//         sumOfPrime += array[i];
//       }
//   }
//   if (sumOfPrime == array[0]) return 1;
//   return 0;
// }
// console.log(isMagicArray([21, 3, 7, 9, 11, 4, 6]));

// // solution
// function isPrime(num){
//   if(num <= 1) return false;
//   if(num === 2) return true;
//   if(num %2 === 0) return false;
//   for (let i = 3; i <= Math.sqrt(num); i+=2) {
//      if (num % i ===0) return false;
//   }
//   return true;
//   }
//  console.log(isPrime(13));
// function isMagicArray(array) {
//   let sumOfPrimes = 0;
//   for (let i = 0; i < array.length; i++) {
// let prime = isPrime(array[i]);
// if (prime) {
//   sumOfPrimes +=array[i];
// }
// }
// if (sumOfPrimes == array[0]) return 1;
// return 0;
// }
// console.log(isMagicArray([21,3,7,9,11,4,6]));

// define a function
//  takes array as an argukment
// for every
//  for loop
//   get the first value from index i
//   get the seond value from i +1
//   compare with each other
//    if the first value is greater, switch position
//    -temp = array[i]
//    -array[i] = second value
//    -array[i+1] =temp

// function sortArray(a){
//   let numbers = a;
//   let checker = true;
//   while (checker){
//     checker = false;
//     for (let i = 0; i < numbers.length -1; i++) {
//     if (numbers[i] > numbers[i+1]) {
//       checker = true;
//       let temp = numbers[i];
//       numbers[i] = numbers[i+1];
//       numbers[i+1] = temp;
//     }
//     }
//   }
//   return numbers;
// }
// console.log(sortArray([5,4,2,1,3]));
// let array = [5,4, 3,100, 9,8,1,77, 2]
// function bubleSort(array) {
//   for (let j = 0; j < array.length; j++) {
//     let isSorted = false;
//    for (let i = 0; i < array.length-1 ; i++){
//      if (array[i] > array[i + 1]) {
//        let temp = array[i];
//        array[i] = array[i + 1];
//        array[i + 1] = temp;
//           isSorted = true;
//       }
//     } 
//     if (!isSorted) {
//      break;
//      }
//   } 
//   console.log(array);
// }
//  bubleSort(array);

// function sortArray(array) {
//   let isSorted = true;
//   while (isSorted) {
//     isSorted = false;
//     for (let i = 0; i < array.length - 1; i++) {
//       if (array[i] > array[i + 1]) {
//         isSorted = true;
//         let temp = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = temp;
//       }
//     }
//   }
//   return array;
// }
// console.log(sortArray([5, 7, 1, 4, 2, 88, 9, 10, 12]));




// recursion practice
function rec(n){
  if(n <= 0)
    return
  console.log(n);
  rec(n-1)
  console.log(n);
}
rec(5)