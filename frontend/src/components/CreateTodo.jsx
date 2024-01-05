// React-query
// Local state variable
import { useState } from 'react'

const CreateTodo = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="todo-title"
        style={{ padding: 10, margin: 10 }}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <br />
      <input
        type="text"
        name="description"
        placeholder="todo-description"
        style={{ padding: 10, margin: 10 }}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
      />
      <br />
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          fetch('http://localhost:3000/todo', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              'Content-type': 'application/json',
            },
          }).then(async function (res) {
            const json = await res.json()
            alert('Todo Added')
          })
        }}
      >
        Add a Todo
      </button>
    </div>
  )
}

export default CreateTodo
