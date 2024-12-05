import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

export async function getClient() {
    try {
        const client = new Client({
            host: process.env.PGHOST,
            port: Number(process.env.PGPORT),
            database: process.env.PGDATABASE,
            user: process.env.PGUSER,
            password: process.env.PGPASSWORD,
        });
        await client.connect();
        return client;
    } catch (error) {
        console.error("Database connection error:", error);
        throw new Error(
            "Failed to connect to database. Is PostgreSQL running?"
        );
    }
}
