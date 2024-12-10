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
    if (c.req.header("Authorization") !== "Bearer 123") {
        c.status(401);
        return c.text("Unauthorized");
    }
    await next();
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
