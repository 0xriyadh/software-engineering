const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

let patients = [
    {
        name: "John",
        kidneys: [
            {
                healthy: false,
            },
            {
                healthy: true,
            },
        ],
    },
];

const sum = (n) => {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
};

app.get("/", (req, res) => {
    const n = req.query.n;
    res.send(`Sum of ${n} is ${sum(n)}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
