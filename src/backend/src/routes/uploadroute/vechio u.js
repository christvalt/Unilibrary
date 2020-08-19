var mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.json({ limit: "50mb" })); // to support JSON-encoded bodies
router.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    limit: "50mb",
    extended: true,
    parameterLimit: 1000000,
  })
);

// var path = require("path");

const fileUpload = require("express-fileupload");

// var morgan = require("morgan");

// router.use(morgan("combined"));

router.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

//router.use("/files", express.static(path.join(__dirname, "../../uploads")));

//server.js

const multer = require("multer");
// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "./uploads");
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.split(".")[
      file.originalname.split(".").length - 1
    ];
    cb(null, file.fieldname + "-" + Date.now() + "." + '.jpg');
  },
});
const upload = multer({ storage: storage }).single("avatar");

router.post("/fichier", function (req, res, next) {
  upload(req, res, function (err) {
    if (err) {
    }
    res.json({
      success: true,
      message: " image uploded",
    });
    console.log(req.file);
  });
});

module.exports = router;

/**console.log(req.files);
  console.log(__dirname);
  res.send("Test"); */