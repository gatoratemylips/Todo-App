import React from 'react'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const TodoForm = ({setTodos,todos}) => {
    const [todoValue, setTodoValue] = useState('')
    
    const handleSubmit = (e) => {
      if(todoValue === ''){
        toast.error('Please Enter Your Todo')
      }else if (todos.includes(todoValue)){
        toast.error('Todo Already Exists')
      }else if (todoValue.length < 5){
        toast.error('Minimum characters required is 5')
      }else{
        const newTodo = todoValue.trim()
        
      


        setTodos([...todos, newTodo])
        toast.success('Todo Added Successfully')
      }
    }
        

  return (
    <form action="" id='todo-form'>
      <input
         type="text" 
         id='form-input ' 
         placeholder='Please Enter Your Todo ' 
         onChange={(e) => setTodoValue(e.target.value)}
         value={todoValue}
        />
        <button onClick={(e)=>{
            e.preventDefault()
            handleSubmit()
            setTodoValue('')
        
        }}
      >
        <i class="fa-solid fa-plus"></i>
      </button>
    </form>
    
  )
    
}

export default TodoForm 

    