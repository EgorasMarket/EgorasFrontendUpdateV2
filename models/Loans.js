const Sequelize = require("sequelize");
const db = require("../database/connection");

module.exports = db.sequelize.define("loans", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  loanID: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
  },
  getTotalWeeks: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
  },
  loan_tile: Sequelize.STRING(200),
  cover_image: Sequelize.STRING(200),
  loan_duration: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
  },
  loan_category: Sequelize.STRING(50),
  country: Sequelize.STRING(200),
  loan_fees: {
    type: Sequelize.BOOLEAN,
    allowNull: true
},
loan_payable: {
  type: Sequelize.BOOLEAN,
  allowNull: true
},
story: {
  type: Sequelize.TEXT,
  allowNull: true,
},
loan_amount: {
  type: Sequelize.DECIMAL(65, 30),
  allowNull: false
},
payment_model: Sequelize.STRING(50),
weekly_returns: {
  type: Sequelize.DECIMAL(65, 30),
  allowNull: false
},
last_returns: {
  type: Sequelize.DECIMAL(65, 30),
  allowNull: false
},
transaction_hash: Sequelize.STRING(200),
created_by: Sequelize.STRING(200),
is_approved: {
  type: Sequelize.BOOLEAN,
  allowNull: true,
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

countDown: {
  type: Sequelize.DATE,
  allowNull: true,
},
paid: {
  type: Sequelize.DECIMAL(65, 30),
  allowNull: false,
  defaultValue: 0
},
address: Sequelize.STRING(200),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
