import mongoose from "mongoose"
const {Schema} = mongoose
import Role from "../constants/Role.js"
import Position from "../constants/Position.js"

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  image: {type: String,},
  role: {type: String, required: true, default: Role.EMPLOYEE },
  position: {type: String, required: true, default: Position.DESIGNER },

})

const User = mongoose.model("users", userSchema)

export default User