var mongoose = require("mongoose");
const express = require("express");


const Book = require("../../models/bookmodel/bookModel");
const Category = require("../../models/category/category");

/**
  /**
   * 
   *
   * @description Adds new category to the library
   *
   * @param {object} req - The request payload sent to the controller
   * @param {object} res - The request payload sent from the contorller
   * 
   */

  // const create_category = (req, res) => {

  //   const { title } = req.body;
  //  // Searches if Category exists in the database
  //  Category.findOne({ title:req.title})
  //  .then((foundCat)=>{
  //   if (foundCat) {
  //      res.status(409).send({
  //      // message: `Conflict! ${req.Category.title} exists already`,
  //       foundCat });
  //   }

    // If cartegory does not exist, create new category.




    const create_categorie = (req, res) => {
      var new_category = new Category(req.body);
      console.log(new_category);
      new_category.save(function (err, book) {
        if (err) res.send(err);
        res.status(201).json(book);
      });
    };

  //   var new_category = new Category(req.Category);
  //   // console.log(req.body)
  //   // console.log(new_category);
  //   new_category.save()
  //   .then(category => res.status(201).send({
  //     message: `${category.title}, successfully added`,
  //     category
  //   }))
  //   .catch(() =>
  //     res.status(500).send({ message: 'Internal Server Error' }));
  //  })
  // };

  /**
   *
   * @description Lists all Category in the library
   *
   * @param {object} req - The request payload sent to the controller
   * @param {object} res - The request payload sent from the contorller
   *
   * @returns {object} - List of Categories
   *
   * @memberOf BookController
   */
  const  listCategory =(req, res) =>{
     Category
      .find({})
      .then((categories) => {
        if (categories[0] === undefined) {
          res.status(204).send();
        }
       res.status(200).send({ categories });
      })
      .catch(() => res.status(500).send({ message: 'Internal Server Error' }));
  }


module.exports={
  create_categorie,
  listCategory
}
