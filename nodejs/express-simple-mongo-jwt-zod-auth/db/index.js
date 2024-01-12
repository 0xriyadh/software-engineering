const mongoose = require('mongoose');

// Connect to the database
mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.rnw2g.mongodb.net/simple-udemy`
);

// Admin Schema
const AdminSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});
// Admin Model
const Admin = mongoose.model("Admin", AdminSchema);

// User Schema
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});
// User Model
const User = mongoose.model("User", UserSchema);

// Course Schema
const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
    },
});
// Course Model
const Course = mongoose.model("Course", CourseSchema);

// UserCourse Schema
const UserCourseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    },
    // payment info
    paymentId: String,
    paymentDate: Date,
});
// UserCourse Model
const UserCourse = mongoose.model("UserCourse", UserCourseSchema);

// Export the models
module.exports = {
    Admin,
    User,
    Course,
    UserCourse,
};