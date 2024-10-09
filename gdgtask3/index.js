import express from "express"
import dotenv, { configDotenv } from "dotenv"

dotenv.config();
 const app = express();
 const PORT = process.env.PORT || 3000;

 app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); 
  });
  connectmongo();
  app.get('/', (req, res) => {
    res.send("Hello from the server");
  });