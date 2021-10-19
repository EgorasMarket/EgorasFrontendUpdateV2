const Sequelize = require("sequelize");
const db = require("../database/connection");

module.exports = db.sequelize.define("blocks", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  block_no: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
  },
  blockType: Sequelize.STRING(200),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
