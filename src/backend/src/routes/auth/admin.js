var express = require("express");
const router = express.Router();

const AdminController = require("../../controllers/authcontrolers/adminController");
//const AutController = require("../../controllers/authcontrolers/AuthController");

const hasAdminRights = require("../../middlleware/adminMiddleware");

router.post("/register", hasAdminRights, AdminController.register);
router.post("/login", hasAdminRights, AdminController.login);

module.exports = router;
