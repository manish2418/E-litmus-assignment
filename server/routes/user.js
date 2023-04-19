const router = require("express").Router();
const { Router } = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { requireLogin } = require("../middleware/auth");
//Register user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashed_password = await bcrypt.hash(password, 10);
    user = new User({
      name,
      email,
      password: hashed_password,
    });
    await user.save();
    return res.status(201).json({ message: "User created succesfully" });
  } catch (err) {
    console.error(err);
  }
});

//
router.post("/check", async (req, res) => {
  const { ans1, ans2, ans3, email, ans_1, ans_2, ans_3 } = req.body;
  console.log(
    ans1 +
      " " +
      ans2 +
      " " +
      ans3 +
      " " +
      email +
      ans_1 +
      " " +
      ans_2 +
      " " +
      ans_3
  );
  let user = await User.findOne({ email: email });
  const val = user._id;
  const id = val.valueOf();
  const result = await User.updateMany(
    { _id: id },
    {
      count: {
        ans1: ans1,
        ans2: ans2,
        ans3: ans3,
      },
      answer: {
        ans_1: ans_1,
        ans_2: ans_2,
        ans_3: ans_3,
      },
    }
  );
  console.log(result);
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.json({ token });
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/", requireLogin, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.json(user);
  } catch (err) {
    console.log(err.message);
  }
});

//FETCHING ALL DATA
// router.get("/fetch", (req, res) => {
//   User.find(err,docs)=>{
//     if(!err)
//       console.log(docs);
//     else
//   };
// });
module.exports = router;
