const { Op } = require("sequelize");
const { Products } = require("../models");
const ManufacturingDomain = require("./Manufacturing");
class ProductsDomains {
  async createProduct(product, lot, id_business) {
    Products.sync();
    product["id_code"] = Math.floor(1000 + Math.random() * 9000) + lot.id_code;
    const { id_code, ...rest } = product;
    const selectLet = await ManufacturingDomain.createLot({
      id_code: lot.id_code,
    });
    const createdProduct = await Products.create({
      id_code,
      name: rest.name,
      color: rest.color,
      description: rest.description,
      value: rest.value,
      id_business,
      id_manufacturing: selectLet.dataLot.id,
    });
    return createdProduct;
  }
  async readProductsByFk(id_business) {
    const selectProducts = await Products.findAll({ where: id_business });
    return selectProducts;
  }
  async updateProduct(product, id_code, id_business) {
    const updatedProdutc = await Products.update(product, {
      where: { [Op.and]: { id_business, id_code } },
    });
    return { msg: "Produto atualizado!", updatedProdutc };
  }
}

module.exports = new ProductsDomains();
