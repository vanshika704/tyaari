const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');
const replaceTemplate = require('./modules/teacherdashboardtemplate');

// Read all necessary files
const studentlist = fs.readFileSync(`${__dirname}/studentslist.html`, 'utf-8');
const teacherdashboard = fs.readFileSync(`${__dirname}/teacher-dashboard.html`, 'utf-8');
const studentdata = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const tempOverview = fs.readFileSync(`${__dirname}/index.html`, 'utf-8');

// Parse the JSON data
const data = JSON.parse(studentdata);

// Function to get MIME type based on the file extension
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

// Create the HTTP server
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  // Route for index.html or overview
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(tempOverview);

  // Route for studentslist.html
  } else if (pathname === '/studentslist') {
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(studentlist);


  // Route for teacher-dashboard.html
  } else if (pathname === '/teacher-dashboard.html') {
    
    res.end(teacherdashboard);
    
  } else {
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
server.listen(3000, '127.0.0.1', () => {
  console.log('Server is running on http://localhost:3000');
});
