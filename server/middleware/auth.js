const jwt = require("jsonwebtoken");

exports.requireLogin = (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      //verify token

      const decode = jwt.verify(token, process.env.JWT_SECRET);

      //attach token to request
      req.user = decode;

      next();
    } else {
      return res.status(400).json({ message: "Unauthorized" });
    }
  } catch (err) {
    console.log("Something went wrong");
  }
};
