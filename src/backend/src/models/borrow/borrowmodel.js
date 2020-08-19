const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var Borrowschema = new Schema({
  idbook: {
    type: String,
    required: true,
  },
  iduser: {
    type: Number,
    required: true,
  },
  Boorowingdate: {
    type: Date,
    required: true,
  },
  returningdate: {
    type: Date,
    required: true,
  },


});

const Boorow = mongoose.model("Borrowmodel", Borrowschema);

module.exports = Boorow;

