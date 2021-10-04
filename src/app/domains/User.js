const { Op } = require("sequelize");
const { User } = require("../models");
const BusinessDomain = require("../domains/Business");
class UserDomain {
  async createUser(user, business) {
    await User.sync();
    const selectBusiness = await BusinessDomain.createBusiness(business);
    const [dataUser, createdUser] = await User.findOrCreate({
      where: {
        [Op.or]: { login: user.login, email: user.email },
      },
      defaults: {
        name: user.name,
        login: user.login,
        email: user.email,
        password: user.password,
        id_business: selectBusiness.dataBusiness.id,
      },
    });
    if (!createdUser) throw new Error("Erro ao criar usuario!Tente novamente.");
    return { msg: "Usuario criado!", data: dataUser, createdUser };
  }
  async readUser(user) {
    await User.sync();
    const selectUser = await User.findOne({
      where: { [Op.or]: user },
    });
    return selectUser;
  }
  async updateUser(newUser, user) {
    await User.sync();
    const selectUser = await this.readUser(user);
    if (!selectUser)
      throw new Error("Erro ao atualizar usuario!Tente novamente.");
    const updatedUser = await selectUser.update(newUser, {
      where: user,
    });
    return { msg: "Usuario atualizado!", data: updatedUser };
  }
  async deleteUser(user) {
    await User.sync();
    if (!(await this.readUser(user)))
      throw new Error("Erro ao deletar usuario!Tente novamente.");
    const deleteUser = await User.destroy({
      where: user,
    });
    return { msg: "Usuario deletado!", status: deleteUser };
  }
  async loginUser(user) {
    await User.sync();
    const { login, password } = user;
    const loginUser = await this.readUser({ login, email: login });
    if (!loginUser || !(await loginUser.checkPassword(password))) {
      throw new Error("Usuario ou senha invalido!");
    }
    return loginUser;
  }
}

module.exports = new UserDomain();
