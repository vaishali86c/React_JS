// schema for the specific project

/*
    Todo {
        title: string;
        description: string,
        completed: boolean
    }
*/

const mongoose = require("mongoose");

// mongo url handy
// mongodb+srv://vaishali86c:Vaishali86c@cluster0.qfzpq6t.mongodb.net/todos

mongoose.connect("mongodb+srv://vaishali86c:LZgzwUdvLjVNKH7I@cluster0.lnioyky.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}