const fs = require("fs");
const http = require("http");// required for network requests

//////////////////////////////////////////
//Server
http.createServer((req, res) => {
    res.end("aami tumhike bhalu bhashu");
});