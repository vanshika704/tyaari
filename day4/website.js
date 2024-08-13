const http = require('http');
http.createServer(function (req, res){
    res.writeHead(200, {'Content-type': 'text/plain'});
    if (req.url == '/'){
        res.end("aagye firse muh uthake?");
    }else if(req.url =='/about'){
        res.end("Cheen tapak dam dam");
    }else{res.statusCode = 404;
        res.end('not found');
    }

   
    }).listen(5000,()=>{console.log('the server is running at http://localhost:5000')});