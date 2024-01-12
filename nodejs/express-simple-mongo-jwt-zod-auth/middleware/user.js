const jwt = require("jsonwebtoken");

const userMiddleware = async (req, res, next) => {
    const { authorizationSchemeType, token } =
        req.headers.authorization.split(" ");
    if (authorizationSchemeType !== "Bearer") {
        return res.status(401).send({ message: "Unauthorized" });
    }
    try {
        const decodedValue = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedValue;
        next();
    } catch (err) {
        res.status(401).send({ message: "Unauthorized" });
    }
};

module.exports = userMiddleware;
