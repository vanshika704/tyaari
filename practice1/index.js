import express from "express";
import userpage from "./routes/user.js"; // Importing the user route

const app = express();
const PORT = 5050;

app.get("/", (req, res) => {
    res.send("aaha tamatar bde majedar");
});


app.use('/tamatar', userpage);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
