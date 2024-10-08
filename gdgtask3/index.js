import express from "express"
import dotenv, { configDotenv } from "dotenv"

dotenv.config();
 const app = express();
 const PORT = process.env.PORT || 3000;

 