var moment = require('moment'); // require
moment().format(); 
var mongoose = require("mongoose");
const express = require("express");



const borrow = require("../../models/borrow/borrowmodel");
const Book = require("../../models/bookmodel/bookModel");
const User = require("../../models/authormodel/autormodel");
const Boorow = require("../../models/borrow/borrowmodel");
const router = express.Router();


 /**

   *
   * @description Borrow a book from the library
   *
   * @param {object} req - The request payload sent to the route
   * @param {object} res - The response payload sent back from controller
   * @param {object} next - After endpoint middleware call
   *
   * @returns {object} - Message & Borrowed Book
   *
   * 
   */
const borrowBook=(req,res,next)=>{
  console.log(req.body)   
  console.log("d") 
    var foundBook = new borrow({
        returned: false,
        userId: req.body.userId,
        bookId: req.body.bookId,
        boorowingdate:new Date(req.body.boorowingdate),
        returningdate:
         new Date(Date.now() + (3 * 24 * 60 * 60 * 1000)),
            actualReturnDate: Date.now(),       
    });
    foundBook
    .save()
    .then(updatedBorrowedBook => {
       // console.log(req.body.bookId)
        Book.findOneAndUpdate(
            { _id: req.body.bookId},
            {
                $inc: {
                  quantity: -1
                }
              },
            function (err, book) {
              if (err) res.send(err);
              else {    
                    res.end("borrowin effectuated"); 
              }
            }).then((borrowingRecord)=>{

              req.loanRecords = {
                surcharge: false,
                newBookRecord: updatedBorrowedBook,
                newBorrowRecord: borrowingRecord,
              };
            }) .catch((err) => {
              console.log(err)
            res.json({
              message: 'Internal Server Error' ,
            });
          });
      }) 
     ;  
}
  /**
   * @static
   *
   * @description Returns a borrowed book to the library
   *
   * @param {object} req - The request payload sent to the route
   * @param {object} res - The response payload sent back from the controller
   * @param {object} next - After endpoint middleware call
   *
   * @returns {object} - Message, Returned book
   *
   * @memberOf BorrowController
   */

const returnBook=(req,res)=>{

    const borrowId = req.body
    if(!borrowId ){
        res.status(400).send('Ensure borrowId is present')
    }
    //console.log(borrowId)
    console.log(req.body);

      const { returningdate } = req.body;
      const surcharge = moment(Date.now()) > moment(returningdate);
      const bookToReturn = req.foundBook;

      Boorow.update(
            {_id: req.body.borrowId },

            {   returned: true,
                actualReturnDate: Date.now(),
            },
            function (err,book) {
                if (err) res.send(err);
                else {    
                    res.end("Super emprunt"); 
                } 
            }
        )
        .then((borrowUpdated)=>{

            if (borrowUpdated[0] === 0) {
                 res.status(404).send({
                  message: 'You have not borrowed this book'
                });
              }
            Book.update(
                {_id: bookToReturn.id }, 

                { $inc: {
                    quantity: bookToReturn.quantity + 1},
                 $set: {
                    returning: true,
                      }
                    
                 },
              ).then(()=>{

              })
        }).catch(() => res.status(500)
        .send({ message: 'Internal Server Error' }));
}

//Get record for a specific borrowed book
const getBorrowedBook =(req,res,next)=>{
  Boorow.findOne({ 
    userId: req.body.userId,
    bookId: req.body.bookId,
    returned: false,
  }).then((foundBorrowedBook)=>{
    if(foundBorrowedBook) {
      res.status(200).send({
        message:'You borrowed this book',
        foundBorrowedBook});   
    }
    res.status(200).send({
      message: 'Cleared, Not borrowed by you!' });
  })
  .catch(()=>{
    res.status(500).send({
      message: 'Internal Server Error'
    });
  })
  
}

const AllBorrowedOrNotReturnedBooks=(req,res,next)=>{

  const {userId}=req.params;
  const {returned}=req.query;
  if (!userId) {
    res.status(400).send({mesage:'supply userId'});
  }

  borrow.aggregate( [
    {
      $match:
         {
           $and: [ { returned : false  } , { returningdate: {$lt : new Date(Date.now()) } }] 
         }
    },
    {
      
      $lookup:
      {
        from: "bookmodels",
        localField: "bookId",
        foreignField: "_id",
        as: "book"
      } 
    }
      ] ).then((foundBorrowedBook)=>{
        if(foundBorrowedBook) {
          res.status(200).send({
            message:'You borrowed this book',
            foundBorrowedBook});   
        }
        res.status(200).send({
          message: 'Cleared, Not borrowed by you!' });
      })
      .catch(()=>{
        res.status(500).send({
          message: 'Internal Server Error'
        });
      })

}


const list_borrow_books = (req, res) => {
  // console.log("enetered");
  Boorow.find({}, function (err, book) {
    if (err) res.send(err);
    res.json(book);
  });
};

module.exports={
    borrowBook,
    returnBook,
    getBorrowedBook,
    list_borrow_books,
    AllBorrowedOrNotReturnedBooks,

};


