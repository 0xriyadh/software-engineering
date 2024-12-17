const jwt = require("jsonwebtoken");
const { User } = require("../db");

const userMiddleware = async (req, res, next) => {
    const [authorizationSchemeType, token] =
        req.headers.authorization.split(" ");
    if (authorizationSchemeType !== "Bearer") {
        return res.status(401).send({ message: "Unauthorized" });
    }
    try {
        const decodedValue = jwt.verify(token, process.env.JWT_SECRET);
        // check if the user is an user (optional)
        // const isUser = await User.findById(decodedValue.id);
        // if (!isUser) {
        //     return res
        //         .status(403)
        //         .send({ message: "You are not allowed to visit these pages." });
        // }
        req.user = decodedValue;
        next();
    } catch (err) {
        console.log("err", err);
        res.status(401).send({ message: "Unauthorized" });
    }
};

module.exports = userMiddleware;
