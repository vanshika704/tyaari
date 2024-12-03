import mongoose from "mongoose"

const user = new mongoose.Schema({
    name :{
        type:String,
        required : true ,
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
      age : {
        type : Int8Array,
      
      }
    },
{})
//.
export const User = mongoose.model("User", user);