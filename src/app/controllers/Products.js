const ProductsDomains = require("../domains/Products");
class ProductsController {
  async createProduct(req, res) {
    try {
      const { id_code, name, color, description, value } = req.body;
      const { id_business } = req;
      const createdProduct = await ProductsDomains.createProduct(
        {
          name,
          color,
          description,
          value,
        },
        { id_code },
        id_business
      );
      return res.json(createdProduct);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async readProduct(req, res) {
    try {
      const { id_business } = req;
      const selectProducts = await ProductsDomains.readProductsByFk({
        id_business,
      });
      return res.json(selectProducts);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async updateProduct(req, res) {}
  async deleteProduct(req, res) {}
}

module.exports = new ProductsController();
