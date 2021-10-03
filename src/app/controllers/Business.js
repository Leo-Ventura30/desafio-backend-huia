const { Business } = require("../models");
class BusinessController {
  async createBusiness(req, res) {
    try {
      await Business.sync();
      const createdBussines = await Business.create({
        name: "Jonh Shoes",
        cpf_cnpj: "admins",
        email: "mail@asds.com",
        password: "123456",
      });
      return res.send(createdBussines.name + " Criado");
    } catch (error) {
      return res.send(error.message);
    }
  }
  async readBusiness(req, res) {
    try {
      await Business.sync();
      const selectBusiness = await Business.findOne({
        where: { email: "mail@asds.com" },
      });
      return res.send(selectBusiness);
    } catch (error) {
      return res.send(error.message);
    }
  }
  async updateBusiness(req, res) {
    try {
      await Business.sync();
      const updatedBusiness = await Business.update(
        { name: "Jonhy Shoes" },
        { where: { email: "mail@asds.com" } }
      );
      return res.send(updatedBusiness);
    } catch (error) {
      return res.send(error.message);
    }
  }
  async deleteBusiness(req, res) {
    try {
      await Business.sync();
      const deleteBusiness = await Business.delete({});
      return res.send(deleteBusiness);
    } catch (error) {
      return res.send(error.message);
    }
  }
}

module.exports = new BusinessController();
