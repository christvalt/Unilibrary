const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(req.headers.authorization, "token", token);

    const decode = jwt.verify(token, "AZQ,PI)0(");

    req.user = decode;
    req.token = token;
    next();
  } catch (error) {
    res.json({
      message: "Authentication Failed!",
    });
  }
};
module.exports = authenticate;
 