'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products_x_order = sequelize.define('Products_x_order', {
  }, {});
  Products_x_order.associate = function(models) {
    Products_x_order.belongsTo(models.Products, {
      foreignKey: 'productId'
    })
    Products_x_order.belongsTo(models.Order, {
      foreignKey: 'orderId'
    })
  };
  return Products_x_order;
};