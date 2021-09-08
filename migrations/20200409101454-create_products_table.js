'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("products", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(300),
        allowNull: false,
        unique: true
      },
      category: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(65, 30),
        allowNull: false
      },
      weight: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      weight_in: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      picture: {
        type: Sequelize.STRING(300),
        allowNull: false,
        unique: true
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      addedBy: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      approvedBy: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE

    })
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('products');

  }
};
