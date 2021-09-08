'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("appointments", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(300),
        allowNull: false

      },
      phone: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      addedBy: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE

    })
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('appointments');

  }
};
