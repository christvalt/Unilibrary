var express = require("express");
const router = express.Router();

const AutController = require("../../controllers/authcontrolers/AuthController");
const hasAdminRights = require("../../middlleware/adminMiddleware");

const authenticate = require("../../middlleware/authenticate");

router.post("/register", AutController.register);
router.post("/login", AutController.login);
//router.post("/login", hasAdminRights, AutController.login);

module.exports = router;
