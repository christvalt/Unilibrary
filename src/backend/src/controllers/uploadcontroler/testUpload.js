var mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.use(bodyParser.json({ limit: "50mb" })); // to support JSON-encoded bodies
router.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    limit: "50mb",
    extended: true,
    parameterLimit: 1000000,
  })
);

var path = require("path");

const fileUpload = require("express-fileupload");

var morgan = require("morgan");

router.disable("x-powered-by");

router.use(morgan("combined"));

router.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

router.use(
  "/files",
  this.express.static(path.join(__dirname, "../../uploads"))
);

//server.js

const multer = require("multer");
// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.split(".")[
      file.originalname.split(".").length - 1
    ];
    cb(null, file.fieldname + "-" + Date.now() + "." + ext);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);

    if (
      ext !== ".svg" &&
      ext !== ".png" &&
      ext !== ".jpg" &&
      ext !== ".gif" &&
      ext !== ".jpeg"
    ) {
      req.fileValidationError = "Erreur de format";
      return callback(null, false);
    }

    callback(null, true);
  },
}).fields([
  { name: "image", maxCount: 1 },
  { name: "image_secondaire", maxCount: 8 },
]);

router.post("/uploadfile", upload.single("myFile"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  next(file);
});

router.all("/", function (req, res, next) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      // that.sharedController.parent.sendMessage(err.code, (data) =>
      //res.send(data)
      // );
      console.log(err);
    } else if (err) {
      // An unknown error occurred when uploading.
      console.log(err);
    }
    // Everything went fine.

    req.newImages = req.files;

    if (req.files)
      that.resizer.launch(that.sharedController.getFolder(req), req.files);

    next();
  });
});
