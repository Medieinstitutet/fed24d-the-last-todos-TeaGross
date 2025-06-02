import { useState } from "react"
import { Todo } from "../models/Todo"
import "./Todolist.css"
import { TodoPresentation } from "./TodoPresentation"

export const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([
        new Todo(1, "Göra inlämningsuppgiften", false),
        new Todo(2, "Handla mat", false),
        new Todo(3, "Gör ett spread i junk journal", false),
        new Todo(4, "Vattna blommorna", false),
        new Todo(5, "Ta en promenad", false),
        new Todo(6, "Se Håkan Hellström på Ullevi", false),
        new Todo(7, "Test1", false),
        new Todo(8, "Test2", false),
        new Todo(9, "Test3", false),
    ])

    const toggleDone = (id: number) => {
        setTodos(
            todos.map((t) => {
                if(t.id === id) {
                    return{...t, isDone: !t.isDone};
                }
                return t;
            })
        )
    }

    const deleteTodo = (id : number) => {
        setTodos(todos.filter((t) => t.id !== id ))
    }

    return (
        <>
        <h1>Att göra</h1>
          <ul>
            {todos.map((todo) => (
                <TodoPresentation
                 key={todo.id} 
                 todo={todo}
                 onToggleDone={toggleDone}
                 onDelete={deleteTodo}
                 />

            ))}
        </ul>
        </>
    )
}