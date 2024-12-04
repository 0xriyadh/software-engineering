import { getClient } from "./utils";

async function insertData() {
    const client = await getClient();
    const [email, password] = ["liza@g.com", "password1234"];
    try {
        const insertUserQuery = {
            text: `
                INSERT INTO users (
                    email,
                    password
                ) VALUES ($1, $2)
                RETURNING id, email
            `,
            values: [email, password],
        };
        // but why can't we just directly write the values in the query?
        /*
            const insertUserQuery = `
                INSERT INTO users (
                    email,
                    password
                ) VALUES ('${email}', '${password}')
                RETURNING id, email
            `;
        */
        // because it's vulnerable to SQL injection attacks
        // but in our approach the values won't be directly concatenated to the query
        // so it's safe from SQL injection attacks

        let response = await client.query(insertUserQuery);
        console.log("User inserted successfully:", response.rows[0]);

        const insertTodoQuery = {
            text: `
                INSERT INTO todos (
                    title,
                    description,
                    user_id
                ) VALUES ($1, $2, $3)
                RETURNING id, title
            `,
            values: [
                "Learn SQL",
                "Learn SQL for beginners",
                response.rows[0].id,
            ],
        };
        response = await client.query(insertTodoQuery);
        console.log("Todo inserted successfully:", response.rows[0]);
    } catch (error) {
        console.error("Error creating table:", error);
        throw error;
    } finally {
        await client.end();
    }
}

insertData();
