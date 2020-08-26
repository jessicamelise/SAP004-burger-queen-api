'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products_x_order = sequelize.define('Products_x_order', {
    amount: DataTypes.INTEGER,
    add_extra: DataTypes.BOOLEAN,
    type_protein: DataTypes.BOOLEAN
  }, {});
  Products_x_Order.associate = function(models) {
    Products_x_order.belongsTo(models.Products)
    Products_x_order.belongsTo(models.Order)
  };
  return Products_x_order;
};