'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    table: DataTypes.INTEGER,
    client: DataTypes.STRING,
    items: DataTypes.VIRTUAL
  }, {});
  Order.associate = function(models) {
    Order.hasMany(models.Products_x_order, {
      foreignKey: 'orderId'
    })
  };
  return Order;
};