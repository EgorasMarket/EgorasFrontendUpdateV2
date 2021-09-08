const Sequelize = require("sequelize");
const db = require("../database/connection");

module.exports = db.sequelize.define("voters", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  tracker: {
    type: Sequelize.STRING(300),
    allowNull: true,
  },
  
  address: Sequelize.STRING(200),
  transaction_hash: Sequelize.STRING(200),
  
  type: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  which: Sequelize.STRING(20),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
