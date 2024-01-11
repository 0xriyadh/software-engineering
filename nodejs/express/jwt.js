const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const port = process.env.PORT || 3000;

const jwtPassword = "jskdfh234329dfjkb23312sdfs!(*#@&$jksdf324df";
const users = [
    {
        username: "John Doe",
        password: "1234",
    },
    {
        username: "Radil M",
        password: "radil23",
    },
    {
        username: "Kipchumba Daniel",
        password: "kipchumba",
    },
];

app.use(express.json());

app.post("/signIn", (req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => {
        return user.username === username && user.password === password;
    });
    if (!user) {
        res.send("Username or password not in the database");
    }
    const accessToken = jwt.sign({ username: user.username }, jwtPassword);
    res.json({ accessToken });
});

app.get("/users", (req, res) => { 
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        console.log(decoded);
        // send the users who is not logged in
        const filteredUsers = users.filter((user) => {
            return user.username !== decoded.username;
        });
        res.json(filteredUsers);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
