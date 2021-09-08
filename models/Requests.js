const Sequelize = require("sequelize");
const db = require("../database/connection");

module.exports = db.sequelize.define("requests", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  requestID: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },
   changeTo: {
    type:  Sequelize.DECIMAL(65, 30),
    allowNull: false,
  },
  requestType: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },

creator: Sequelize.STRING(200),
reason: {
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

  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
