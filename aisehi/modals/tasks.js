import mongoose from "mongoose"

const taskschema = new mongoose.Schema({
    Title: String,
    Description : String,
    Status: Boolean,

},{})
const Task = mongoose.model('Task', taskschema);

export default Task;