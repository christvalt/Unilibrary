const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Bookschema = new Schema({
  title: {
    type: String,
    required: true,
  },
  pageCount: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },

  longDescription: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
});

const Book = mongoose.model("Bookmodel", Bookschema);

module.exports = Book;
