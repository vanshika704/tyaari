import express from "express";
import connectMongo from "./db/db.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/user", userRouter);

app.listen(3000, () => {
  connectMongo();
  console.log("Server is running on port 3000");
});