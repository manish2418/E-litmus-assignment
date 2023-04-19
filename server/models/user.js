const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    count: {
      ans1: {
        type: Number,
        default: 0,
      },
      ans2: {
        type: Number,
        default: 0,
      },
      ans3: {
        type: Number,
        default: 0,
      },
    },
    answer: {
      ans_1: {
        type: String,
        default: "",
      },
      ans_2: {
        type: String,
        default: "",
      },
      ans_3: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
