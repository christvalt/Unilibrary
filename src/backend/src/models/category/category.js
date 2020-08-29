const mongoose = require("mongoose");
const Schema = mongoose.Schema;
coverImageBasePath ='./upload';

var Categoryschema = new Schema({

  title: {
    type: String,
    unique: {
      args: true,
      msg: 'Category already exists'
    },
  }
 
});

const Category = mongoose.model("categoty", Categoryschema);

module.exports = Category;


