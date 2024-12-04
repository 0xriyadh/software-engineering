import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

export async function getClient() {
    try {
        const client = new Client(
            `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}`
        );
        await client.connect();
        return client;
    } catch (error) {
        console.error("Database connection error:", error);
        throw new Error(
            "Failed to connect to database. Is PostgreSQL running?"
        );
    }
}
