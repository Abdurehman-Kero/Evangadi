// // 1. getElementById() method
// const test1 = document.getElementById("one");
// console.log(test1);
// // 2. querySelector() method
// const test2 = document.querySelector("#tech li");
// console.log(test2);
// // 2. getElementsByClassName() method
// const test3 = document.getElementsByClassName("red");
// console.log(test3);
// // 3. getElementByTagName() method
// const test4 = document.getElementsByTagName("li");
// console.log(test4);
// // 4. querySelectorAll() method
// const test5 = document.querySelectorAll("li");
// console.log(test5);

// // selecting elements (Traversing)
//  const parentElement = document.getElementById("tech")
//  console.log(parentElement);
//  console.log(parentElement.firstElementChild);
// //  console.log(parentElement.firstChild);
//  console.log(parentElement.lastElementChild);

// const apple = document.getElementById("one");
// console.log(apple);
// console.log(apple.parentElement);

// el.className = "pink";
// el.textContent = "ice Cream";
// const somepara = document.createElement("p");
// console.log(somepara);
// somepara.textContent = "Abebe Beso Bela";
// document.body.appendChild(somepara);

// var el = document.getElementById("two");
// console.log(el);
// el.style.backgroundColor = "pink";
// el.style.border = "black solid"
// el.style.fontSize = "30px";
// el.style.color = "white";
// el.style.display = "none";
// el.style.display = "block"
/* const peach = document.getElementById("two");
    const apple = document.getElementById("one");
    function changeBack(){
     peach.style.backgroundColor = "pink"; 
    }
   function removeback(){
    peach.style.backgroundColor ="yellow"
   }
   apple.onclick = changeBack;
   apple.ondblclick =removeback; */

//     const peach = document.getElementById("two");
//     const apple = document.getElementById("one");
//     function changeBack(){
//      peach.style.backgroundColor = "pink";
//     }
//    function removeback(){
//     peach.style.backgroundColor ="yellow"
//    }
//    apple.addEventListener("click", changeBack);
const link = document.getElementById("link");
const defaultpre = (e) => {
  e.preventDefault();
  link.innerHTML = "<h1>Hello World</h1>";
};
link.addEventListener("click", defaultpre);

const form = document.getElementById("formID");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const handleSubmit = (ev) => {
  ev.preventDefault();
  if (fName.value.length === 0) {
    fName.style.backgroundColor = "red";
  }
  if (lName.value.length === 0) {
    lName.style.backgroundColor = "red";
  }
  if (fName.value && lName.value) {
    alert(`Thank you ${fName.value}`);
  }
};
form.addEventListener("submit", handleSubmit);
