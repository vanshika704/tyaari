// import mongoose from "mongoose"

// const UserSchema = mongoose.Schema[{
//    username:{
//     type: String,
//     required: true,
//    },
//    email:{
//     type: String,
//     required: true,
//    },
//    password:{
//     type: String,
//     required: true,
//     minlength: 6 ,
//    },
//    posts:[{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Post",
//    }]
// },{Timestamp: true}];

// export const User = mongoose.model("User", UserSchema);



import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
