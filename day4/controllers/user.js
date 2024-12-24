
import { User } from "../models/user.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    // 1. Get the data from the request body
    const { username, email, password } = req.body;

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // 3. Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create a user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // 5. Send a response
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
