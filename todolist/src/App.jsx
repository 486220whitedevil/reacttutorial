import { useState } from "react"
import { TodoProvider } from "./context"
import TodoForm from "./components/TodoForm"

const App = () => {

  const [todos , setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now() , ...todo} ,...prev ])
  }

  const updateTodo = (id , todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo === id ?  {...prevTodo , completed: !prevTodo.completed} : prevTodo))
  }



  return (
    <TodoProvider value={{todos , addTodo , updateTodo , deleteTodo , toggleComplete}}>
      
      <div className='min-h-screen bg-gray-900 py-8'>
        
        <div className='w-full max-w-2xl mx-auto shadow-md rouded-lg px-3 py-4 text-white'>
          <h1 className='text-4xl font-bold text-center mb-8 mt-2'> Manage Your Todos
          </h1>
          <div className='mb-4'>
            {/* Todo form goes here */}
          </div>
          <div className='flex flex-wrap gap-y-3'>
            {/* Loop and add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
