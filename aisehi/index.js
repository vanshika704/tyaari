import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/db.js";
dotenv.config();
const PORT = process.env.PORT;
const app = express();
connectDb();
app.get("/", (req, res) => {
    res.end("Hello, World!"); // Updated response message for better clarity
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`); // Fixed template literal syntax
});
