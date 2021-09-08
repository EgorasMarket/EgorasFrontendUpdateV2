const Sequelize = require("sequelize");
const db = require("../database/connection");

module.exports = db.sequelize.define("refunds", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  amount: {
    type: Sequelize.DECIMAL(65, 30),
    allowNull: true
},
  loanID:{
      type: Sequelize.INTEGER(11),
      allowNull: false
  },
address: Sequelize.STRING(200),
  block_no: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
  },
transaction_hash: Sequelize.STRING(200),
  block_no: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
