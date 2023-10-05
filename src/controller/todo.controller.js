const TodoList = require('../model/todo.model');
const httpStatus = require('http-status-codes');
const mongoose = require('mongoose');

class TodoController {
    getAll = async (req, res) => {
       try {
           const todos = await TodoList.find();
           if(todos.length === 0) return res.status(httpStatus.OK).send("No Data!");
           return res.status(httpStatus.OK).send(todos);
       }catch (err){
           res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
       }
    }

    getById = async (req, res) => {
        const id = req.params.id;
        try {
            const todo = await TodoList.findById(id);

            return res.status(httpStatus.OK).send(todo);
        }catch (err){
            if(err instanceof mongoose.CastError) return res.status(httpStatus.NOT_FOUND).send({message: `Todo with id ${id} not found!`});
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    }

    deleteById = async (req, res) => {
        const id = req.params.id;
        try {
            await TodoList.findByIdAndRemove(id);
            res.status(httpStatus.OK).send({message: "Successfully delete todo"})
        }catch (err){
            if(err instanceof mongoose.CastError) return res.status(httpStatus.NOT_FOUND).send({message: `Todo with id ${id} not found!`});
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    }

    addTodo = async (req, res) => {
        const {title, description} = req.body;

        const todo = new TodoList({
            title,description
        })
        try {
            const result = await TodoList.create(todo);
            return res.status(httpStatus.CREATED).send(result);
        }catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    }
}

module.exports = TodoController;