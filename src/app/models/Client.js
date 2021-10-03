const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("Client", {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
      type: DataTypes.UUID,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    cpf: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    birthday: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
  return Client;
};
