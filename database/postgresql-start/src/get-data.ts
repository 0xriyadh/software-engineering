import { getClient } from "./utils";

async function getUsers(): Promise<void> {
    const client = await getClient();
    try {
        const getUsersQuery = `
            SELECT * FROM users;
        `;
        const response = await client.query(getUsersQuery);
        console.log("Users: ");
        for (let user of response.rows) {
            console.log(`id: ${user.id}, email: ${user.email}`);
        }
    } catch (error) {
        console.error("Error getting users:", error);
        throw error;
    } finally {
        await client.end();
    }
}

async function getUser(email: string): Promise<void> {
    const client = await getClient();

    try {
        const selectUserQuery = {
            text: `
                SELECT * FROM users
                WHERE email = $1;
            `,
            values: [email],
        };
        const selectedUser = await client.query(selectUserQuery);
        console.log("User:", selectedUser.rows[0]);
    } catch (error) {
        console.error("Error getting user from email:", error);
        throw error;
    } finally {
        await client.end();
    }
}

async function getTodosOfUser(email: string): Promise<void> {
    const client = await getClient();

    try {
        const selectTodosQuery = {
            text: `
                SELECT * FROM todos
                WHERE user_id = (
                    SELECT id FROM users
                    WHERE email = $1
                );
            `,
            values: [email],
        };
        const response = await client.query(selectTodosQuery);

        console.log("Todos: ");
        for (let todo of response.rows) {
            console.log(`id: ${todo.id}, title: ${todo.title}`);
        }

    } catch (error) {
        console.error("Error getting todos of user:", error);
        throw error;
    } finally {
        await client.end();
    }
}

getUser("liza@g.com");
getUsers();

getTodosOfUser("liza@g.com");
