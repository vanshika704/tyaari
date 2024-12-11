import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/db.js";
import bodyParser from "body-parser";
dotenv.config();
const PORT = process.env.PORT;
const app = express();
connectDb();



app.use(bodyParser.json()); // middleware to parse json data 
app.get("/", (req, res) => {
    res.end("Hello, World!"); // Updated response message for better clarity
});

app.get('/about', (req, res) => {
    res.send('This is an about page.');
});
app.get('/api/products', (req, res) => {
    res.json(products);  // Respond with the products array in JSON format
});

// POST route to create a new product
app.post('/api/products', (req, res) => {
    const newProduct = req.body;  // Get the product data from the request body
    const newId = products.length + 1;  // Generate a new ID based on the current array length
    const productWithId = { id: newId, ...newProduct };  // Add the ID to the product object
    products.push(productWithId);  // Add the new product to the array
    res.status(201).json(productWithId);  // Respond with the newly created product
});
app.get('/users', (req, res) => {
    const users = [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 28 },
        { name: 'Sam', age: 35 }
    ];
    res.json(users);  // Send JSON response
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`); // Fixed template literal syntax
});
