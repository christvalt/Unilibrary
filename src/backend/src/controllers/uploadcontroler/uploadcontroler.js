var mongoose = require("mongoose");
var express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { link } = require("fs");

var storage = multer.diskStorage({
  // file upload destination
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    console.log(req);
    var filename =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    console.log(filename);
    req.body.coverImage = filename;
    callback(null, filename);
  },
});

var upload = multer({
  storage: storage,
  limits: { fileSize: "50mb" },
  fileFilter: function (req, file, callback) {
    checFileType(file, callback);
  },
}).single("avatar");

router.get("/:id", function (req, res) {
  console.log(req.params, req.body);
  res.end(__dirname + "/index.html");
});

function checFileType(file, callback) {
  const filetypes = /jpg|jpeg|png|gif/;
  //check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  //check the mime type
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return callback(null, true);
  } else {
    callback("Error:Images Only !");
  }
}

module.exports = {
  upload,
};
