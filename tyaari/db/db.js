import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from a .env file

const MONGO_URI = process.env.MONGODB_URI; // Ensure this matches your .env variable name

const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URI, {});
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        
    }
};

export default connectDb;
