import express from 'express'
import mongosse from 'mongoose'
const PORT = process.env.PORT;
const app = express();
 app.connect(PORT, ()=>{
    console.log("Server connected");
 })