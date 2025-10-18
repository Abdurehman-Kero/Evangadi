// const { writeFile } = require("fs");
// const os = require("os");
// // console.log(os);
// const fremem =os.freemem()
// console.log(fremem);
// const platform = os.platform();
// console.log(os.arch());
// console.log(platform);
// const fs = require("fs");
// fs.readFile('./abe.txt', 'utf8', (err, data)=>{
//     if (err) {
//         console.error(err)
//         return 
        
//     }
//     console.log(data);
// })
// const path = require("path");
// let pathobj = path.parse(__filename);
// console.log(pathobj.ext);
// writeFile("message.txt", "Hello class", (err) =>{
//     if (err) throw err; 
//     console.log("The file has been saved");
// })


const events = require("events");
const eventEmitter = new events.EventEmitter();
const myEventHandler = function(){
    console.log("Abet, selam nw");
}
eventEmitter.on("Abebe", myEventHandler);
eventEmitter.emit("Abebe")