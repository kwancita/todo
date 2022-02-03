import {useState} from 'react'

function Todo({todo, onUpdate, onDelete}) {
    const {title, completed} = todo;
    const [done, setDone] = useState(todo.completed);

    function handleStatusUpdate(){
        fetch(`/todos/${todo.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                completed: !done
            })
        })
        .then((r)=>r.json())
        .then((status)=>onUpdate(status))
        setDone(!todo.completed)
    }

    function handleDeleteTodo() {
        fetch(`/todos/${todo.id}`, {
          method: "DELETE",
        })
        onDelete(todo.id)
    }

    return (
        <div className="flex my-2 justify-center">
            <div className="w-48 bg-blue-100 text-left pl-2">
                <span className="">{title} </span>
            </div>
            <div>
                <button className="bg-green-200 rounded-sm py-0.5 ml-2 w-20" onClick={handleStatusUpdate} >{completed? "Done":"Pending"}</button>
            </div>
            <div>
                <button className="bg-red-600 rounded-sm py-0.5 ml-2 w-20" onClick={handleDeleteTodo}>Delete</button>
            </div>
        </div>
    )
}
export default Todo
