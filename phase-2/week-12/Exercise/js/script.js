// /* Question 1: The following three questions are based on the two paragraphs under the
// section which says "For Question 1" in the index.html file.
//   */
// //==================== question #1 start here!!=======================//
// 1.1 Select the element with an id of "sample1".
const twoParagraph = document.getElementById("sample1");


// 1.2 Print the element itself on the console upon page refresh.
console.log(twoParagraph);

// 1.3 Print the content of the element on the console upon page refresh.
console.log(twoParagraph.textContent);

//====================question #2 start =======================//
/* Question 2: The following questions are based on the HTML code found under the
section labeled "For question 2".

*/
// //2.1 Select the element with an ID of "techCompanies" and display it on your console. (Do not use "querySelector" for this question)

// const techCompany = document.getElementById("techCompanies");
// console.log(techCompany);
// // 2.2 Use "querySelector" to select the element with an ID of "techCompanies" and display it on your console.
// const techCompanies = document.querySelector("#techCompanies");
// console.log(techCompanies);

// // 2.3 How many tech companies are listed under the ul element with an id of
// // "techCompanies"? Use "querySelectorAll" to count the total.

// // Select the ul element with the ID "techCompanies"
// const techCompaniesList = document.getElementById("techCompanies");

// // Select all li elements within the techCompaniesList
// const companies = techCompaniesList.querySelectorAll("li");

// // Get the total count of the li elements
// const totalCompanies = companies.length;

// // Display the total count
// console.log(`Total tech companies are: ${totalCompanies}`);
// // 2.4 Select all elements with a class name of "red" and display them on the console. Use both "querySelectorAll" and "getElementByClass"
// // using getElementsByClassName
// const redClass = document.getElementsByClassName("red");
// console.log(redClass);
// // using querySelectorAll
// const redClasses = document.querySelectorAll(".red");
// console.log(redClasses);

// //********************************** */

// // 2.5 Create a new li HTML element with a content of "Facebook" and display it on console
// const newLi = document.createElement("li");
// newLi.textContent = "Facebook";
// console.log(newLi);

// //********************************** */
// // 2.6 Give the newly created element a class of "blue" using JavaScript

// newLi.className = "blue";

// //********************************** */
// // 2.7 Append the newly created element next to the the "Sony" li element
// techCompany.append(newLi);
// //********************************** */
// // 2.8 How many of the tech companies are labeled blue? Find the result using JavaScript and display the result inside the "blueCompanies" div.

// const blueTechCompany = document.querySelectorAll("#techCompanies .blue");
// totalBlueCompany = blueTechCompany.length;
// const blueCompanies = document.getElementById("blueCompanies");
// blueCompanies.append(`Total blue companies are : ${totalBlueCompany}`);

//====================question #3 start here!! ==============//
/* Question 3:
Change the background color of the page to light-blue (#99ecff) when clicked on the text
that says "Yes". If there is a background color set already, change it to none when clicked
on "No"
Hint: First, write two functions to alter the backgroundColor of the page. One to add a
background color, another to remove. Then, select the "yesBackground" or
"noBackground" element and bind the selected element with the click event. Finally,
attach the function you wrote to alter the background color when the respective element
is clicked on. */

// const addBackground = () => {
//   document.body.style.backgroundColor = "#99ecff";
// };
// const removeBackground = () => {
//   document.body.style.backgroundColor = "";
// };
// const yesBackground = document.getElementById("yes");
// const noBackground = document.getElementById("No");
// yesBackground.addEventListener("click", addBackground);
// noBackground.addEventListener("click", removeBackground);

//====================question #4 start here!! ==============//
/* Question 4:
A form with two text fields is provided under the section which says "For question 4".
Write a JavaScript code which takes the values of the two fields, checks if they are
number values and calculate the sum of the two numbers.
1. Display the result on the console
2. Display the result underneath the form
3. If any of the numbers provided is not a number, display a message that says
"Please enter numerical values only" underneath the form */
const form = document.getElementById("adder");
const fValue = document.getElementsByName("first-value");
// console.log(fValue);
const sValue = document.getElementsByName("second-value");
const resultDiv = document.getElementById("sum");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (fValue[0].value === "" || sValue[0].value === "") {
    resultDiv.textContent = "Both fields are required";
    return;
  }
  if (isNaN(fValue[0].value) || isNaN(sValue[0].value)) {
    resultDiv.textContent = "Please enter numerical values only";
  } else {
    const sum = Number(fValue[0].value) + Number(sValue[0].value);
    // console.log(sum);
    resultDiv.textContent = `The sum of ${fValue[0].value} and ${sValue[0].value} is: ${sum}`;
  }
});
