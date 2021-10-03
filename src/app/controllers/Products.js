const ProductsDomains = require("../domains/Products");
class ProductsController {
  async createProduct(req, res) {
    try {
      const {} = req.body;
      const createdProduct = await ProductsDomains.createProduct();
      return res.send(createdProduct);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async readProduct(req, res) {}
  async updateProduct(req, res) {}
  async deleteProduct(req, res) {}
}

module.exports = new ProductsController();
