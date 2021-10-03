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
      where: user,
    });
    return { msg: "Usuario encontrado!", data: selectUser };
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
}

module.exports = new UserDomain();
