import express from "express"
const router = express.Router()
import User from "../models/User.js"
import bcrypt from "bcryptjs"

// @GET
// desc   Get all users
router.get("/", async (req, res) => {
  const users = await User.find()
  res.json(users)
})

// POST
// @desc CREATE a new User
router.post("/", async (req, res) => {
  const {name, email, password} = req.body
  const userexists = await User.findOne({email})

  if(userexists){
    return res.json({msg: `User with email ${email} already exists`})
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = new User({
    name, email, password: hashedPassword
  })

  await user.save()
  res.json(user)
})

// @desc  Get a single user adn return user values
router.get("/:id", async (req, res) => {
  const userId = req.params.id

  const userExists = await User.findById(userId)

  if(userExists){
    return res.json(userExists)
  }else{
    return res.status(404).json({msg: `user ${userId} not found`})
  }
})

// @ DELETE
// @desc  Delete a user
router.delete("/:id", async (req, res) => {
  
  const user = await User.findById(req.params.id)

  if(user){
    await user.remove()
    res.json({msg: "User Delete Success"})
  }else{
    res.status(404).json({msg: `user ${req.params.id} not found`})
  }
})

// @desc Update User values : name, image
router.put("/:id",  async (req, res) => {

  const userId = req.params.id

  const userExists = await User.findById(userId)

  const {name} = req.body
  
  if(userExists){
    const user = await User.findOneAndUpdate({_id: userId}, {name})
    res.send(user)
  }else{
    res.status(404).json({msg: `user ${userId} not found`})
  }
})


export default router