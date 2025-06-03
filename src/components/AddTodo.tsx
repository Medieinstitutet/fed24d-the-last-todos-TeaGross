import { useState, type ChangeEvent, type FormEvent } from "react"
import { Todo } from "../models/Todo"


type AddTodoProps = {
    addTodo: (t: Todo) => void
}

export const AddTodo = ({addTodo}: AddTodoProps) => {
    // const [todo, setTodo] = useState<Todo>(new Todo("", false));
        const [title, setTitle] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        if (e.target.type === "text") {
            setTitle(e.target.value);
    //   setTodo({ ...todo, [e.target.id]: e.target.value });
    }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (title.trim() === "") return;

        const newTodo = new Todo(title, false);
        addTodo(newTodo);
        setTitle("");
        // addTodo(todo)
    }

return (
    <form onSubmit={handleSubmit}>
        <input type="text" id="title" value={title} onChange={handleChange}/>
        <button>Lägg till</button>    
    </form>
)
}