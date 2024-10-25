const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const env = require("dotenv");
const app = express();

env.config();

const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.rnw2g.mongodb.net/test-app`
);

const User = mongoose.model("User", {
    username: String,
    email: String,
    password: String,
});

const signupSchema = z.object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

const loginSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

app.post("/signup", async (req, res) => {
    const validationResult = signupSchema.safeParse(req.body);
    if (!validationResult.success) {
        return res.status(400).json({ errors: validationResult.error.errors });
    }
    const { username, email, password } = validationResult.data;

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
        return res
            .status(400)
            .json({ message: "Invalid username or password" });
    }

    const validPassword = existingUser.password === password;
    if (!validPassword) {
        return res
            .status(400)
            .json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
        { id: existingUser._id.toString(), username: existingUser.username },
        process.env.JWT_SECRET
    );
    res.json({ token });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

/* 
step 1: import mongoose
    const mongoose = require("mongoose");
step 2: connect to the database
    mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.rnw2g.mongodb.net/test-app`
    );
step 3: create a schema / model
    const UserSchema = new mongoose.Schema({
        username: String,
        email: String,
        password: String,
    });
step 4: create a new instance or object of the model
    const User = mongoose.model("User", UserSchema);
step 5: save the object to the database
    user.save().then((response) => console.log(response));
*/
