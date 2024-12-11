import mongoose from 'mongoose';

// Define the schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

// Create the model
const User = mongoose.model('User', userSchema);

export default User;
