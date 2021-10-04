const { Manufacturings } = require("../models");
class ManufacturingDomain {
  async createLot(lot) {
    Manufacturings.sync();
    const [dataLot, createdLot] = await Manufacturings.findOrCreate({
      where: { id_code: lot.id_code },
      defaults: {
        quantity_products: 0,
      },
    });

    return { dataLot, createdLot };
  }
  async readLot(req, res) {}
  async updateLot(req, res) {}
  async deleteLot(req, res) {}
}

module.exports = new ManufacturingDomain();
