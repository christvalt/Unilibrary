var express = require("express");
const router = express.Router();

var booksController = require("../../controllers/bookcontrollers/booksController");
const uploadcontroler = require("../../controllers/uploadcontroler/uploadcontroler");
const BookMiddleware = require("../../middlleware/BookMiddleware");

const authenticate = require("../../middlleware/authenticate");
const parser = require("../../middlleware/routing");
const { validateAndCheckIfBookExist } = BookMiddleware;
router.use(parser);

//list all book by admin
router.get("/books", booksController.list_books);

//create book by admin
router.post("/books", validateAndCheckIfBookExist, booksController.create_book);
// router.post("/books",booksController.create_book);

//router.post("/books"  ,booksController.create_book);
router.get("/books/:id", booksController.read_book);
router.put("/books/:id", authenticate, booksController.update_book);
router.delete("/books/:id", booksController.delete_book);

// Find a specific book and return it
router.get("/books/:title", booksController.findBook);
//router.get('/books/:bookId', validateAndCheckIfBookExist, booksController.findBook);

module.exports = router;
