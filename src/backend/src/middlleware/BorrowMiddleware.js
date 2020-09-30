var mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Book = require("../models/bookmodel/bookModel");

const Boorow = require("../models/borrow/borrowmodel");

const checkIfBorrowExist = (req, res, next) => {
  // Also checks if book has been borrowed and not returned
  Boorow.findOne({
    userId: req.body.userId,
    bookId: req.body.bookId,
    returned: false,
    returningdate: { $gt: Date.now() },
  })
    .then((foundBorrow) => {
      // console.log(foundBorrow)
      if (foundBorrow) {
        res.status(200).send({
          message: "Book borrowed already please return",
        });

        // Book.waitingList.update({ _id: bookId }, { $push: { userId: userId } });
      }

      next();
    })
    .catch((error) =>
      res
        .status(400)
        .send({ message: `Oops! something happened, ${error.message}` })
    );
  // console.log(req.body)
};

//check is one book is borowed
const check_if_book_isborrowed = () => {
  Book.findOne({
    returningdate: { $gt: new Date.now() },
    status: Reserved,
    returned: 0,
  }).then(() => {});
};

module.exports = {
  checkIfBorrowExist,
  check_if_book_isborrowed,
};
