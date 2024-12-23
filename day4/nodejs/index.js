// import http from "http"

// const server  = http.createServer((req, res)=>{
//    const response = {
//     message: 'Hello, World!',
//     status: 'success',

//    }
//    res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.end(JSON.stringify(response));

// })

// server.listen(8080 , ()=>{
//     console.log("http://localhost:8080");
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// middleware in nodejs 
// import http from "http"
// const logRequestMiddleware = (req, res , next) =>{
//     console.log(`Request received at: ${req.url}`);
//     next();
// }

// const server = http.createServer((req, res)=>{
//     logRequestMiddleware(req, res, () => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Middleware Example');
//       });
    
// })
// server.listen(3000, () => {
//     console.log('http://localhost:3000');
//   });
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// morgan middleware for logging ;
// cors : cross origin resource sharing 
// helmet : security headers ko enter krne ke liye 

// import morgan  from 'morgan';
// import  express from 'express';
// const app = express();

// // Use Morgan for logging
// app.use(morgan('tiny'));

// app.get('/', (req, res) => {
//   res.send('Hello from Express with Morgan!');
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.method === 'GET' && req.url === '/') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Welcome to Home Page!');
//   } else if (req.method === 'GET' && req.url === '/about') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Welcome to About Page!');
//   } else {
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Page Not Found!');
//   }
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////
// routing using express 
// const express = require('express');
// const app = express();

// // Define routes
// app.get('/', (req, res) => {
//   res.send('Welcome to Home Page!');
// });

// app.get('/about', (req, res) => {
//   res.send('Welcome to About Page!');
// });

// app.get('/contact', (req, res) => {
//   res.send('Welcome to Contact Page!');
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Parameterized routes .. jaise kabhi kabhi aapko data dynamically show krna h , maannlo , localhost:3000/pages/users/vanshika 

// import express from "express"
// const app = express();
// app.get('/' , (req, res)=>{
    
//     res.send(`Helloooo`);
// })
// app.get('/user/:name', (req, res) => {
//     const userName = req.params.name;
//     res.send(`Hello, ${userName}!`);
//   });
  
//   app.listen(3000, () => {
//       console.log('http://localhost:3000');
//     });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// query :
// import express from "express"
// const app = express();
// app.get('/' , (req, res)=>{
    
//     res.send(`Helloooo`);
// })

// app.get('/search', (req, res) => {
//     const searchQuery = req.query.q;
//     res.send(`Search Results for: ${searchQuery}`);
//   });

  //http://localhost:3000/search?q=nodejs
  
// app.get('/user/:name', (req, res) => {
//     const userName = req.params.name;
//     res.send(`Hello, ${userName}!`);
//   });
  
//   app.listen(3000, () => {
//       console.log('http://localhost:3000');
//     });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
