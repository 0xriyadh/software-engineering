import { getClient } from "./utils";

async function updateTodo(todoId: number) {
    const client = await getClient();
    try {
        const updateTodoQuery = {
            text: `
                UPDATE todos
                SET completed = TRUE
                WHERE id = $1
                RETURNING id, title, completed
            `,
            values: [todoId],
        }

        const response = await client.query(updateTodoQuery);
        console.log("Todo updated successfully: \n", response.rows[0]);
    } catch (error) {
        console.error("Error updating todo:", error);
        throw error;
    } finally {
        await client.end();
    }
}

updateTodo(1);