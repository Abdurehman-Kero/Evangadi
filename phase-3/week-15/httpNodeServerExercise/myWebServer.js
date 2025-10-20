import http from "http";

// //===>6. myWebServer.js

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end("<h1>Request received and processed</h1>");
// });

// server.listen(1234, (err) => {
//   if (err) {
//     console.log("Error starting server:", err);
//   } else {
//     console.log("Server running on http://localhost:1234");
//   }
// }); 

//===>7. 
// import { random } from "./randomNumber.js"; // import the function

// const server = http.createServer((req, res) => {
//   const randomNum = random();  
//   console.log("request received");
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end(`<h2>Random number: ${randomNum}</h2>`);
// });

// server.listen(1234, () => {
//   console.log("Server running on http://localhost:1234");
// });


//===>8.// myWebServer.js
  
// import fs from "fs";
// import path from "path";
// const __filename = import.meta.filename;
// const __dirname = import.meta.dirname;  
// const server = http.createServer((req, res) => { 
//    if (req.url === "/") {
//      req.url = "/index.html";
//    }  
//    const requestedFile = path.join(
//      __dirname,
//      "static",
//      "apple-html-css-replica",
//      req.url
//    );
  
//   fs.readFile(requestedFile, (err, content) => {
//     console.log("request recieved!");
//     if (err) { 
//       res.end("404 Not Found");
//     } else {  
//       res.end(content);
//     }
//   });
// });

// server.listen(1234, () => {
//   console.log("Server running on http://localhost:1234");
// });


