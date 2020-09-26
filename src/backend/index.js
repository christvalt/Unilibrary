const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var multer = require("multer");
var cors = require("cors");

//const path = require("path");
//need to delete file
const fs = require("fs");

//const client = require("socket.io").listen(5000).sockets;
var upload = multer({ dest: "uploads/" });
//const fs = require("fs");

//var upload = multer({ dest: "uploads /" });

//const users = require("./src/routes/api/users");
const AuthRoute = require("./src/routes/auth/authroute");
const AdminRoute = require("./src/routes/auth/admin");
const BookRoute = require("./src/routes/book/bookroutes");
const pro = require("./src/routes/uploadroute/profile");
const u = require("./src/routes/uploadroute/u");
const actor = require("./src/routes/author/author");
const borrow = require("./src/routes/Borrowroute/borrowroute");
const categ = require("./src/routes/category/Categoryroute");
//const chatUsercontroller = require("./src/controllers/chatUsersController");

//require the http module
//const http = require("http").Server(app);

// require the socket.io module
//const io = require("socket.io");
//integrating socketio
//socket = io(http);

var multer = require("multer");
const parser = require("./src/middlleware/routing");
const boorow_verif = require("./src/middlleware/BorrowMiddleware");
const Message = require("./src/models/chatModel/chatModel");

var upload = multer({ dest: "public/" });

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));

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
app.use("/AdminRoute", AdminRoute);
app.use("/BookRoute", BookRoute);
app.use("/profiles", pro);
app.use("/test", u);
app.use("/borrow", borrow);
app.use("/categ", categ);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

/**io.on("connection", (socket) => {
  console.log("connection");
  // Get the last 10 messages from the database.
  Message.find()
    .sort({ createdAt: -1 })
    .limit(10)
    .exec((err, messages) => {
      if (err) return console.error(err);

      // Send the last messages to the user.
      socket.emit("init", messages);
    });

  //event to send to user by system automaticaly
  socket.emit("welcome", {
    user: "admin",
    text: `${user.username}, welcome .`,
  });

  // Listen to connected users for a new message.
  socket.on("message", (msg) => {
    // Create a message with the content and the name of the user.
    const message = new Message({
      content: msg.content,
      username: msg.username,
    });
    console.log(message);

    // Save the message to the database.
    message.save((err) => {
      if (err) return console.error(err);
    });

    // Notify all other users about a new message.
    socket.broadcast.emit("push", msg);
  });
}); */

///

///that is the beginin of socket
io.on("connect", (socket) => {
  console.log("new");

  // Get the last 10 messages from the database.
  Message.find()
    .sort({ createdAt: -1 })
    .limit(10)
    .exec((err, messages) => {
      if (err) return console.error(err);

      // Send the last messages to the user.
      socket.emit("init", messages);
    });

  //event to send to user by system automaticaly
  socket.emit("welcome", {
    username: "admin",
    content: `${username}, welcome .`,
  });

  //event to send message
  socket.on("username", (username) => {
    // Array to store the list of users along with there respective socket id.
    this.users = [];
    //insert the instance user to the array(users) give him one soket id and one  userName
    this.users.push({
      id: socket.id,
      userName: userName,
    });

    let len = this.users.length;
    len--;

    //send to the client browser the  list of all the actual user
    io.emit("userList", this.users, this.users[len].id);
  });

  // Create a message with the content and the name of the user.
  const messages = new Message({
    content: msg.content,
    username: msg.username,
  });
  console.log(messages);

  // Save the message to the database.
  messages.save((err) => {
    if (err) return console.error(err);
  });

  //now get the mesage by server and with emit we send it to our browswer client

  socket.on("getMsg", (data) => {
    socket.broadcast.to(data.toid).emit("sendMsg", {
      msg: data.msg,
      name: data.name,
    });
  });
  socket.on("disconnect", () => {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === socket.id) {
        this.users.splice(i, 1);
      }
    }
    io.emit("exit", this.users);
  });
});
// // Connect to Socket.io
// io.on("connection", function (socket) {
//   // let chat = db.collection("chats");
//   console.log("connected");

//   // Create function to send status
//   sendStatus = function (s) {
//     socket.emit("status", s);
//   };

//   socket.on("join", { name, password }, (Callback) => {
//     console.log(name, password);
//     const { error, user } = addUser({ id: socket.id, name });
//     if (error) {
//       Callback(error);
//     }
//     //event for admin generated message  this event is "message".
//     //we use emit because we are emited mesage from backend to the frond-end
//     socket.emit("message", { user: "", text: `${user.name}, welcome .` });

//     Callback();
//   });

//   //event for user generated message
//   //but now we want to expect the event
//   socket.on("sendMessage", (message, callback) => {
//     const user = getUser(socket.id);

//     io.emit("message", { user: user.name, text: message });

//     callback();
//   });

//   // Get chats from mongo collection
//   Chat.find()
//     .limit(100)
//     .sort({ _id: 1 })
//     .toArray(function (err, res) {
//       if (err) {
//         throw err;
//       }

//       // Emit the messages
//       socket.emit("output", res);
//     });

//   // Handle input events
//   socket.on("input", function (data) {
//     let name = data.name;
//     let message = data.message;

//     // Check for name and message
//     if (name == "" || message == "") {
//       // Send error status
//       sendStatus("Please enter a name and message");
//     } else {
//       // Insert message
//       Chat.insert({ name: name, message: message }, function () {
//         socket.emit("output", [data]);

//         // Send status object
//         sendStatus({
//           message: "Message sent",
//           clear: true,
//         });
//       });
//     }
//   });

//   // Handle clear
//   socket.on("clear", function (data) {
//     // Remove all chats from collection
//     chat.remove({}, function () {
//       // Emit cleared
//       socket.emit("cleared");
//     });
//   });
//   socket.on("disconnect", () => {
//     console.log("user had left");
//   });
// });

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
