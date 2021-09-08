'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("appointment_services", {
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
      service_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE

    })
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('appointment_services');

  }
};
