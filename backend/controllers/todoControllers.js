import asyncHandler from "express-async-handler"
import Todo from "../models/Todo.js"


// desc     Get all todos
// @route   GET /api/todos
// access   public
export const getTodos =asyncHandler( async (req, res) => {
  const todos = await Todo.find()
  if(!todos){
    return res.status(500).json({error: "Error retreving todos"})
  }
  if(todos.length === 0){
    return res.status(401).json({error: "No todos found in database"})
  }
  res.json(todos)
})

// desc     Create all todos
// @route   POST /api/todos
// access   public
export const createTodo = asyncHandler(async (req, res) => {
  
  const {name, description, status} = req.body

  if(!name || !description){
    return res.status(401).json({error: "Name and discription cannot be empty"})
  }

  const todo = new Todo({
    name,
    description,
    status
  })
  await todo.save()
  res.json(todo)
})

// desc     Get singe todo by ID
// @route   GET /api/todos/:id
// access   public
export const getTodoById = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)
  if(!todo){
    return res.status(401).json({error: `Todo not found`})
  }else{
    return res.json(todo)
  }
})

// desc     Delete singe todo by ID
// @route   DELETE /api/todos/:id
// access   public
export const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findByIdAndDelete({_id: req.params.id})

  if(!todo){
    return res.status(401).json({error: `Failed to delete todo`})
  }
  res.json({msg: "Todo deleted successfully"})
})

// desc     Update singe todo by ID
// @route   PUT /api/todos/:id
// access   public
export const updateTodo = asyncHandler(async (req, res) => {
  const {name, description} = req.body

  const todo = await Todo.findByIdAndUpdate(req.params.id, {name, description}, {new: true})

  if(!todo){
    return res.status(401).json({error: `Failed to update todo`})
  }
  res.json(todo)
})