'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: Sequelize.STRING(300),
      last_name: Sequelize.STRING(300),
      dob: Sequelize.DATE,
      picture: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      phone: {
        type: Sequelize.INTEGER(11),
        allowNull: true
      },
      email: {
        type: Sequelize.STRING(200),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(300),
        allowNull: true
      },
      job_function: Sequelize.STRING(300),
      start_date: Sequelize.DATE,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE

    })
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('users');

  }
};
