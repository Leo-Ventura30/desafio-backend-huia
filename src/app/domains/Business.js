const { Business } = require("../models");
class BusinessDomain {
  async createBusiness(business) {
    await Business.sync();
    const createdBusiness = await Business.create(business);
    return { msg: "Usuario criado!", data: createdBusiness };
  }
  async readBusiness(business) {
    await Business.sync();
    const selectBusiness = await Business.findOne({
      where: business,
    });
    return { msg: "Usuario encontrado!", data: selectBusiness };
  }
  async updateBusiness(newBusiness, business) {
    await Business.sync();
    const selectBusiness = await this.readBusiness(business);
    if (!selectBusiness)
      throw new Error("Erro ao atualizar usuario!Tente novamente.");
    const updatedBusiness = await selectBusiness.update(newBusiness, {
      where: business,
    });
    return { msg: "Usuario atualizado!", data: updatedBusiness };
  }
  async deleteBusiness(business) {
    await Business.sync();
    if (!(await this.readBusiness(business)))
      throw new Error("Erro ao deletar usuario!Tente novamente.");
    const deleteBusiness = await Business.destroy({
      where: business,
    });
    return { msg: "Usuario deletado!", status: deleteBusiness };
  }
}

module.exports = new BusinessDomain();
