const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Get the request URL and method
  const { url, method } = req;

  // Set the default content type
  res.setHeader('Content-Type', 'text/plain');

  // Define basic routes
  if (url === '/' && method === 'GET') {
    res.statusCode = 200;
    res.end('Welcome to the Home Page!');
  } else if (url === '/about' && method === 'GET') {
    res.statusCode = 200;
    res.end('This is the About Page.');
  } else if (url === '/contact' && method === 'GET') {
    res.statusCode = 200;
    res.end('This is the Contact Page.');
  } else {
    // If no matching route is found
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});
// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
