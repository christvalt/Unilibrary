var moment = require('moment'); // require
moment().format(); 
var mongoose = require("mongoose");
const express = require("express");



const borrow = require("../../models/borrow/borrowmodel");
const Book = require("../../models/borrow/borrowmodel");
const User = require("../../models/authormodel/autormodel");
const Boorow = require("../../models/borrow/borrowmodel");
const router = express.Router();


 /**
   * @static
   *
   * @description Borrow a book from the library
   *
   * @param {object} req - The request payload sent to the route
   * @param {object} res - The response payload sent back from controller
   * @param {object} next - After endpoint middleware call
   *
   * @returns {object} - Message & Borrowed Book
   *
   * @memberOf BorrowController
   */
const borrowBook=(req,res,next)=>{
    
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
    .then(() => {
        console.log(req.body.bookId)
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
                    res.end("Super"); 
              }
            }); 
      })  
      .catch((err) => {
          console.log(err)
        res.json({
          message: 'Internal Server Error' ,
        });
      });
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

module.exports={
    borrowBook,
    returnBook,

};


