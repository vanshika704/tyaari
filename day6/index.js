import express from "express";

const app = express();

app.get("/", (req,res)=> {res.end("EXPRESS MART")});

app.get("/fooditems",(req, res)=>{
    res.end("Food Items");
} )
app.listen(3000, ()=>{
    console.log("Server is working at http://localhost:3000");
})

