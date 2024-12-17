const jwt = require("jsonwebtoken");
const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course, UserCourse } = require("../db");

const router = Router();

// signup
router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create({ username, email, password });
        res.status(201).send({ message: "User created successfully" });
    } catch (err) {
        res.status(500).send({ message: "Something went wrong" });
    }
});

// login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        return res
            .status(400)
            .send({ message: "Invalid email or password" });
    }
    console.log("existingUser", existingUser);
    const validPassword = existingUser.password === password;
    if (!validPassword) {
        return res
            .status(400)
            .send({ message: "Invalid email or password" });
    }
    const token = jwt.sign(
        { id: existingUser._id, email: existingUser.email },
        process.env.JWT_SECRET
    );
    res.send({ token });
});

// get all courses
router.get("/courses", userMiddleware, async (req, res) => {
    try {
        const courses = await Course.find();
        res.send(courses);
    } catch (err) {
        res.status(500).send({ message: "Something went wrong" });
    }
});

// purchase a course
router.post("/purchase", userMiddleware, async (req, res) => {
    const { courseId, paymentId } = req.body;
    try {
        const userCourse = await UserCourse.create({
            user: req.user.id,
            course: courseId,
            paymentId,
            paymentDate: new Date(),
        });
        res.status(201).send({ message: "Course purchased successfully" });
    } catch (err) {
        res.status(500).send({ message: "Something went wrong" });
    }
});

// get all courses purchased by the user
router.get("/purchased-courses", userMiddleware, async (req, res) => {
    try {
        const userCourses = await UserCourse.find({ user: req.user.id });
        const courseIds = userCourses.map((userCourse) => userCourse.course);
        console.log("courseIds", courseIds);
        const courses = await Course.find({ _id: { $in: courseIds } });
        res.send(courses);
    } catch (err) {
        res.status(500).send({ message: "Something went wrong" });
    }
});

module.exports = router;
