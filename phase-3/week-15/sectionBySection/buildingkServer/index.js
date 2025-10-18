const http = require("http");

// const myServer = http.createServer((req, res) =>{

//     res.write("Hello class ")
//     res.write("selam nw")
//     res.end("\nTesting end method")
// });
// myServer.listen(1234, () => {
//   console.log("server running on port 1234");
// })
const myServer = http.createServer((req, res) =>{
    console.log(req.url);
    if (req.url === "/") {
        res.write("\n<h1>This is home page.");
        res.end();
    } else if(req.url ==="/about"){
        res.write("\n <h1>This is about page.</h1>");
        res.end();
    } else{
        res.write("\n <h1>page not found</h1>");
    res.end();
    }
});
const PORT = 5001;
myServer.listen(PORT, ()=>{
console.log(`Server running on http://localhost:${PORT}/ `);
})