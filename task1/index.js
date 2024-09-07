const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');


const adminPanel = fs.readFileSync(path.join(__dirname, 'firstpage.html'), 'utf-8');
const studentdashboard = fs.readFileSync(path.join(__dirname,'students.html'), 'utf-8');
http.createServer((req, res) => {
   
    const pathName = url.parse(req.url, true).pathname;

    if (pathName === "/") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(adminPanel);
    } else if (pathName === '/studentid') {
      
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("This is the student ID page");
    }
    else if (pathName === '/studentdashboard') {
      
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(studentdashboard);
    }
     else {
       
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("404 - Page not found");
    }
}).listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
