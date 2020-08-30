const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var multer = require("multer");
var cors = require('cors')

//const path = require("path");
//need to delete file
const fs = require("fs");

//const client = require("socket.io").listen(5000).sockets;
var upload = multer({ dest: "uploads/" });
//const fs = require("fs");

//var upload = multer({ dest: "uploads /" });

//const users = require("./src/routes/api/users");
const AuthRoute = require("./src/routes/auth/authroute");
const BookRoute = require("./src/routes/book/bookroutes");
const pro = require("./src/routes/uploadroute/profile");
const u = require("./src/routes/uploadroute/u");
const actor = require("./src/routes/author/author");
const borrow = require("./src/routes/Borrowroute/borrowroute");
const categ = require("./src/routes/category/Categoryroute");
const { Socket } = require("dgram");

const app = express();

var multer = require("multer");
const parser = require("./src/middlleware/routing");
var upload = multer({ dest: "public/" });


// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }))

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/db_first", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use("/AuthRoute", AuthRoute);
app.use("/BookRoute", BookRoute);
app.use("/profiles", pro);
app.use("/test", u);
app.use("/borrow", borrow);
app.use("/categ", categ);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

/*
//real time 
//connect to socket.io
client.on("connection", function (Socket) {
  let chat = db.collection("");
  //create function to send ststus
  sendStatus = function (s) {
    Socket.emit("status", s);
  };
  //Get chats from mongo collection
  chat
    .find()
    .limit(100)
    .sort({ id: 1 })
    .toArray(function (err, res) {
      if (err) {
        throw err;
      }
      //Emit the messages
      Socket.emit("output", res);

      //handle input events
      Socket.on("input", function (data) {
        let name = data.name;
        let message = data.message;

        //checkk for name and message
        if (name == "" || message == "") {
          //send error sendStatus
          sendStatus("please enter a name and message");
        } else {
          //insert message
          chat.insert({ name: name, message: message }, function () {
            client.emit("output ", [data]);

            //send status object
            sendStatus({
              message: "Messages sent ",
              clear: true,
            });
          });
        }
      });
      //handle clear
      Socket.on("clear", function (data) {
        //remove all chats from collection
        chat.remove({}, function (params) {
          //emit cleared
          Socket.emit("cleared");
        });
      });
    });
});
*/
