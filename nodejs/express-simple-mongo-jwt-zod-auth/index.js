const express = require("express");
const adminRouter = require("./routes/admin");

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON and making the data available on req.body
app.use(express.json());

// Routes
app.use("/admin", adminRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
