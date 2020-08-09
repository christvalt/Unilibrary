var mongoose = require("mongoose");
const express = require("express");

Book = require("../../models/bookmodel/bookModel")(mongoose);
const router = express.Router();

const list_books = (req, res) => {
  Book.find({}, function (err, book) {
    if (err) res.send(err);
    res.json(book);
  });
};
const read_book = (req, res) => {
  /*
	TODO cast req.params.id to ObjectId
	*/
  Book.findById(req.params.id, function (err, book) {
    if (err) res.send(err);
    else {
      if (book == null) {
        res.status(404).send({
          description: "book not found",
        });
      } else {
        res.json(book);
      }
    }
  });
};

const create_book = (req, res) => {
  var new_book = new Book(req.body);
  new_book.save(function (err, book) {
    if (err) res.send(err);
    res.status(201).json(book);
  });
};

/*exports.update_book = function (req, res) {
  Book.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    function (err, book) {
      if (err) res.send(err);
      else {
        if (book == null) {
          res.status(404).send({
            description: "Book not found",
          });
        } else {
          res.json(book);
        }
      }
    }
  );
};*/

/*exports.delete_book = function (req, res) {
  Book.deleteOne({ _id: req.params.id }, function (err, result) {
    if (err) res.send(err);
    else {
      if (result.deletedCount == 0) {
        res.status(404).send({
          description: "Book not found",
        });
      } else {
        res.json({ message: "Task successfully deleted" });
      }
    }
  });
};*/

//module.exports = router;

module.exports = {
  list_books,
  create_book,
  read_book,
};
