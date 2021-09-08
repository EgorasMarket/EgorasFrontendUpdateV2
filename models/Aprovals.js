const Sequelize = require("sequelize");
const db = require("../database/connection");

module.exports = db.sequelize.define("approvals", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  loanID:{
      type: Sequelize.INTEGER(11),
      allowNull: false
  },
  state:{
    type: Sequelize.INTEGER(11),
    allowNull: false
},
transaction_hash: Sequelize.STRING(200),
  block_no: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
