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
    const existingAdmin = await Admin.findOne({ email });
    if (!existingAdmin) {
        return res.status(400).send({ message: "Invalid email or password eeee" });
    }
    const validPassword = existingAdmin.password === password;
    if (!validPassword) {
        return res.status(400).send({ message: "Invalid email or password ppp" });
    }
    const token = jwt.sign(
        { id: existingAdmin._id.toString(), email: existingAdmin.email },
        process.env.JWT_SECRET
    );
    res.send({ token });
});

// create course
// router.post("/courses", adminMiddleware, async (req, res) => {
//     const { name, description, price } = req.body;
//     try {
//         const course = await Course.create({ name, description, price });
//         res.status(201).send({ message: "Course created successfully" });
//     } catch (err) {
//         res.status(500).send({ message: "Something went wrong" });
//     }
// });

// get all courses which are created by the admin
// router.get("/courses", adminMiddleware, async (req, res) => {
//     try {
//         const courses = await Course.find({ admin: req.user.id });
//         res.send(courses);
//     } catch (err) {
//         res.status(500).send({ message: "Something went wrong" });
//     }
// });

module.exports = router;
