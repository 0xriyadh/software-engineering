const express = require('express');

const app = express();
const port = process.env.PORT || 9000;

// Middleware for parsing JSON and making the data available on req.body
app.use(express.json());

app.listen(port, () => { 
    console.log(`Server running on port ${port}`);
});