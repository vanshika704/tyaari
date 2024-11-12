
import mongoose from "mongoose";

const connectDB = async () => {
    try {//.
    
        await mongoose.connect(mongoURI, {
           
        });
        console.log("Connected to MongoDB Atlas! 🚀");
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
       
    }
};// mongodb connection 

export default connectDB;
