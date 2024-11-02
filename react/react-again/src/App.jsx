import { useState } from "react";
import Todo from "./components/Todo";

function App() {
    const [todos, setTodos] = useState([{ id: 1 }]);
    const handleOnClick = () => {
        setTodos([...todos, { id: todos.length + 1 }]);
    };
    return (
        <>
            <h1>All Todos</h1>
            {/* add todo */}
            <button onClick={handleOnClick}>Add Todo</button>
            {/* todo list */}
            {todos?.map((todo) => (
                <Todo key={todo.id} num={todo.id} />
            ))}
        </>
    );
}

export default App;
