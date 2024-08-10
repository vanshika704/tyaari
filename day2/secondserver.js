const http = require('http');
const assert = require('assert').strict;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    const pathName = req.url;

    if (pathName === '/' || pathName === '/assertion') {
        res.end("This is the example of assertion");
        return;
    } else if (pathName === '/nexttopic') {
        res.end("This is the example of nexttopic");
        return;
    }

    try {
        assert.deepStrictEqual({ a: '5' }, { a: '5' }); // using assert.deepStrictEqual
        res.end("Yes, '5' equals '5' ");
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'}); // Sending 500 status code for errors
        res.end(`Error: ${error.message}`); // Use template literal to include error message
    }

}).listen(8080, () => console.log('Server is running at http://localhost:8080'));
