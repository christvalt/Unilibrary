var express = require("express");
const router = express.Router();

const BorrowController = require("../../controllers/Borrowcontrolers/borrowController");

const authenticate = require("../../middlleware/authenticate");

//create borrow

router.post("/borroow", borrowController.borrow);

//returned boook

router.post("/login", borrowController.returned);

module.exports = router;
