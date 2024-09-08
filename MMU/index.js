// const fs = require('fs');
// const http = require('http');
// const url = require('url');
// const path = require('path');

// const tempCard = fs.readFileSync(
//   `${__dirname}/index.html`,
//   'utf-8'
// );

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//   const { pathname } = url.parse(req.url, true);

//   // Handle the "/" and "/overview" routes
//   if (pathname === '/' || pathname === '/overview') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(tempCard); // Corrected variable name
//   } else {
//     // Handle other routes (404 Not Found)
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.end('<h1>Page Not Found</h1>');
//   }
// });

// // Start the server
// server.listen(8000, '127.0.0.1', () => {
//   console.log('Server is running on http://localhost:8000');
// });


const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');

// Define a function to get the MIME type based on the file extension
const getMimeType = (ext) => {
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
  };
  return mimeTypes[ext] || 'application/octet-stream';
};

// Create an HTTP server
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);
  
  // Handle the "/" route for serving the index.html
  if (pathname === '/' || pathname === '/overview') {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>Server Error</h1>');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    // Handle static file requests
    const filePath = path.join(__dirname, pathname);
    const ext = path.extname(filePath);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page Not Found</h1>');
        return;
      }
      res.writeHead(200, { 'Content-Type': getMimeType(ext) });
      res.end(data);
    });
  }
});

// Start the server
server.listen(8000, '127.0.0.1', () => {
  console.log('Server is running on http://localhost:8000');
});
