const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
    },

    role: {
      type: String,
      enum: ["Client", "Manager", "Admin"],
      default: "Client",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("user", userSchema);

module.exports = User;
