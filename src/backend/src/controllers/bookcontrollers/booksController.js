var mongoose = require("mongoose");
const express = require("express");


const u = require("../../routes/uploadroute/u");
const Book = require("../../models/bookmodel/bookModel");
const router = express.Router();



//new book
router.get('/new',async(req,res)=>{
  try {
    const authors= await authors.find({})
    const book = new Book()
    res.render('',{
      authors:authors,
      book:book
    })
    
  } catch {
    res.redirect('')
    
  }

})

const list_books = (req, res) => {
  // console.log("enetered");
  Book.find({}, function (err, book) {
    if (err) res.send(err);
    res.json(book);
  });
};
const read_book = (req, res) => {
  /*
	TODO cast req.params.id to ObjectId
  */
  console.log(req),
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
//req.body can be thi
/*
 const new book =new Book ({
   title=req.body.title,
   author=req.body.author,
   publishdate =new  Date(req.body.publishdate),
   pagecount =req.body.pagecount,
   description=req.body.desriptioin,

 })
*/
const create_book = (req, res) => {
  var new_book = new Book(req.body);
  console.log(new_book);
  new_book.save(function (err, book) {
    if (err) res.send(err);
    res.status(201).json(book);
  });
};

const update_book = (req, res) => {
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
};

const delete_book = (req, res) => {
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
};

//module.exports = router;

module.exports = {
  list_books,
  create_book,
  read_book,
  update_book,
  delete_book,
};
