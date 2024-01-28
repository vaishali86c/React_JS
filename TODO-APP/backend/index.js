// write a express boiler plate code
// with express.json middleware
const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());



app.post("/todo", async function(req, res) {
    

    // you can use the safeParse() method which returns an object with a boolean property called success 
    // which shows if the validation failed or not.

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
    })

    res.json({
        msg: "todo created"
    })
})



app.get("/todos", async function(req, res) {
    const todos = await todo.find({});
    // console.log(todos); //promises
    res.json({
        todos
    })

})


app.put("/completed", async function(req, res) {

   const updatePayTodo = req.body;
   const parsedPayload = updateTodo.safeParse(updatePayTodo);

   if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
   }

   await todo.update({
    _id: req.body.id
   }, {
    completed: true
   })

   res.json({
    msg: "Todo marked as completed"
   })
})

app.listen(3000);