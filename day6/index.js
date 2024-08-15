import express from "express";
import fs from "fs";

const app = express();

app.get("/", (req, res) => {
    res.end("EXPRESS MART");
});

app.get("/fooditems", (req, res) => {
    fs.readFile('./data.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send("Error reading file");
            return;
        }
        const productData = JSON.parse(data);
        res.json(productData);  // Send the product data as JSON
    });
});

app.listen(3000, () => {
    console.log("Server is working at http://localhost:3000");
});
