const mongoose = require("mongoose");
const {Schema} = mongoose;

const todoListSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, {timestamps: true});

todoListSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});


const todoList = mongoose.model('Todo', todoListSchema);

module.exports = todoList;