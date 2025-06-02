import type { Todo } from "../models/Todo"

type TodoProps = {
    todo: Todo;
    whenDone: (id: number) => void;
    whenDeleted: (id: number) => void;
}

export const TodoPresentation = ({todo, whenDone, whenDeleted}: TodoProps) => {

    return <>
        <li className={todo.isDone ? "done" : ""}>
                    {todo.title}
                    <button onClick={() => whenDone(todo.id)}>Markera som färdig</button>
                    <button onClick={() => whenDeleted(todo.id)}>🗑️</button>
                </li>
    </>
}