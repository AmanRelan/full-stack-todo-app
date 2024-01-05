import { useEffect, useState } from 'react'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(function () {
    fetch('http://localhost:3000/todos')
      .then(async function (res) {
        const json = await res.json()
        console.log(json)
        setTodos(json.todos)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App
