var express = require("express");
const router = express.Router();




//const { borrowBook, returnBook } = BorrowController;
    

const borrowController = require("../../controllers/Borrowcontrolers/borrowController");

const authenticate = require("../../middlleware/authenticate");

//create borrow
router.get("/test", (req, res)=>{
  res.end("Test")
});
router.put('/users/:userId/books',  borrowController.returnBook);
  
  router.post('/users/:userId/books', borrowController.borrowBook);

module.exports = router;
