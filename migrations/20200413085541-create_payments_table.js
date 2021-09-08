'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("payments", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      appointment_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      method: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      amount: {
        type: Sequelize.DECIMAL(65, 30),
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE

    })
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('payments');

  }
};
