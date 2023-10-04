const express = require('express');
const TodoController = require('../controller/todo.controller')

const router = express.Router();

const todoList = new TodoController();

router.get("/todolist", todoList.getAll);

module.exports = router;