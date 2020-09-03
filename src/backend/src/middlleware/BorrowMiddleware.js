var mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Book = require("../models/bookmodel/bookModel");

const Boorow = require("../models/borrow/borrowmodel");

const checkIfBorrowExist=(req, res, next)=> {
    // if (res.locals.borrowStatus) {
    //   return res.status(401).send({
    //     message: 'Loan credit exhausted, upgrade or return borrowed book'
    //   });
    // }

    // Also checks if book has been borrowed and not returned
    Boorow
      .findOne({
          userId: req.body.userId,
          bookId: req.body.bookId,
          returned: false,
          returningdate : { $gt: new Date.now()},
        })
        .then((foundBorrow) => {
          // console.log(foundBorrow)
        if (foundBorrow) {
          res.status(409).send({
            message: 'Book borrowed already please return'
          });
        }
       next();
      })
      .catch(error => res.status(400)
        .send({ message: `Oops! something happened, ${error.message}` }));
        // console.log(req.body)
  }

//check is one book is borowed
const check_if_book_isborrowed= ()=>{
  Book.findOne({ 
    returningdate : { $gt: new Date.now()}, 
    status:Reserved,
    returned:0,
  
  }).then(()=>{

  })
}

  module.exports={
    checkIfBorrowExist,
    check_if_book_isborrowed
  };