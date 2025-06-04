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
    <div className="add-todo-page">
    <h2>Kommer du på något mer?</h2>
    <div className="add-todo">
    <form className="todo-form" onSubmit={handleSubmit}>
        <textarea
        className="add-todo-input"
            id="title" 
            value={title} 
            onChange={handleChange}
             rows={4}
             cols={30}
             placeholder="Jag måste....."/>
        <button className="add-btn">Lägg till</button>    
    </form>
    </div>
    </div>
)
}