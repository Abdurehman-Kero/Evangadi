// console.log("****For Question 1=****");
// // !------------Question #1 starts here!------------!
// //1.1. Select the element with an id of "sample1" using jQuery.

// const twoPara = $("#sample1");
// //1.2. Print the element itself on the console upon page refresh.
// console.log(twoPara);
// //1.3. Print the content of the element on the console upon page refresh. Use jQuery to select the content of the element
// console.log(twoPara.text());
// // console.log(twoPara.text());

// // !------------Question #1 end here!------------!

// // !------------Question #2 starts here!------------!

// // 2.1. Select the element with an ID of "techCompanies" and display it on your console.

// const techCompanies = $("#techCompanies");
// console.log(techCompanies);

// // 2.2. How many tech companies are listed under the ul element with an id of "techCompanies"?

// const companies = $("ul > #techCompanies").length;
// console.log(companies);
// // 2.3. Select all elements with a class of "red" and display them on the console.
// const redCompany = $(".red");
// console.log(redCompany);
// // 2.4. Create a new li HTML element with a content of "Facebook" and display it on console
// const newLi = $("<li>Facebook</li>");
// console.log(newLi[0]);
// // 2.5. Give the newly created element a class of "blue" using jQuery
// newLi.addClass("blue");
// console.log(newLi[0]);
// // 2.6. Append the newly created element next to the the "Sony" <li> element
// $("#techCompanies").append(newLi);
// console.log(techCompanies[0]);

// // 2.7. How many of the tech companies are labeled blue? Find the result using jQuery and display the result inside the "blueCompanies" div.

// const blueCompanies = $(".blue").length;
// $("#blueCompanies").append(`Total blue companies are: ${blueCompanies}`);

// !------------Question #2 end here!------------!



// !------------Question #3 starts here!------------!

/* A form with two text fields is provided under the section which says "For question 3". Write a
jQuery code which takes the values of the two fields, checks if they are number values and
calculate the sum and average of the two numbers.
3.1. Display the result on the console
3.2. Display the result underneath the form
3.3. If any of the numbers provided is not a number, display a message that says "Please
enter numerical values only" underneath the form
 */


// Get form elements
const btn = $("#btn");
const in1 = $("#in1");
const in2 = $("#in2");

$(function () {
  // Run when button is clicked
  btn.click((e) => {
    e.preventDefault();

    // Get input values as strings
    const val1Str = in1.val().trim();
    const val2Str = in2.val().trim();

    // Convert to numbers
    const val1 = parseFloat(val1Str);
    const val2 = parseFloat(val2Str);

    // Remove any previous error messages
    $("#err").remove();

    // -------------------------------
    // Question 3.3 → Validate inputs
    // -------------------------------
    if (val1Str === "" || val2Str === "") {
      // Handle empty fields
      let errorLabel = $("<label id='err'></label>")
        .text("Both fields are required")
        .css("color", "red");
      $("#question3").append(errorLabel);
      return;
    } else if (isNaN(val1) || isNaN(val2)) {
      // Handle non-numerical input
      let errorLabel = $("<label id='err'></label>")
        .text("Please enter numerical values only")
        .css("color", "red");
      $("#question3").append(errorLabel);
      return;
    }

    // If inputs are valid, calculate sum and average
    const sum = val1 + val2;
    const avg = sum / 2;

    // -------------------------------
    // Question 3.1 → Console output
    // -------------------------------
    console.log("Sum:", sum);
    console.log("Average:", avg);

    // -------------------------------
    // Question 3.2 → Display under form
    // -------------------------------
    $("#dsum").text(sum);
    $("#davg").text(avg);
  });
});


// !------------Question #3 end here!------------!

// !------------Question #4 start here!------------!
/*<form id="question4">
<label>First Name: <input type="text" id="forF" required></label><br>
<label>Last Name: <input type="text" id="forL" required></label><br>
<label>Email: <input type="email" id="email" required></label><br>
<button type="submit">Submit</button>
</form>

<div class="result"></div>

*/
$(function () {
  const form = $("#question4");

  form.submit((event) => {
    event.preventDefault();
    $("#err").remove();

    let input1 = $("#forF").val().trim();
    let input2 = $("#forL").val().trim();
    let email = $("#email").val().trim();

    if (input1 === "" || input2 === "" || email === "") {
      let errorLabel = $("<label id ='err'></label>")
        .text("All the fields are required")
        .css("color", "red");
      form.prepend(errorLabel);
      return;
    } else {
      form.hide();
      $(".result").html(
        `First Name: ${input1}<br>
         Last Name: ${input2}<br>
         Email: ${email}
        <br><br><br><br><br>`
      );
    }
  });
});

// !------------Question #4 end here!------------!
