const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define("Business", {
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
    cpf_cnpj: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
  });

  return Business;
};
