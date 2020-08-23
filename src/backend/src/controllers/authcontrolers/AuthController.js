var mongoose = require("mongoose");

const User = require("../../models/usermodels/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { response } = require("express");

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedpass) {
    if (err) {
      res.json({
        error: err,
      });
    }
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedpass,
    });
    user
      .save()
      .then((user) => {
        res.json({
          message: "User added succesfully",
        });
      })
      .catch((error) => {
        res.json({
          message: "an error occured",
        });
      });
  });
};

const login = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ $or: [{ email: username }] }).then(
    (user) => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              error: err,
            });
          }
          if (result) {
            let token = jwt.sign({ name: user.name }, "AZQ,PI)0(", {
              expiresIn: "1h",
            });
            res.json({
              message: "Login succesfully!",
              token,
            });
          } else {
            
          }
        });
      } else {
        res.json({
          message: "No user found!",
        });
      }
    }
  );
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
