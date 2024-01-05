const mongoose = require('mongoose')

mongoose.connect('<your mongodb url>')

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  isCompleted: Boolean,
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
  todo,
}
