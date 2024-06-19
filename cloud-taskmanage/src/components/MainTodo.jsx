import { useEffect, useState } from 'react'
import CloudForm from './CloudForm'
import CloudItems from './CloudItems'
import { TodoProvider } from '../Context'

function MainTodo() {

  const [todos, setTodos] = useState([])   // hereon all todos in state "todos" 

  const addTodo = (todo) => { // here on "todo" is a value
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])  // prev is a old array and old array se hamne yaha new array banaya hai
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    const rohan = localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <CloudForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <CloudItems todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default MainTodo




