var express = require("express");
const router = express.Router();
const multer = require("multer");
const uploadcontroler = require("../../controllers/uploadcontroler/uploadcontroler");
//var upload = multer({ dest: "uploads/" });
const path = require("path");
const fs = require("fs");

//const uploadcontroler = require("../../controllers/uploadcontroler/uploadcontroler");

router.post("/fichier", function (req, res) {
  uploadcontroler.upload(req, res, function (err) {
    if (err) {
      console.log("No file received");
    } else {
      res.json({
        succes: true,
        message: "image uploded",
      });
    }
    console.log(req.files);

    // Everything went fine.
  });
});
/*

router.delete("/delete", function (req, res) {
  message: "Error! in image upload.";
  if (!req.params.imagename) {
    console.log("No file received");
    message = "Error! in image delete.";
    return res.status(500).json("error in delete");
  } else {
    console.log("file received");
    console.log(req.params.imagename);
    try {
      fs.unlinkSync(DIR + "/" + req.params.imagename + ".png");
      console.log("successfully deleted /tmp/hello");
      return res.status(200).send("Successfully! Image has been Deleted");
    } catch (err) {
      // handle the error
      return res.status(400).send(err);
    }
  }
});
*/

/*
app.delete('/api/v1/delete/:imagename',function (req, res) {
  message : "Error! in image upload.";
    if (!req.params.imagename) {
        console.log("No file received");
        message = "Error! in image delete.";
        return res.status(500).json('error in delete');
    
      } else {
        console.log('file received');
        console.log(req.params.imagename);
        try {
            fs.unlinkSync(DIR+'/'+req.params.imagename+'.png');
            console.log('successfully deleted /tmp/hello');
            return res.status(200).send('Successfully! Image has been Deleted');
          } catch (err) {
            // handle the error
            return res.status(400).send(err);
          }
        
      }
 
});*/

module.exports = router;
