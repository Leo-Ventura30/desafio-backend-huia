const UserDomain = require("../domains/User");
class UserController {
  async createUser(req, res) {
    try {
      const user = {
        name: "Jonh Shoes",
        login: "45445445445",
        email: "leo@leo.com",
        password: "12345leo",
        id_business: "77f1f710-2481-11ec-b0e2-f50769635c07",
      };
      const createdUser = await UserDomain.createUser(user);
      return res.json(createdUser);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async readUser(req, res) {
    try {
      const user = { login: "45445445445", email: "leo@leo.com" };
      const selectUser = await UserDomain.readUser(user);
      return res.json(selectUser);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async updateUser(req, res) {
    try {
      const user = { login: "45445445445", email: "leo@leo.com" };
      const newUser = {
        name: "Jonh Shoes",
        login: "45445445445",
        email: "leo@leo.com",
        password: "12345leo",
      };
      const updatedUser = await UserDomain.updateUser(newUser, user);
      return res.json(updatedUser);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async deleteUser(req, res) {
    try {
      const user = { login: "45445445445", email: "leo@leo.com" };
      const deleteUser = await UserDomain.delete(user);
      return res.send(deleteUser);
    } catch (error) {
      return res.json(error.message);
    }
  }
  async loginUser(req, res) {
    try {
      const { login, password } = req.body;
      const loginUser = await UserDomain.loginUser({ login, password });
      return res.json(loginUser);
    } catch (error) {
      return res.json(error.message);
    }
  }
}

module.exports = new UserController();
