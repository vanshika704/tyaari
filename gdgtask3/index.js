import express from "express" // import express 
import dotenv, { configDotenv } from "dotenv" //env
import { connectmongo } from "./db/db.js";// connectmongo function from db.js
import userRoutes  from "./routes/user.js" // userroutes from user.js
dotenv.config(); // dotenv.config for configuring the file
 const app = express(); // app naam ka variable , express daali
 const PORT = process.env.PORT || 3000; // port define krdiya 

 app.listen(PORT, () => { // server bnane ka tareeka , app.listen krke port name define kiya or print krwaliya 
    console.log(`Server is running on http://localhost:${PORT}`); 
  });
  connectmongo(); // connect mongo function ko bulaya 
  app.get('/', (req, res) => { // app.get krke path btaya , or us path pe ye kaam krdo ye btaya
    res.send("Cheen tapak dam dam");
  });

  app.use("/api/v1/users", userRoutes);// app.use krke humare defined route ka use krenge , in user.js