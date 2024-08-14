// express is used to make servers and APIs
import express from "express";

const app = express();
// Get 
// Post 
//Patch 
//Delete
app.get("/",(req, res)=>{res.status(200).json({message: "This is json response "})
    res.end("Aalo kachalu beta kahan gye the");
})
app.get("/hello", (req, res)=>{
    res.send("Hello World");
})
app.listen(3000, () => {
    console.log("Server is working at http://localhost:3000");
});
