import express from 'express';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware or routes can be added here

// Start the server
app.listen(PORT, () => {
    console.log(`Server connected on port ${PORT}`);
});

// Define a route
app.get("/", (req, res) => {
    res.send("Hello World!");
});
