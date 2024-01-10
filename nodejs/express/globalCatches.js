const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// to get the body of the request we need to use body-parser
app.use(express.json()); // to support JSON-encoded bodies

app.post("/health-checkup", (req, res) => {
    // we are expecting an array of max 2 kidneys
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;

    res.send(`You have ${kidneysLength} kidneys`);
});

// global catches [Error-Handling Middlewares]
// If we define a middleware like below which takes 4 parameters, it will be considered as a global catch. Meaning if any of the above routes gives an exception, this middleware will be executed
let errorCount = 0;
app.use((err, req, res, next) => {
    console.log(err);
    errorCount++;
    console.log(`Number of errors: ${errorCount}`);
    res.status(500).send({
        message: "Something went wrong with the server",
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
