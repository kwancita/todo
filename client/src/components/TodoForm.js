import {useState} from 'react'

function TodoForm({onAdd}) {
    const [title, setTitle] = useState('')
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({title:title}),
        })
          .then((r) => {
            if (r.ok){
              r.json().then((newTodo) => {
                onAdd(newTodo)
                setTitle("")
            })
          } else{
            r.json().then((err) => setErrors(err.errors)); 
          }
        });
      }
    return (
        <div>
            <form className="pb-4" onSubmit={handleSubmit}>
                <input 
                    className="bg-red-100 rounded-sm p-2"
                    type="text"
                    name="title"
                    value={title}
                    placeholder="add your new todo list"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className="bg-yellow-200 rounded-sm py-2 px-4 ml-2" type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm
