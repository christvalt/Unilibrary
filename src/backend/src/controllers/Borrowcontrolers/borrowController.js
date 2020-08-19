var mongoose = require("mongoose");
const express = require("express");



const borrow = require("../../models/borrow/borrowmodel");
const Book = require("../../models/borrow/borrowmodel");
const User = require("../../models/authormodel/autormodel");
const router = express.Router();





const borrowBook=(req,res,next)=>{

    const { foundBook } = req;
    return foundBook
      .update({ quantity: foundBook.quantity - 1 })
      .then(updatedBorrowedBook =>
        // Else, user is eligible to borrow book
        Borrow
          .create({
            returned: false,
            userId: req.decoded.data.id,
            bookId: req.body.bookId,
            dueDate:
            new Date(Date.now() + (3 * 24 * 60 * 60 * 1000)),
            actualReturnDate: Date.now(),
          }).then((borrowingRecord) => {
            req.loanRecords = {
              surcharge: false,
              newBookRecord: updatedBorrowedBook,
              newBorrowRecord: borrowingRecord
            };
            next();
          }).catch(() => res.status(500)
            .send({ message: 'Internal Server Error' }))
      );
}


const returnBook=(req,res)=>{
    const { borrowId } = req.body;
    if (!borrowId) return res.status(400).send('Ensure borrowId is present');
    const { dueDate } = req.body.borrow;
    const surcharge = moment(Date.now()) > moment(dueDate);
    const bookToReturn = req.foundBook;
    return Borrow
      .update({
        returned: true,
        actualReturnDate: Date.now(),
      }, {
        where: { id: req.body.borrowId },
        returning: true,
        plain: true
      })
      .then((borrowUpdated) => {
        if (borrowUpdated[0] === 0) {
          return res.status(404).send({
            message: 'You have not borrowed this book'
          });
        }
        return Book
          .update({
            quantity: bookToReturn.quantity + 1,
          }, {
            where: { id: bookToReturn.id },
            returning: true,
            plain: true
          }).then((updatedBook) => {
            req.loanRecords = {
              surcharge,
              newBookRecord: updatedBook,
              newBorrowRecord: borrowUpdated
            };
            next();
          });
      }).catch(() => res.status(500)
        .send({ message: 'Internal Server Error' }));

}

module.exports={
    borrowBook,
    returnBook,

};


