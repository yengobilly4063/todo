import express from "express"
const router = express.Router()
import User from "../models/User.js"

// @GET
// desc   Get all users
router.get("/", async (req, res) => {
  const users = await User.find()
  res.send(users)
})

// POST
// @desc CREATE a new User
router.post("/", (req, res) => {
  const {name, email, password} = req.body
  const user = new User({
    name,
    email,
    password
  })
  user.save()
  res.json(user)
})


export default router