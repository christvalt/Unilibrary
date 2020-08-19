const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var Borrowschema = new Schema({

  idbook: {
    type: String,
    required: true,
  },
  iduser: {
    type: Number,
    required: true,
  },
  Boorowingdate: {
    type: Date,
    required: true,
  },
  returningdate: {
    type: Date,
    required: true,
  },
  actualReturnDate: {
    type: Date,
    allowNull: false,
  },


});

/*Boorow.associate = (models) => {
    Borrow.belongsTo(models.Book, {
        //trouver l'equivalent en mogo
      foreignKey: 'bookId',
      as: 'book',
      onDelete: 'CASCADE',
    });
    Borrow.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    });
  };
 */

const Boorow = mongoose.model("Borrowmodel", Borrowschema);

module.exports = Boorow;

