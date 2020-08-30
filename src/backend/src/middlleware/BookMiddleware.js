var mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const  Book =require('../models/bookmodel/bookModel');

//const { Book } = model;


console.log(Book)

 
  const validateAndCheckIfBookExist=(req, res, next) =>{
    const bookId = req.params.bookId || req.body.bookId;
    // Set query conditionally based on request
    const query = req.url === '/books' ?
      { title: req.body.title } : { id: bookId };
      console.log(query)

    // Ensures Book ID is present in the path
    if (req.url !== '/books' && isNaN(bookId)) {
     res.status(400).send({ message: 'Ensure book ID is supplied' });
     
    }
    console.log(query)
    // Checks if book exists in the database
    
    Book.findOne({
      query
      })
      .then((book) => {
        if (req.url === '/books') {
          if (!book) return next();
          return res.status(409)
            .send({
              message: `Conflict! ${req.body.title} exists already`,
              book
            });
        } else {
          if (!book) return res.status(404).send({ message: 'Book not found' });
          req.foundBook = book;
          return next();
        }
        
      })
      .catch(() => res.status(500).send({ message: 'Internal Server Error' }));
  }


module.exports={validateAndCheckIfBookExist}
