import type { Todo } from "../models/Todo"

type TodoProps = {
    todo: Todo;
    onToggleDone: (id: number) => void;
    onDelete: (id: number) => void;
}

export const TodoPresentation = ({todo, onToggleDone, onDelete}: TodoProps) => {

    return <>
        <li className={`todo-item ${todo.isDone ? "done" : ""}`}>
                    <input type="checkbox" checked={todo.isDone} onChange={() => onToggleDone(todo.id)} />
                    <span className="todo-title">{todo.title}</span>
                    <button className="delete-btn" onClick={() => onDelete(todo.id)}>🗑️</button>
                </li>
    </>
}