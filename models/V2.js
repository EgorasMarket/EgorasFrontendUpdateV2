const Sequelize = require("sequelize");
const db = require("../database/connection");

module.exports = db.sequelize.define("v2_loans", {
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
  loan_duration: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
  },
  category: Sequelize.STRING(300),
  branch_name: Sequelize.STRING(100),
  story: Sequelize.TEXT,
  title: Sequelize.STRING(300),
  cover_image: Sequelize.STRING(200),
  other_images: Sequelize.TEXT,
  due_date: Sequelize.DATE,
  backed: {
    type: Sequelize.DECIMAL(65, 30),
    allowNull: false
  },
  isLoan: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  },
  is_display: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  },
  creator: Sequelize.STRING(100),
  transaction_hash: Sequelize.STRING(300),
  is_approved: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  },
  loan_amount: {
    type: Sequelize.DECIMAL(65, 30),
    allowNull: false,
    defaultValue: 0
  },
  inventry_fee: {
    type: Sequelize.DECIMAL(65, 30),
    allowNull: false,
    defaultValue: 0
  },
  votingThreshold: {
    type: Sequelize.DECIMAL(65, 30),
    allowNull: false,
    defaultValue: 0
  },
 
  isConfirmed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
