let http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is an example of a Node.js web-based application.\n');
}).listen(5000, () => console.log('Server running at http://localhost:5000'));
