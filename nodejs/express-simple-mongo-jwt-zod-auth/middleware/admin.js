const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    try {
        const decodedValue = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decodedValue;
        next();
    } catch (err) {
        res.status(401).send({ message: "Unauthorized" });
    }
};
