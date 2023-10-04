const TodoList = require('../model/todo.model');
const httpStatus = require('http-status-codes');

class TodoController {
    getAll = (req, res) => {
        TodoList.find().then((todos) => {
            return res.status(httpStatus.OK).send(todos);
        }).catch((err) => {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        })
    }
}

module.exports = TodoController;