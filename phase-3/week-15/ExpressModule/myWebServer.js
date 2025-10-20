//===>6. myWebServer.js
//  const express = require("express");
//  const app = express();

// app.get("/", (req, res)=>{
//   console.log("request recieved");
//   res.send("request send and proceed")
// });
// app.listen(1234, ()=>{
//   console.log("Server running on http://localhost:1234")
// })

// //===>7.

// const express = require("express");
// const random =require("./randomNumber");
// const app = express();
// app.get("/", (req, res)=>{
//   const num = random();
//   // console.log(`Generated random number is :${num}`);
//   res.end(`Generated random number is :${num}`)
// })
// app.listen(1234, (err)=>{
//   if(err){
//     console.log("Something went wrong!");
//   }
//    console.log("Server running on http://localhost:1234");
// })

//===>8.// myWebServer.js
const express = require("express");
const app = express();
app.use(express.static("./static/apple-html-css-replica"));
app.use(express.static("./static/apple-html-css-replica/about.html"));
// app.get("/about", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "static", "apple-html-css-replica", "about.html")
//   );
// });
app.listen(1234, (err) => {
  if (err) {
    
    console.log("something went wrong!");
  }
  console.log("server is running on http://localhost:1234/");
});
