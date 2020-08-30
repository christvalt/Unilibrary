const mongoose = require("mongoose");
const Schema = mongoose.Schema;
coverImageBasePath ='./upload';

var Bookschema = new Schema({
  title: {
    type: String,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  publishedDate: {
    type: Date,
    required: true,
  },
  // authors: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: 'Author',
  // },

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
  coverImageName: {
    type: String,
    required: true,
  },
 coverImageType: {
   type: String,
   required: true,
  },
  categoryId: {
    type: String,
    allowNull: true
  }
});

const Book = mongoose.model("Bookmodel", Bookschema);

module.exports = Book;
module.exports.coverImageBasePath=this.coverImageBasePath;
