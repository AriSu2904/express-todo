const express = require('express');
const TodoController = require('../controller/todo.controller')

const router = express.Router();

const todoList = new TodoController();

router.get("/todolist", todoList.getAll);
router.post("/todolist", todoList.addTodo);
router.get("/todolist/:id", todoList.getById);
router.delete("/todolist/:id", todoList.deleteById)

module.exports = router;