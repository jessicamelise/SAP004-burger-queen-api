'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products_x_order', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'Products', key:'id'}
      },
      order_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'Orders', key:'id'}
      },
      amount: {
        type: Sequelize.INTEGER
      },
      add_extra: {
        type: Sequelize.BOOLEAN,
      },
      type_protein: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products_x_order');
  }
};