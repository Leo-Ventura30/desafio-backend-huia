const { Client } = require("../models");
class ClientController {
  async createClient(req, res) {
    try {
      await Client.sync();
      const birthday = new Date(1998, 4, 30);
      const createdClient = await Client.create({
        name: "Zoe Doe",
        cpf: "45424955567",
        birthday,
      });
      return res.send(createdClient);
    } catch (error) {
      return res.send(error.message);
    }
  }
  async readClient(req, res) {
    try {
      await Client.sync();
      const selectClient = await Client.findOne();
      return res.send(selectClient);
    } catch (error) {
      return res.send(error.message);
    }
  }
  async updateClient(req, res) {
    try {
      await Client.sync();
      const updatedClient = await Client.update({}, { where: {} });
      return res.send(updatedClient);
    } catch (error) {
      return res.send(error);
    }
  }
  async deleteClient(req, res) {
    try {
      await Client.sync();
      const deleteClient = await Client.delete({});
      return res.send(deleteClient);
    } catch (error) {
      return res.send(error);
    }
  }
}

module.exports = new ClientController();
