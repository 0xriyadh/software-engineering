const jwt = require("jsonwebtoken");
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");

const router = Router();

// signup
router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const admin = await Admin.create({ username, email, password });
        res.status(201).send({ message: "Admin created successfully" });
    } catch (err) {
        res.status(500).send({ message: "Something went wrong" });
    }
});

// login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const existingAdmin = Admin.findOne({ email });
    if (!existingAdmin) {
        return res.status(400).send({ message: "Invalid email or password" });
    }
    const validPassword = existingAdmin.password === password;
    if (!validPassword) {
        return res.status(400).send({ message: "Invalid email or password" });
    }
    const token = jwt.sign(
        { id: existingAdmin._id.toString(), email: existingAdmin.email },
        process.env.JWT_SECRET
    );
    res.send({ token });
});
