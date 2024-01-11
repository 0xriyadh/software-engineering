const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const bcrypt = require("bcrypt");

const app = express();

mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.rnw2g.mongodb.net/test-app`
);

const User = mongoose.model("User", {
    username: String,
    email: String,
    password: String,
});

app.use(express.json());

app.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
    }

    const user = new User({ username, email, password });
    user.save().then((response) => {
        // send jwt token to the client
        const token = jwt.sign(
            { id: response._id.toString(), username: response.username },
            process.env.JWT_SECRET
        );
        res.json({ token });
    });
});

app.post("/login", async (req, res) => { 
    const { username, password } = req.body;
    
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
        return res.status(400).json({ message: "Invalid username or password" });
    }

    const validPassword = existingUser.password === password;
    if (!validPassword) {
        return res.status(400).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
        { id: existingUser._id.toString(), username: existingUser.username },
        process.env.JWT_SECRET
    );
    res.json({ token });
});

app.listen(3000, () => console.log("Server is listening on port 3000"));
// step 1: import mongoose
// step 2: connect to the database
// step 3: create a schema
