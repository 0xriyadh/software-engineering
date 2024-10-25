const express = require("express");
const mongoose = require("mongoose");

const env = require("dotenv");
const app = express();

env.config();

mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.rnw2g.mongodb.net/test-app`
);

app.use(express.json());

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    purchasedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
});

const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

app.get("/users", async (req, res) => {
    const users = await User.find();
    res.send(users);
});

app.get("/courses", async (req, res) => {
    const courses = await Course.find();
    res.send(courses);
});

// create a user
app.post("/users", async (req, res) => {
    // const user = new User(req.body);
    // const response = await user.save();

    // alternative way to create a user
    const response = await User.create(req.body);
    res.send(response);
});

// create a course
app.post("/courses", async (req, res) => {
    const course = new Course(req.body);
    const response = await course.save();
    res.send(response);
});

// add a course to a user
app.post("/users/:userId/courses/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;
    // const user = await User.findById(userId);
    // const course = await Course.findById(courseId);
    // user.purchasedCourses.push(course);

    // alternative way to add a course to a user
    const user = await User.findByIdAndUpdate(userId, {
        $push: { purchasedCourses: courseId },
    });
    const response = await user.save();
    res.send(response);
});

// get all courses for a user
app.get("/users/:userId/courses", async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate("purchasedCourses");
    res.send(user.purchasedCourses);
});

app.use(express.json());

app.listen(3000, () => console.log("Server is listening on port 3000"));
