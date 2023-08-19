const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {},
      required: true,
    },
    answer: {
      type: String,
      default: "Olympus",
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

console.log("User Schema Model -> Working Successfully");
module.exports = mongoose.model("User", userSchema);
