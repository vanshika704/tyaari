import mongoose from "mongoose"; // import mongoose from mongoose

const userSchema = new mongoose.Schema( // mongoose.schema
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email should be unique"],
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema); // mongoose.model ko export kra

// users