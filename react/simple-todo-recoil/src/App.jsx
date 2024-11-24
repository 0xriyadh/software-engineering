import {
    RecoilRoot,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
} from "recoil";
import { todoFormState, todoListState } from "../store/todos";
import { useCallback } from "react";

function App() {
    return (
        <>
            <div className="container mx-auto my-10">
                <h1 className="text-3xl font-bold text-center">
                    Simple Todo App
                </h1>
                <RecoilRoot>
                    <AddTodo />
                    <ShowTodos />
                </RecoilRoot>
            </div>
        </>
    );
}

function AddTodo() {
    const [formState, setFormState] = useRecoilState(todoFormState);
    const setTodos = useSetRecoilState(todoListState);

    const handleAddTodo = () => {
        const { title, description } = formState;

        if (title === "" || description === "") {
            return;
        }

        setTodos((oldTodos) => [
            ...oldTodos,
            {
                id: oldTodos.length + 1,
                title: title,
                description: description,
            },
        ]);

        // Reset form state
        setFormState({ title: "", description: "" });
    };

    const handleInputChange = useCallback(
        (e) => {
            const { id, value } = e.target;
            setFormState((prevState) => ({
                ...prevState,
                [id]: value,
            }));
        },
        [setFormState]
    );

    return (
        <div className="flex justify-center items-center my-4 space-x-4">
            <input
                type="text"
                id="title"
                placeholder="Todo Title"
                value={formState.title}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-400 focus:border-blue-400 focus:bg-blue-50 p-2.5 block"
            />
            <input
                type="text"
                id="description"
                placeholder="Todo Description"
                value={formState.description}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-400 focus:border-blue-400 focus:bg-blue-50 p-2.5 block"
            />
            <button
                className="px-6 py-2.5 bg-blue-500 rounded-md shadow hover:bg-blue-700 text-white"
                onClick={handleAddTodo}
            >
                Add
            </button>
        </div>
    );
}

function ShowTodos() {
    const todos = useRecoilValue(todoListState);

    return (
        <>
            <div className="flex justify-center items-center my-4 space-x-4">
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <div>{todo.title}</div>
                            <div>{todo.description}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;
