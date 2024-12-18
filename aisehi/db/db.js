import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../modals/users.js';  // Import User model

dotenv.config(); 
//nlxc m,
const MONGO_URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGO_URI, {});
        console.log("MongoDB connected successfully!");

        // Insert a new user
        const user = new User({ name: 'John Doe', age: 30, email: 'john@example.com' });
        await user.save();
        console.log("Document inserted!");

        // Retrieve all users
        const users = await User.find();
        console.log("Users:", users);
        
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

export default connectDb;
