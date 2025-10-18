// // let apple = $("#one");
// // console.log(apple);
// // let redElements = $("#two");
// // console.log($(redElements));
// // first
// // console.log($("li"));
// $("li").first().css("background-color", "bisque");
// const el = $("#one");

// // console.log(el.text());
// // console.log($("li[id=one]").text());
// // console.log(el.remove());
// // console.log(el.html());
// el.addClass("abe");
// el.removeClass("abe");
// el.css("background-color", "orange");
// el.css({ "background-color": "orange", color: "#fff", width: "120px" });
// let a = $("#listOfFruits li").attr("name", "augest");
// console.log(a);
// $("#title").on("click", changeBackground);
// function changeBackground() {
//   $("body").css("background", "red");
// }
// $("#registration-form").on("submit", function (e) {
//   e.preventDefault();
//   let firstInput = $(".first-name").val();
//   let secondInput = $(".second-name").val();
//   console.log(firstInput);
//   console.log(secondInput);
// });
// let le = $("#listOfFruits");
// le.hide();
// $(".fruits-menu").on("click", abebe);
// function abebe() {
//     let le = $("#listOfFruits").show();

// }

// $(".fruits-menu").on("click", abebe);
// function abebe() {
//     let le = $("#listOfFruits");
//     le.toggle();

// }
// $(".fruits-menu").on("click", abebe);
// function abebe() {
//     let le = $("#listOfFruits");
//     le.fadeToggle();

// }
// $(".fruits-menu").on("click", abebe);
// function abebe() {
//     let le = $("#listOfFruits");
//     le.slideToggle();

// }
// $(".fruits-menu").on("click", abebe);
// function abebe() {
//   let le = $("#listOfFruits");
//   le.animate(
//     {
//       width: "500px",
//       opacity: 0.9,
//       fontSize: "3em",
//       borderwidth: "10px",
//     },
//     500
//   );
// }
// function orderPizza(callBack){
//   console.log("order pizza");
//   setTimeout(()=> {
//     const pizza = "🍕";
//     console.log(`Your ${pizza} is ready`);
//     callBack(pizza)
//   }, 2000)
// }
// function pizzaReady(pizza){
//   console.log(`Eat your ${pizza}`);
// }
// orderPizza(pizzaReady);
// console.log("call a friend");
// async function logData(){
//   try { 
//     let response = await fetch("https://randomuser.me/");
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     const  user = data.results[0];
//     console.log(user);

//   } catch (error) {
//     console.log(error, "tebelasheko");
    
//   }
// }
// logData();
 function checkWeather(){
  return new Promise((resolve, reject) => {
    const isSunny = Math.random() > 0.5;
    setTimeout(() => {
      if (isSunny) {
        resolve("It's sunny today!");
        
      } else{
        reject("It's rainy today!");
      }
    }, 1500);
  });
 }

 checkWeather()
  .then((weaather) => console.log(weaather))
  .catch((badWeather) => console.log(badWeather));
  

  Promise.resolve("Start")
   .then((val) => {
    console.log(val);
    return "Next";
   })
   .then((val) => {
    // console.log(val);
    throw new Error("something went wrong");
   })
   .catch((err) => {
    console.log("Caught error:", err.message);
    return "Recovered";
   })
   .then((val) => {
    console.log("Final value:", val);
   })