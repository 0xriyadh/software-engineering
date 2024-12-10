import { Hono } from "hono";

const app = new Hono();

import { Context } from "hono";

interface Next {
    (): Promise<void>;
}

async function authMiddleware(
    c: Context,
    next: Next
): Promise<Response | void> {
    const initTime = new Date().getTime();
    if (c.req.header("Authorization") !== "Bearer 123") {
        c.status(401);
    }
    await next();
    const endTime = new Date().getTime();
    console.log(`Request took ${(endTime - initTime) / 1000}ms`);
}

app.use(authMiddleware);

app.get("/", async (c) => {
    const body = await c.req.json();
    console.log(body);
    console.log(c.req.header("Authorization"));
    console.log(c.req.query("lio"));

    return c.text("Hello Hono!");
});

export default app;
