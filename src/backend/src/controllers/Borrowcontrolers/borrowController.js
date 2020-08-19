var mongoose = require("mongoose");
const express = require("express");


const borrowr= require("../../routes/Borrowroute/borrowroute");
const Book = require("../../models/borrow/borrowmodel");
const router = express.Router();





const borrow=(req,res)=>{
    console.log(req.body);

}


const returned=(req,res)=>{
    console.log(req.body);

}





module.exports={
    borrow,
    returned,

};