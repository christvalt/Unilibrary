var mongoose = require("mongoose");

//const Admin = require("../../models/authormodel/adminModel");
const Admin = require("../../models/admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { response } = require("express");

const register = (req, res, next) => {
  console.log(req.body.name);
  bcrypt.hash(req.body.password, 10, function (err, hashedpass) {
    if (err) {
      // console.log("error hashing");
      res.json({
        error: err,
      });
    } else {
      let user = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: hashedpass,
      });
      user
        .save()
        .then((user) => {
          res.json({
            message: "User added succesfully",
          });
        })
        .catch((err) => {
          res.json({
            message: "an error occured",
          });
        });
    }
    //console.log(req.body)
  });
};

const login = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  Admin.findOne({ $or: [{ email: username }] }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          res.json({
            error: err,
          });
        }
        if (result) {
          let token = jwt.sign({ name: user.name }, "AZQ,PI)0(", {
            expiresIn: "4h",
          });
          res.json({
            message: "Login succesfully!",
            token,
            user,
          });
        } else {
        }
      });
    } else {
      res.json({
        message: "No user found!",
      });
    }
  });
};

const logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
};
/*
router.post('/users/me/logout', auth, async (req, res) => {
    // Log user out of the application
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})
 */

module.exports = {
  register,
  login,
  logout,
};
