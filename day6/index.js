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
        const dataobj = JSON.parse(data);
        res.json(dataobj);  // Send the parsed JSON object as the response
    });
});

app.listen(3000, () => {
    console.log("Server is working at http://localhost:3000");
});
