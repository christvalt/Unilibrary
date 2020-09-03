var express = require("express");
const router = express.Router();

const parser = require("../../middlleware/routing");
router.use(parser);



var CategoryController = require("../../controllers/categoriecontrollers/CategoryController");


//add o create a new category

router.post('/category', CategoryController.create_categorie);

// list of all category

router.get('/categories', CategoryController.listCategory);


module.exports = router;
