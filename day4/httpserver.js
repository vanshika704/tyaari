const http = require('http');

// const port = process.env.PORT || 3000; // Default to port 3000 if environment variable is not set

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end("aaha tamatar bde majedaar");
// });

// server.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });

http.createServer(function (req, res){
res.writeHead(200, {'Content-type': 'text/plain'});
res.end("aagye firse muh uthake?");
}).listen(5000,()=>{console.log('the server is running at http://localhost:5000')});