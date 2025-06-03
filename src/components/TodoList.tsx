import { useState } from "react"
import { Todo } from "../models/Todo"
import "./Todolist.css"
import { TodoPresentation } from "./TodoPresentation"
import { AddTodo } from "./AddTodo"


export const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>(
        JSON.parse(localStorage.getItem("todos") || JSON.stringify([
            new Todo("Göra inlämningsuppgiften", false),
            new Todo("Handla mat", false),
            new Todo("Gör ett spread i junk journal", false),
            new Todo("Vattna blommorna", false),
            new Todo("Ta en promenad", false),
            new Todo("Se Håkan Hellström på Ullevi", false),
            new Todo("Test1", false),
            new Todo("Test2", false),
            new Todo("Test3", false),  
     ])))

    const toggleDone = (id: string) => {
        setTodos(
            todos.map((t) => {
                if(t.id === id) {
                    return{...t, isDone: !t.isDone};
                }
                return t;
            })
        )
    }

    const deleteTodo = (id : string) => {
        setTodos(todos.filter((t) => t.id !== id ))
    }

    const addTodo = (t: Todo) => {
    setTodos([...todos, t]);
  };
    console.log(todos)
    localStorage.setItem("todos", JSON.stringify(todos))

    return (
        <>
        <h1>Att göra</h1>
          <ul className="todo-list">
            {todos.map((todo) => (
                <TodoPresentation
                 key={todo.id} 
                 todo={todo}
                 onToggleDone={toggleDone}
                 onDelete={deleteTodo}
                 />

            ))}
        </ul>
        <AddTodo addTodo={addTodo} />
        </>
    )
}