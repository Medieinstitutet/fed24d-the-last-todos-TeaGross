import { useState, type ChangeEvent, type FormEvent } from "react"
import { Todo } from "../models/Todo"


type AddTodoProps = {
    addTodo: (t: Todo) => void
}

export const AddTodo = ({addTodo}: AddTodoProps) => {
    // const [todo, setTodo] = useState<Todo>(new Todo("", false));
        const [title, setTitle] = useState("");

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            setTitle(e.target.value);
    
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (title.trim() === "") return;

        const newTodo = new Todo(title, false);
        addTodo(newTodo);
        setTitle("");
    }

return (
    <>
    <h2>Kommer du på något mer?</h2>
    <form onSubmit={handleSubmit}>
        <textarea
            id="title" 
            value={title} 
            onChange={handleChange}
             rows={4}
             cols={40}/>
        <button>Lägg till</button>    
    </form>
    </>
)
}