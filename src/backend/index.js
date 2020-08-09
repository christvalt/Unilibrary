const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//const users = require("./src/routes/api/users");
const AuthRoute = require("./src/routes/auth/authroute");
const BookRoute = require("./src/routes/book/bookroutes");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/db_first", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.use("/AuthRoute", AuthRoute);
app.use("/BookRoute", BookRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

/**const AuthRoute = require("./src/r/authroute");
app.use("./src/r/authroute", AuthRoute);*/
