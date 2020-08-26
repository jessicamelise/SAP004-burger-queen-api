'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    is_active: DataTypes.BOOLEAN,
    table: DataTypes.INTEGER,
    client: DataTypes.STRING,
    waiter: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    Order.hasMany(models.Products_x_order)
  };
  return Order;
};