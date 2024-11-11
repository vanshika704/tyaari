import express from "express"
import dotenv from "dotenv"
dotenv.config();
const app = express();
const PORT = process.env.PORT||3000;
app.use("api/vi/users" , Registers)
app.listen(PORT, (req,res)=>{
    console.log(`https://localhost${PORT}`)
})