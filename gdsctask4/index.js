import express from "express"; // express import  kro bhyi
import connectMongo from "./db/db.js"; // db.js ko bulaya 
import dotenv from "dotenv"; //dotenv 
import userRouter from "./routes/user.js"; //userrouter
dotenv.config(); // dotenv bulaya 
const app = express();// express

app.get("/", (req, res) => {
  res.send("Hello World!"); // app.get krke hello wrld
});

app.use("/api/v1/user", userRouter);// path bnaya 

app.listen(3000, () => {
  connectMongo(); // app.listen krke server on krdiya
  console.log("Server is running on port 3000");
});