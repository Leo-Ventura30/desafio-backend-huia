const { Clients } = require("../models");
class ClientsController {
  async createClients(req, res) {
    try {
      await Clients.sync();
      const createdBussines = await Clients.create({
        name: "Jonh Shoes",
        cpf_cnpj: "admins",
        email: "mail@asds.com",
        password: "123456",
      });
      return res.send(createdBussines.name + " Criado");
    } catch (error) {
      console.log(error);
    }
  }
  async readClients(req, res) {
    try {
      await Clients.sync();
      const selectClients = await Clients.findOne({
        where: { email: "mail@asds.com" },
      });
      return res.send(selectClients);
    } catch (error) {
      return res.send(error);
    }
  }
  async updateClients(req, res) {
    try {
      await Clients.sync();
      const updatedClients = await Clients.update({}, { where: {} });
      return res.send(updatedClients);
    } catch (error) {
      return res.send(error);
    }
  }
  async deleteClients(req, res) {
    try {
      await Clients.sync();
      const deleteClients = await Clients.delete({});
      return res.send(deleteClients);
    } catch (error) {
      return res.send(error);
    }
  }
}

module.exports = new ClientsController();
