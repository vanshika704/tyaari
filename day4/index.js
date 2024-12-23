import express from "express"
import dotenv from "dotenv"
const app = express();
dotenv.config();
const port= process.env.PORT||5050;
app.get("/" , (req, res)=>{
    res.end("helllllllo banshuuuu");
})
app.listen(port , ()=>{
    console.log(`http://localhost:${port}`);
})