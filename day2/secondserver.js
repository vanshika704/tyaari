const http = require('http');
const assert = require('assert').strict;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    let responseMessage = '';

    try {
        assert.deepStrictEqual({ a: '5' }, { a: '5' });
        responseMessage += "First Assertion Passed\n";
    } catch (error) {
        responseMessage += `Error in First Assertion: ${error.message}\n`;
    }

    try {
        assert.deepStrictEqual({ a: 5 }, { a: '5' });
        responseMessage += "Second Assertion Passed";
    } catch (error) {
        responseMessage += `Error in Second Assertion: ${error.message}`;
    }

    res.end(responseMessage);
}).listen(8080, () => console.log('Server is running at http://localhost:8080'));
