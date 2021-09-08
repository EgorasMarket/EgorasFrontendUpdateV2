const Sequelize = require("sequelize");
const db = require("../database/connection");

module.exports = db.sequelize.define("new_loans", {
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
  loan_tile: Sequelize.STRING(200),
  story: Sequelize.TEXT,
  branch_name: Sequelize.STRING(200),
  loan_amount: {
    type: Sequelize.DECIMAL(65, 30),
    allowNull: false
  },
  loan_duration: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
  },
  weekly_payment: {
    type: Sequelize.DECIMAL(65, 30),
    allowNull: false
  },
  cover_image: Sequelize.STRING(200),
  loan_fee: {
    type: Sequelize.DECIMAL(65, 30),
    allowNull: true
},
countDown: {
  type: Sequelize.DATE,
  allowNull: true,
},
creator: Sequelize.STRING(200),
is_display: {
  type: Sequelize.BOOLEAN,
  allowNull: false,
  defaultValue: 0
},
is_approved: {
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
paid: {
  type: Sequelize.DECIMAL(65, 30),
  allowNull: false,
  defaultValue: 0
},
loan_category: Sequelize.STRING(50),
transaction_hash: Sequelize.STRING(200),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
