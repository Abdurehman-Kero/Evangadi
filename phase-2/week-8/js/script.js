/* Question 1: Find out the answers for these by displaying it on the console. You will need to
compare the value on the left of the operator with the value on the right. Please note that
the answer for each question below should be either True or False.
A. 24 > 3
B. 2 < "12"
C. 0 == 2
D. 2.0 === 2
E. 2.0 == "2"
F. 2 < "John"
G. 2 > "John"
H. "2" < "2"
I. "2" > "12"
J. 1 == 1 || 3 == 2 || 3 == 7
K. 1 == 1 && 2 == 2 && 3 == 7
L. 1 == 1 || 2 == 2 && 3 == 7
M. 1 == true && 0 > true || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1") */
// A
console.log(24 > 3); // true    
// B
console.log(2 < "12"); // B // true
// C
console.log(0 == 2); // C // false
// D
console.log(2.0 === 2); // D // true
// E
console.log(2.0 == "2"); // E // true
// F
console.log(2 < "John"); // F // false
// G
console.log(2 > "John"); // G // false
// H
console.log("2" < "2"); // H // false
// I
console.log("2" > "12"); // I // true
// J
console.log(1 == 1 || 3 == 2 || 3 == 7); // J // true
// K   
console.log(1 == 1 && 2 == 2 && 3 == 7); // K // false
// L   
console.log(1 == 1 || 2 == 2 && 3 == 7); // L // true
// M
console.log(1 == true && 0 > true || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")); // M // true

// Question 2: Answer the following questions. Make sure to think about each question and
// try to solve it in your brain before you see the result on the console.
// 1. Which expression returns true?
// A/ ‘1’ === 1
// B/ 1 == 1
// C/ 1 === 1
// D/ B and C from above
// 2. What is the value of x in this statement?
// let x = (1 == true);
// A/ 1
// B/ true
// C/ false
// D/ undefined
// 3. What is the value of y from the following statements?
// let x = 10;
// let y = (x > 5) && (x < 15)
// A/ 10
// B/ 5
// C/ 15
// D/ true
// 4. What is the value of x from the following statements?
// let x = 5;
// x += 3;
// A/ 3
// B/ 8
// C/ 15
// D/ 5
// 5. What is the value of y from the following statements?
// let x = 10;
// let y = x++;
// A/ 10
// B/ 11
// C/ 12
// D/ 13
// 6. What is the value of y in the following statements?
// let x = 1;
// let y = (x !== 2);
// A/ 1
// B/ 2
// C/ false
// D/ true
// 7. What is the output of (+”2”+2)?
// 8. What is the output of (7 % 3)?
// 9. What is the output of (2+true)?
// 1. Which expression returns true?
console.log('1' === 1); // false    
console.log(1 == 1); // true
console.log(1 === 1); // true
console.log('B and C from above'); // true (is the correct answer)
// 2. What is the value of x in this statement?
var x = (1 == true);
console.log(x); // true (B is the correct answer)
// 3. What is the value of y from the following statements?
let x = 10;
let y = (x > 5) && (x < 15);
console.log(y); // true (D is the correct answer)
// 4. What is the value of x from the following statements?
x = 5;
x += 3;
console.log(x); // 8 (B is the correct answer)
// 5. What is the value of y from the following statements?         
x = 10;
y = x++;
console.log(y); // 10 (A is the correct answer)
// 6. What is the value of y in the following statements?
x = 1;
y = (x !== 2);
console.log(y); // true (D is the correct answer)
// 7. What is the output of (+”2”+2)?
console.log(+"2" + 2); // 4 (the output is 4, as "2" is converted to a number)
// 8. What is the output of (7 % 3)?
console.log(7 % 3); // 1 (the output is 1, as 7 divided by 3 leaves a remainder of 1)
// 9. What is the output of (2+true)?   
console.log(2 + true); // 3 (the output is 3, as true is converted to 1)
//  Question 3:
// ● Write a simple script that adds 1 and 2 and displays the result on the console
// ● Use variables a, b & c
// ● Use "let" to declare the variables
// ● Use the formula c = a + b
// ● Display the value of c on console
//******************************* */
// Declare variables a, b, and c
let a = 1;
let b = 2;
let c = a + b;
// Display the value of c on console
console.log(c); // 3

//************************* */

// Question 4:
// ● Create a variable to hold your first name
// ● Create another variable to hold your last name
// ● Create a third variable to hold your full name
// ● Assign the value of your first name and last name to the first two variable
// ● Use "+" to concatenate your first name and last name to assign the result to your last name's
// variable
// ● Don't forget to include space between your first and last name
// ● Display the value of your full name on the console

// Declare variables for first name, last name, and full name
let firstName = "Abdurehman ";
let lastName = "kero";
let fullName = firstName + lastName; // Concatenate with a space in between
// Display the value of full name on the console    
console.log(fullName); // "Abdurehman kero" 

console.log(NaN != NaN);// the answer is true, but why?
// Variable naming standard
// 1.camelCase -variable , function
// 2.PascalCase -main folder 
// 3.snake_case - sub folders
// 4.kebab-case - for css class name


