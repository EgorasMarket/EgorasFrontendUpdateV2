'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("appointment_assigned_employees", {
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
      employee_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE

    })
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('appointment_assigned_employees');

  }
};
