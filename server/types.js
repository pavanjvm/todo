const zod = require('zod');

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
    priority: zod.number()
})

const updateTodo = zod.object({
    id: zod.string()
})


module.exports = {
    createtodo : createTodo,
    updatetodo: updateTodo
}