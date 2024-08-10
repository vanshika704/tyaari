let http = require("http");
http.createServer(function (req, res) {
   res.writeHead (200 , {'Content-Type': 'text/plain'});
   res.end("Ahhaa tamatar bde majedaar waah tamatar bde mjedaar\ncheen tapak dam dam");
}).listen(5000, () =>{
    console.log('Server running at http://localhost:5000')
});