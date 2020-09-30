const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Borrowschema = new Schema({
  returned: {
    type: Boolean,
    defaul: false,
  },
  bookId: {
    ref: "book",
    type: Schema.Types.ObjectId,
  },
  boorowingdate: {
    type: Date,
    required: true,
  },
  returningdate: {
    type: Date,
    required: true,
  },
  actualReturnDate: {
    type: Date,
    allowNull: false,
  },
  quantity: {
    type: Number,
  },
  userId: {
    ref: "user",
    type: Schema.Types.ObjectId,
  },
  // waitingList: {
  //   type: Array,
  //   defaul: false,
  // },
});

const Boorow = mongoose.model("Borrowmodel", Borrowschema);

module.exports = Boorow;
