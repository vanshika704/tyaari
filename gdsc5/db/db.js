import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const MONGO_URI = process.env.MONGO_URI
const connectMongo = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  };
  export default connectMongo;