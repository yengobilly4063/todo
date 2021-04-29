import express from "express"
const router = express.Router()
import {createTodo, deleteTodo, getTodoById, getTodos, updateTodo} from "../controllers/todoControllers.js"


router.route("/").get(getTodos)
router.route("/").post(createTodo)
router.route("/:id").get(getTodoById)
router.route("/:id").put(updateTodo)
router.route("/:id").delete(deleteTodo)

export default router