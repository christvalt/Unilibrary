var express = require("express");
const router = express.Router();

var booksController = require("../../controllers/bookcontrollers/booksController");

router.get("/books", booksController.list_books);
router.post("/books", function (req, res) {
  booksController.create_books;
});
//router.get("/books/:id", booksController.read_movie);
router.put("/books/:id", function (req, res) {
  booksController.update_movie;
});

/*	app.route('/movies/:id')
		.get(moviesController.read_movie)
		.put(moviesController.update_movie)
		.delete(moviesController.delete_movie); */

//app.route('/query')
//.get(moviesController.queryDB)
module.exports = router;
