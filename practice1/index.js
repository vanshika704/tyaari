import express from "express";
import userpage from "./routes/user.js"; // Importing the user route
import connectDB from "./db/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();// express
const PORT = process.env.PORT|| 3000;// port setup

app.get("/", (req, res) => {
    res.send("aaha tamatar bde majedar");// aap.get krke phla route bnaya 
});


app.use('/tamatar', userpage);// app.use krkke doosra route access kiya 
connectDB();
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
