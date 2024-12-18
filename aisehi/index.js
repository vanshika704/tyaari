import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/db.js";
import bodyParser from "body-parser";
import taskRoutes from './routes/tasks.js';
dotenv.config();
const PORT = process.env.PORT;
const app = express();
connectDb();



app.use(bodyParser.json()); 
app.get("/", (req, res) => {
    res.end("Vanshika kya chaal");
});

app.get('/about', (req, res) => {
    res.send('This is an about page.');
});
app.get('/api/products', (req, res) => {
    res.json(products);  
});
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`); // Fixed template literal syntax
});
