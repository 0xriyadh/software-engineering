const express = require("express");
const { z } = require("zod");

const app = express();
const port = process.env.PORT || 3000;

// defining a schema for the kidneys
const KidneySchema = z.object({
    healthy: z.boolean(),
});
const KidneysSchema = z.array(KidneySchema);

// to get the body of the request we need to use body-parser
app.use(express.json()); // to support JSON-encoded bodies

app.post("/health-checkup", (req, res) => {
    // we are expecting an array of max 2 kidneys
    const kidneys = req.body.kidneys;
    const responseFromZod = KidneysSchema.safeParse(kidneys);

    // if the kidneys are not valid
    if (!responseFromZod.success) {
        res.status(400).send(responseFromZod);
        return;
    }
    res.send(`You have ${kidneys.length} kidneys`);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
