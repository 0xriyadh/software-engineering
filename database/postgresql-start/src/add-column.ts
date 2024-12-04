import { getClient } from "./utils";

async function addDeletedColumn() {
    const client = await getClient();
    try {
        const addColumnQuery = `
            ALTER TABLE todos
            ADD COLUMN IF NOT EXISTS deleted BOOLEAN DEFAULT FALSE;
        `;
        await client.query(addColumnQuery);

        console.log("deleted column added successfully");
    } catch (error) {
        console.error("Error adding column:", error);
        throw error;
    } finally {
        await client.end();
    }
}

addDeletedColumn();
