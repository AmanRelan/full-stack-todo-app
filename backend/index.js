const express = require('express')
const app = express()
const { createTodo, updateTodo } = require('./types')
const { todo } = require('./db')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/todos', async function (req, res) {
  const allTodos = await todo.find({})
  res.json({ todos: allTodos })
})

app.post('/todo', async function (req, res) {
  const createPayload = req.body
  const parsedPayload = createTodo.safeParse(createPayload)
  if (!parsedPayload.success) {
    res.status(411).json({
      message: 'You sent the wrong inputs',
    })
  }
  //Put it in Mongo
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    isCompleted: false,
  })
  res.json({
    message: 'Todo Created',
  })
})

app.put('/completed', async function (req, res) {
  const updatePayload = req.body
  const parsedPayload = updatePayload.safeParse(updatePayload)
  if (!parsedPayload.success) {
    res.status(411).json({
      message: 'You sent the wrong inputs',
    })
  }
  await todo.update(
    {
      _id: updatePayload._id,
    },
    {
      isCompleted: true,
    }
  )
  res.json({ message: 'Todo marked as completed' })
})

app.listen(3000)
