const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.isCompleted === true ? 'Completed' : 'Mark it as Complete'}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Todos
