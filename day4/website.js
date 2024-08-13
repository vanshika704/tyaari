const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});

    if (req.url == '/') {
        res.end("aagye firse muh uthake?");
    } else if (req.url == '/about') {
        res.end("Cheen tapak dam dam");
    } else if (req.url == '/hello') {
        const data = fs.readFileSync('index.html', 'utf-8');
        res.end(data);
    } else {
        res.statusCode = 404;
        res.end('not found');
    }
}).listen(5000, () => {
    console.log('The server is running at http://localhost:5000');
});
