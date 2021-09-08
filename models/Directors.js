const Sequelize = require("sequelize");
const db = require("../database/connection");

module.exports = db.sequelize.define("directors", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  position_of_director: Sequelize.STRING(200),
  name_of_director: Sequelize.STRING(200),
  picture_of_director: Sequelize.STRING(200),
  address: Sequelize.STRING(200),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
