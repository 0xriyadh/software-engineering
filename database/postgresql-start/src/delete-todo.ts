import { getClient } from "./utils";

async function deleteTodo(todoId: number) {
    const client = await getClient();
    try {
        const deleteTodoQuery = {
            text: `
                UPDATE todos
                SET deleted = TRUE
                WHERE id = $1
                RETURNING id, title, deleted;
            `,
            values: [todoId],
        };

        const response = await client.query(deleteTodoQuery);
        console.log("Todo deleted successfully: \n", response.rows[0]);
    } catch (error) {
        console.error("Error deleting todo:", error);
        throw error;
    } finally {
        await client.end();
    }
}

deleteTodo(1);
