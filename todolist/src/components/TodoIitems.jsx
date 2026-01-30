import React, { useState } from 'react'
import {useTodo} from '../context/Todocontext'
const TodoIitems = ({todo}) => {

  const [isTodoEditable , setIsTodoEditable] = useState(false)
  const [todoMsg , setTodoMsg] = useState(todo.todo)

const {updateTodo , deleteTodo , toggleComplete} = useTodo()

const editTodo = () => {
  updateTodo(todo.id , {...todo , todo: todoMsg})
  setIsTodoEditable(false)
}

  return (
    <div 
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >
      <input 
      type="checkbox"
      className='cursor-pointer'
      checked={todo.completed}
      onChange={() => toggleComplete(todo.id)}
      />

      <input 
      type="text"
      className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} ${todo.completed ? "line-through" : ""}`}
      value={todoMsg}
      onChange={(e) => setTodoMsg(e.target.value)}
      readOnly={!isTodoEditable}
       />
       {/* Edit , save button */}

       <button 
       className='inline-flex px-3 py-1 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shring-0 disabled:opacity-50 cursor-pointer'
       onClick={() => {
        if(todo.completed) return 

        if(isTodoEditable) {
          editTodo()
        } else{
          setIsTodoEditable((prev) => !prev);
        }
       }}
       disabled={todo.completed}
       >
        {isTodoEditable ? "Save" : "Edit"}

       </button>

       <button
       className='inline-flex px-3 py-1 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shring-0 cursor-pointer'
       onClick={() => deleteTodo(todo.id)}
       >
        Delete

       </button>
    </div>
  )
}

export default TodoIitems
