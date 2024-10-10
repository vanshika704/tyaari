import express from "express" // import express 
import dotenv, { configDotenv } from "dotenv" //env
import { connectmongo } from "./db/db.js";// connectmongo function from db.js
import userRoutes  from "./routes/user.js" // userroutes from user.js
dotenv.config(); // dotenv.config for configuring the file
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