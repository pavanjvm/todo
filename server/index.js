require('dotenv').config();
const express = require('express');
const { createtodo, updatetodo } = require('./types');
const { todo } = require('./db');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.post('/todo', async (req, res) => {
    const userbody = req.body;
    const parsedbody = createtodo.safeParse(userbody);
    if (!parsedbody.success) {
        res.status(400).send(parsedbody.error.message);
        return;
    }
    await todo.create({
        title: userbody.title,
        description: userbody.description,

    })
    res.json({
        msg: "todo created successfully"
    })
})

app.get('/todo', async (req, res) => {
    const todos = await todo.find();
    console.log(todos);
    res.json(todos);
})

app.put('/completed', async (req, res) => {
    const updated = req.body;
    const parsedupdated = updatetodo.safeParse(updated);
    if (!parsedupdated.success) {
        res.status(400).send("not validated");
        return;
    }
    await todo.findByIdAndUpdate(req.body.id, { completed: true }, { new: true });
    res.json({
        msg: "todo updated successfully"
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});