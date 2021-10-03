const BusinessDomain = require("../domains/Business");
class BusinessController {
  async createBusiness(req, res) {
    try {
      const business = {
        name: "Jonh Shoes",
        cpf_cnpj: "45445445445",
      };
      const createdBusiness = await BusinessDomain.createBusiness(business);
      return res.json(createdBusiness);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async readBusiness(req, res) {
    try {
      const business = { cpf_cnpj: "45445445445" };
      const selectBusiness = await BusinessDomain.readBusiness(business);
      return res.json(selectBusiness);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async updateBusiness(req, res) {
    try {
      const business = { cpf_cnpj: "45445445445" };
      const newBusiness = {
        name: "Jonhycky Shoes",
        cpf_cnpj: "12345678910",
      };
      const updatedBusiness = await BusinessDomain.updateBusiness(
        newBusiness,
        business
      );
      return res.json(updatedBusiness);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async deleteBusiness(req, res) {
    try {
      const business = { cpf_cnpj: "45445445445" };
      const deleteBusiness = await BusinessDomain.deleteBusiness(business);
      return res.json(deleteBusiness);
    } catch (error) {
      return res.json(error.message);
    }
  }
}

module.exports = new BusinessController();
