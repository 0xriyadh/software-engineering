import { atom, selector } from "recoil";

// state for todo add form
export const todoFormState = atom({
    key: "TodoFormState",
    default: {
        title: "",
        description: "",
    },
});

// state for todo list
export const todoListState = atom({
    key: "TodoListState",
    default: [],
});

// state for todo filter (search)
export const todoFilterState = atom({
    key: "TodoFilterState",
    default: "",
});

// filtered todo list using recoil selector
export const filteredTodoListState = selector({
    key: "FilteredTodoList",
    get: ({ get }) => {
        const filter = get(todoFilterState);
        const list = get(todoListState);

        return list.filter((todo) => {
            return (
                todo.title.toLowerCase().includes(filter.toLowerCase()) ||
                todo.description.toLowerCase().includes(filter.toLowerCase())
            );
        });
    },
});
