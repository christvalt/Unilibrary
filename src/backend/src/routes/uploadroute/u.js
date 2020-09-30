var mongoose = require("mongoose");
const express = require("express");
const fs = require("fs");

const uploadcontroler = require("../../controllers/uploadcontroler/uploadcontroler");
var bookcontrollers = require("../../controllers/bookcontrollers/booksController");
//ar tetupload = require("../../controllers/uploadcontroler/testUpload");
const {
  delete_book,
} = require("../../controllers/bookcontrollers/booksController");
const {
  update_book,
} = require("../../controllers/bookcontrollers/booksController");
const router = express.Router();

router.post("/create/image_book", (req, res) => {
  console.log("testt");
  console.log(req.body);
  uploadcontroler.upload(req, res, function (err) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any

    console.log(req.file);
    // return res.end(req.body.coverImage);
    if (err) {
      console.log(err);
      return res.end("Error uploading file.");
    }

    bookcontrollers.create_book(req, res);
  });
});

router.put("/update/image_book", function (req, res) {
  uploadcontroler.upload(req, res, function (err) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    if (err) {
      return res.end("Error uploading file.");
    }
    update_book(req, res);
  });
});

router.delete("/delete/:imagename", function (req, res) {
  message: "Error! in image upload.";
  if (!req.params.imagename) {
    console.log("No file received");
    message = "Error! in image delete.";
    return res.status(500).json("error in delete");
  } else {
    console.log("file received");
    console.log(req.params.imagename);
    try {
      fs.unlinkSync("./uploads" + "/" + req.params.imagename + ".png");
      console.log("successfully deleted /tmp/hello");
      return res.status(200).send("Successfully! Image has been Deleted");
      delete_book(req, res);
    } catch (err) {
      // handle the error
      return res.status(400).send(err);
    }
  }
});
module.exports = router;

/**console.log(req.files);
  console.log(__dirname);
  res.send("Test"); */

/*  if (req.file==undefined) {
    res.render('index',{
      msg : 'Error:Mo File selected'
    })
    
  } */
