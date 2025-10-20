// const express = require("express");

// const os = require('os');
// console.log(os);
// const freemem = os.freemem()
// console.log(freemem);
// const platform = os.platform()
// console.log(platform);

// const fs = require("fs");
// const { request } = require("http");

// fs.readFile("./abebe.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File content:", data);
// });
// fs.writeFile('example.txt', "Hellow world", (err)=>{
//   if (err) console.log(err);
//   console.log("File has been saved successfully");
// })
// fs.readFile("abebe.txt", "utf8", (err, data)=>{
//   if (err)console.log(err);
//   console.log(data);
// })
// const path = require("path");
// const { dir } = require("console");
// // console.log(__filename);
// // console.log(__dirname);

// const filePath = path.join(__dirname, "example.txt");
// // console.log("File path: ", filePath);

// const baseName = path.basename(filePath)
// // console.log(baseName);
// const dirName =path.dirname(filePath);
// console.log(dirName); 
const path = require("path");

const fs= require("fs");
const http = require("http");
const server = http.createServer( (req, res)=>{
 let filePath = req.url;
 if(filePath === "/"){
  filePath = "index.html"

 }
 let requestedFile = path.join(__dirname,filePath);
 console.log(requestedFile);
 fs.readFile(requestedFile, "utf8", (err,content)=>{
  if(err) console.log(err);
  else{
    const mime = mimetypelookup(filePath);
    
    res.writeHead(200, {"content-type": mime})
    res.end(content)
  }

 })
})
server.listen(5000, function(){
  console.log(`it's listening http://localhost:5000`);
})
// // 1: Getting detail information of a file from the pathba
// const path = require("path");

// console.log("Olla");

// console.log(__filename);
// // path.parse() example
// // File name of the current file
// const fileNameParsed = path.parse(__filename);
// console.log(fileNameParsed);

// const fileName = fileNameParsed.name;
// console.log(fileName);

// // File name from any url
// const urlNameParsed = path.parse(
//   "https://github.com/powerline/fonts/blob/master/install.ps1"
// );
// console.log(urlNameParsed);
// const fileNameFromUrl = urlNameParsed.ext;
// console.log(fileNameFromUrl);

// // 2: Getting available space on the computer
// const os = require("os");
// const freeMemory = os.freemem();
// console.log(freeMemory);

// // 3: Dealing with files
// const fs = require("fs");
// const readFile = fs.readFileSync("example.txt", "utf8");
// console.log(readFile);

// // fs.writeFileSync("newFile.txt", "Abebe beso bela");

// // Remove
// fs.unlink("newFile.txt", (err) => {
//   if (err) throw err;
//   console.log("newFile was deleted");
// });

// // Emitting events
// const events = require("events");
// const fs = require("fs");
// // const { on } = require("process");
// // There is an EventEmitter() class defined inside the events module
// const emitter = new events.EventEmitter();

// // It is similar with the jQuery event listener we used on DOM
// // document.getElementById("someId").on("click", changeBackground());

// emitter.on("abebe", function () {
//   console.log("Abebe Event triggered");
// });

// try {
//   // Tries to run this code first
//   fs.writeFileSync("anotherFileExample.txt", "Checking events ");
//   emitter.emit("abebe");
// } catch (error) {
//   console.log("Couldn't create the file");
// }
