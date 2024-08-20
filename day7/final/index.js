// const fs = require('fs');
// const textln = fs.readFileSync('../../starter/txt/input.txt', 'utf-8');
// console.log(textln);
const tempOverview = fs.readfileSync('${__dirname}/templates/overview.html', 'utf-8')
const tempCard = fs.readfileSync('${__dirname}/templates/card.html', 'utf-8')
const tempProduct = fs.readfileSync('${__dirname}/templates/product.html', 'utf-8')

const data = fs.readfileSync('${__dirname}/dev-data/data.json', 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) =>{
    const pathname = req.url;
    if (pathname === '/' || pathname ==='/overview'){
        res.writehead(200, {'Content-type' : 'text/html'});
        res.end(tempOverview);
    }
    else if (pathname === '/product') { 
        res.end('This is Product');
    }

    //API
    else if (pathname === '/api'){
        res.writehead(200, {'Content-type' : 'application.json'});
        res.end(data);
    }
    //NOT FOUND
    else {
        res.writeHead(404 , {
            'Content-type':'text/html',
            'my-ownheader' :'hellllo guyz'
        })
        res.end('<h1>Page not found </h1>')
    }
})