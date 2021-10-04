const { Products } = require("../models");
const ManufacturingDomain = require("./Manufacturing");
class ProductsDomains {
  async createProduct(product, lot, id_business) {
    Products.sync();
    product["id_code"] = 4565 + lot.id_code;
    const { id_code, ...rest } = product;
    const selectLet = await ManufacturingDomain.createLot({
      id_code: lot.id_code,
    });
    console.log(rest);
    const createdProduct = await Products.create({
      id_code,

      id_business,
      id_manufacturing: selectLet.dataLot.id,
    });
    return createdProduct;
  }
}

module.exports = new ProductsDomains();
