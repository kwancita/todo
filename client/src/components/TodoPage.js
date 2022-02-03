import { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Todo from "./Todo"


function TodoPage({currentUser}) {
    const [todos, setTodos]= useState([])

    useEffect(()=>{
        fetch("/todos")
        .then((r)=>r.json())
        .then((setTodos));
    },[])
    // console.log(todos)
    function handleUpdate(updatedTodo) {
        const updatedTodos = todos.map((todo) => {
          if (todo.id === updatedTodo.id) {
            return updatedTodo;
          } else {
            return todo;
          }
        });
        setTodos(updatedTodos);
    }

    function handleDelete(id) {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }

    function handleAddTodo(newTodo) {
        setTodos([...todos, newTodo]);
    }

    return (
        <div>
            <h1 className="pt-6 pb-4 text-lg italic font-semibold">Hello {currentUser.username}, what's your plan today?</h1>
            <TodoForm onAdd={handleAddTodo} />
            {todos.map((todo)=>(
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    )
}

export default TodoPage
