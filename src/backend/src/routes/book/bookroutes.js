var express = require("express");
const router = express.Router();

var booksController = require("../../controllers/bookcontrollers/booksController");
const uploadcontroler = require("../../controllers/uploadcontroler/uploadcontroler");

const authenticate = require("../../middlleware/authenticate");
const parser = require("../../middlleware/routing");
router.use(parser);

router.get("/books", booksController.list_books);


router.post("/books",booksController.create_book);

//router.post("/books"  ,booksController.create_book);
router.put("/books/:id", booksController.read_book);
router.put("/books/:id", authenticate, booksController.update_book);
router.put("/books/:id", authenticate, booksController.delete_book);

module.exports = router;

