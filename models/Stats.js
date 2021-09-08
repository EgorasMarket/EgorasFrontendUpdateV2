const Sequelize = require("sequelize");
const db = require("../database/connection");

module.exports = db.sequelize.define("stats", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
price: {
  type: Sequelize.DECIMAL(65, 30),
  allowNull: false
},
value: {
  type: Sequelize.DECIMAL(65, 30),
  allowNull: false
},
symbol: Sequelize.STRING(200),
type: Sequelize.STRING(200),
createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
});
