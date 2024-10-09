import mongoose from "mongoose";
 
export const connectmongo = async ()=>{
    try {
        const instance = await mongoose.connect(process.env.MONGO_URI);
        console.log("mongo created ", instance.connection.host)
    }catch (error){console.log(error)};
}