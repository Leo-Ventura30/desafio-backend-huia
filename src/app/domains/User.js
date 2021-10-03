const { Op } = require("sequelize");
const { User } = require("../models");
class UserDomain {
  async createUser(user) {
    await User.sync();
    const createdUser = await User.create(user);
    return { msg: "Usuario criado!", data: createdUser };
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
