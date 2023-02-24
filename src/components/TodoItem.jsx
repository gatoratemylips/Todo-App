import React from 'react'
import { toast } from 'react-toastify'

const TodoItem = ({todo,deleteTodo,id}) => {



  return (
    <div  className="todo-item">
    <p>{todo}</p>
    <i class="fa-solid fa-x" onClick={()=> {
        deleteTodo(id)
        toast.error('Todo Deleted Successfully')
    }}></i>
   </div>
  )
}

export default TodoItem