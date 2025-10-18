// let first = {
//       names(){

//         console.log("Dev A");}

// }

// let second ={

//       names(){
//         console.log("Dev B");

// first.names()
// second.names()
//     } }

// wrapping our code inside braces
// big question on this part

// (names = () => {
//   console.log("Dev B");
// })
// (
//   (names = () => {
//     console.log("Dev A");
//   })
// );

// names();
// // names();


// immediately invoked function expression 
// ( function () {
//   console.log("Dev A");
//   let x = 7;
//   console.log(x);
//   function addOne(){
//     console.log(x +1);
    
//   }
//   addOne();
  
// })();
// // Example 1:
// var eat = () => {
// console.log("Kebede ate");
// };
// // Example 2:
// var eat = () => {
// console.log("Hana ate");
// };
// eat(); // This will print “Hana ate” by overriding the function
// under Example 1
// Example: 
// var a = 3;
// console.log(window);
// You will see our variable “a” and its assigned value under the
// window object.
// console.log(window.a);
// will print 3. This means our var “a” has now become one of
// the properties of the window object.
// console.log(global); // will print all the available JS objects
// console.log(global.console); // will print the console object
// console.log(module);
// index.js
// function eat() {
// console.log("Hana ate");
// }
// module.exports.e = eat; // exporting eat() function
// console.log(module.exports); // returns { e: [Function:eat] }

function eat() {
console.log("Hana ate");
}
function dance() {
console.log("kebede danced");
}
export {dance, eat }; // exporting both functions