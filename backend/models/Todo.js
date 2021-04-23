import mongoose from "mongoose"
const {Schema} = mongoose
import Status from "../constants/Status.js"
import Priority from "../constants/Priority.js"


const todoSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true,},
  status: {type: String, required: true, default: Status.PENDING},
  prority: {type: String, required: true, default: Priority.LOW },
  assignee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  deligates: {
    type: Array(mongoose.Schema.Types.ObjectId),
    ref: "User"
  },
})

const Todo = mongoose.model("todos", todoSchema)

export default Todo