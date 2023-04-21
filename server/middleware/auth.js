const jwt = require("jsonwebtoken");

function resolveAfter5Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 5000);
  });
}

exports.requireLogin = async (req, res, next) => {
  let val = await resolveAfter5Seconds(req.headers.authorization);
  console.log(val);
  try {
    if (val) {
      const token = req.headers.authorization.split(" ")[1];
      //verify token

      const decode = jwt.verify(token, process.env.JWT_SECRET);

      //attach token to request
      req.user = decode;

      next();
    } else {
      res.status(400).json({ message: "Unauthorized" });
    }
  } catch (err) {
    console.log("Something went wrong");
  }
};
