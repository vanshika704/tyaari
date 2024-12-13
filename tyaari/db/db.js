import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const MONGO_URI = process.env.MONGODB_URI; 

const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URI, {});
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        
    }
};

export default connectDb;
