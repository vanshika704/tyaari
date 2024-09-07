const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req , res) =>{
    res.writeHead(200 , {'Content-type': 'text/plain'});
    const pathName = req.url;

if (pathName === "/"){
    res.end ("first page");
    return;
}
else if (pathName ==='/studentid'){
    res.end("this is student id page ");
}
}).listen(3000, ()=> {
    console.log("http://localhost:3000");
})