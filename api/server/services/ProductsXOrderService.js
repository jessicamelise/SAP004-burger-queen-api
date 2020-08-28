import database from '../src/models'

class Products_x_OrderService {
  static async findByOrderId(orderId) {
    try {
      return await database.Products_x_order.findAll({where:{orderId}})
    } catch (error) {
      throw error
    }
  }
  static async add(orderId, newProducts_x_Order) {
  try {
    return await database.Products_x_order.create({...newProducts_x_Order, orderId})
  } catch (error) {
    throw error
  }
}

}
export default Products_x_OrderService