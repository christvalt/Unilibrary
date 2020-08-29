var express = require("express");
const router = express.Router();




//const { borrowBook, returnBook } = BorrowController;
    

const borrowController = require("../../controllers/Borrowcontrolers/borrowController");

const checkIfBorrowExist = require("../../middlleware/BorrowMiddleware");
const validateAndCheckIfBookExist =require("../../middlleware/BookMiddleware")
const authenticate = require("../../middlleware/authenticate");


//create borrow
router.get("/test", (req, res)=>{
  res.end("Test")
});

//return book for the library 

//error whe i had validationAndChekifBookExist
router.put('/users/:userId/books',borrowController.returnBook);

//borrow a  specific book by one user  
//error whe i had validationAndChekifBookExist and checkIfBorrowExist
router.post('/users/:userId/books',borrowController.borrowBook);



// // Get a specific book that was borrowed
router.get('/borrowed/:bookId', borrowController.getBorrowedBook);


  // Get a specific book that was borrowed
  router.get('/borrowed/:bookId', borrowController.getBorrowedBook);

  // all borrowed book
  router.get('/borrowed', borrowController.list_borrow_books);


  //List of books borrowed by a user and not returned to the library

  router.get('/users/:userId/books', borrowController.AllBorrowedOrNotReturnedBooks);  


//List of all books borrowed by a user
  router.get('/borrowed/:userId/books', borrowController.AllBorrowedOrNotReturnedBooks);

module.exports = router;
