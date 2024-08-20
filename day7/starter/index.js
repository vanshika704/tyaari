const fs = require('fs');
const http = require('http');

// Corrected method name and string interpolation
const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathname = req.url;

    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(tempOverview);
    } else if (pathname === '/product') {
        res.end('This is Product');
    }

    // API
    else if (pathname === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    }
    // NOT FOUND
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-own-header': 'hello guys'
        });
        res.end('<h1>Page not found</h1>');
    }
});

// Start the server on port 8000 (you can choose any available port)
server.listen(8000, '127.0.0.1', () => {
    console.log('Port is working on http://localhost:8000');
});
