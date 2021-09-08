const Sequelize = require("sequelize");
const db = require("../database/connection");

module.exports = db.sequelize.define("companies", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  cac: Sequelize.STRING(200),
  name_of_company: Sequelize.STRING(200),
  share_capital: Sequelize.STRING(50),
  location: Sequelize.STRING(200),
  address: Sequelize.STRING(200),
  company_offset_loan: {
    type: Sequelize.BOOLEAN,
    allowNull: true
},
company_description: {
  type: Sequelize.TEXT,
  allowNull: true,
},

transaction_hash: Sequelize.STRING(200),
isApproved: {
  type: Sequelize.BOOLEAN,
  allowNull: true,
  defaultValue: 0
},
isActiveVotingPeriod: {
  type: Sequelize.BOOLEAN,
  allowNull: false,
  defaultValue: 0
},
validated: {
  type: Sequelize.BOOLEAN,
  allowNull: false,
  defaultValue: 0
},

declined: {
  type: Sequelize.DECIMAL(65, 30),
  allowNull: true,
},
accepted: {
  type: Sequelize.DECIMAL(65, 30),
  allowNull: true,
},
countDown: {
  type: Sequelize.DATE,
  allowNull: true,
},
company_logo: Sequelize.STRING(500),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
