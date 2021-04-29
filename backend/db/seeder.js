import Todo from "../models/Todo.js"
import {todos} from "./todos.js"
import mongoose from "mongoose"


export const seedTodos = async () => {
  Todo.deleteMany()
  todos.map( async todo => {
    const {name, description, status} = todo
    new Todo({name, description, status}).save()
    // console.log(`Creating todo ${todo._id}`)
  })
  process.exit(1)
}

export const clearTodoData = () => {
  Todo.deleteMany()
  process.exit(1)
}

seedTodos()