const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema(
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
const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
