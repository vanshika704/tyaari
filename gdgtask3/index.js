import express from "express"
import dotenv, { configDotenv } from "dotenv"
import { connectmongo } from "./db/db.js";
import userRoutes  from "./routes/user.js"
dotenv.config();
 const app = express();
 const PORT = process.env.PORT || 3000;

 app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); 
  });
  connectmongo();
  app.get('/', (req, res) => {
    res.send("Cheen tapak dam dam");
  });

  app.use("/api/v1/users", userRoutes);