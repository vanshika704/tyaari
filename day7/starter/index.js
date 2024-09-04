const fs = require('fs');// module import kre h https or fs 
const http = require('http');

// Corrected method name and string interpolation
const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');// this is a variable where we are reading the file 
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8'); // teeno files ke variable bnaye or ek ek krke unka data read kiya h
const replaceTemplate = (temp, product) =>{ // replace template having two variables temp and product
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName); // ab output define ki h , temp.replace function se usko replace krre h productname se , joki humne doosri file jisme data pda h , usme mention kiya hua h .
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%ID%}/g, product.id);
   if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')
   return output; // conditional rendering lgai h , ki agar ye nahi toh ye sahi
}
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);// file read ki , usko parse kiya 

const server = http.createServer((req, res) => {

    // console.log(req.url);
    // console.log(url.parse(req.url, true));
    const pathname = req.url;

    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const cardshtml = dataObj.map(el => replaceTemplate(tempCard , el)).join('');
       const output = tempOverview.replace(`{%PRODUCT_CARDS%}`, cardshtml);
        res.end(output);
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
