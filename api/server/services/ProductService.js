import database from '../src/models'

class ProductService {
  static async all() {
    try {
      return await database.Products.findAll()
    } catch (error) {
      throw error
    }
  }
  static async add(newProduct) {
  try {
    return await database.Products.create(newProduct)
  } catch (error) {
    throw error
  }
}

}
export default ProductService