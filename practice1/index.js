import express from "express"
import dotenv from "dotenv"

const app = express();
const PORT = 5050;
app.get("/" ,(req, res)=>{
    res.send("aaha tamatar bde majedar")
})

app.listen(PORT, ()=>{
    console.log("http://localhost:5050");
})