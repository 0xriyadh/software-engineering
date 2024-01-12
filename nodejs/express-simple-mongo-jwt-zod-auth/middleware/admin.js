const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res, next) => {
    const { authorizationSchemeType, token } =
        req.headers.authorization.split(" ");
    if (authorizationSchemeType !== "Bearer") { 
        return res.status(401).send({ message: "Unauthorized" });
    }
    try {
        const decodedValue = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decodedValue;
        next();
    } catch (err) {
        res.status(401).send({ message: "Unauthorized" });
    }
};
