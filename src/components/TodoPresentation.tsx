import type { Todo } from "../models/Todo"

type TodoProps = {
    todo: Todo;
    onToggleDone: (id: number) => void;
    onDelete: (id: number) => void;
}

export const TodoPresentation = ({todo, onToggleDone, onDelete}: TodoProps) => {

    return <>
        <li className={todo.isDone ? "done" : ""}>
                    {todo.title}
                    <input type="checkbox" checked={todo.isDone} onChange={() => onToggleDone(todo.id)} />
                    <button onClick={() => onDelete(todo.id)}>🗑️</button>
                </li>
    </>
}