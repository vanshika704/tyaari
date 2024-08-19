// const fs = require('fs');
// const textln = fs.readFileSync('../../starter/txt/input.txt', 'utf-8');
// console.log(textln);

const data = fs.readfileSync('${__dirname}/dev-data/data.json', 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) =>{
    const pathname = req.url;
    if (pathname === '/' || pathname ==='/overview'){
        res.end('This is the OVERVIEW');
    }
    else if (pathname === '/product') {
        res.end('This is Product');
    }
    else if (pathname === '/api'){
        res.writehead(200, {'Content-type' : 'application.json'});
        res.end(data);
    }
    else {
        res.writeHead(404 , {
            'Content-type':'text/html',
            'my-ownheader' :'hellllo guyz'
        })
        res.end('<h1>Page not found </h1>')
    }
})