const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');
const tempOverview = fs.readFileSync(
    `${__dirname}/templates/template-overview.html`,
    'utf-8'
  );
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  if (pathname === '/' || pathname === '/overview') {
  
}});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server is running on http://localhost:8000');
});
