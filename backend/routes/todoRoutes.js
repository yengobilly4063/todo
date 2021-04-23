import express from "express"
const router = express.Router()
import Todo from "../models/Todo.js"

// @GET
// desc   Get all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find()
  res.json(todos)
})

// POST
// @desc CREATE a todo User
router.post("/", async (req, res) => {
  const {name, description, status, assignee, deligates} = req.body
  const todo = new Todo({
    name,
    description,
    status,
    assignee,
    deligates
  })
  await todo.save()
  res.json(todo)
})


export default router